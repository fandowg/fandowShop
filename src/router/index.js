import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/product-list',

    component: () => import('@/views/ProductList'),
    children: [

      {
        path: '',
        name: 'ProductList',
        redirect: '/product-list/all'
      },
      {
        path: ':category',
        name: 'ProductListCategory',
        component: () => import('@/views/ProductList')
      }

    ]
  },
  {
    path: '/product-list/:category/:id',
    name: 'ProductItem',
    component: () => import('@/views/ProductItem')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Admin/Login.vue')
  },

  {
    path: '/check-cart',
    name: 'CheckCart',
    component: () => import('@/views/CheckCart.vue')
  },
  {
    path: '/order',

    component: () => import('@/views/Order.vue'),
    children: [
      {
        path: '',
        redirect: 'order-info'
      },
      {
        path: 'order-info',
        name: 'OrderInfo',
        component: () => import('@/views/OrderInfo.vue')
      },
      {
        path: 'payment/:id',
        name: 'Payment',
        component: () => import('@/views/Payment.vue')
      },
      {
        path: 'order-done/:id',
        name: 'OrderDone',
        component: () => import('@/views/Payment.vue')
      }

    ]
  },

  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/products',
    component: () => import('@/views/Admin/Dashboard.vue'),
    children: [{
      path: 'products',
      name: 'Products',
      component: () => import('@/views/Admin/Products.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'coupons',
      name: 'Coupons',
      component: () => import('@/views/Admin/Coupons.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'orderlist',
      name: 'OrderList',
      component: () => import('@/views/Admin/OrderList.vue'),
      meta: {
        requiresAuth: true
      }
    }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const url = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(url).then((response) => {
      if (response.data.success) {
        next()
      } else {
        Vue.prototype.$bus.$emit('message:push', response.data.message, 'text-danger')
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})

export default router
