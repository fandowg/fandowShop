import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect:'/'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: () => import('@/views/ProductList')
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
    path: '/shopping-list',
    name: 'ShoppingList',
    component: () => import('@/views/ShoppingList.vue')
  },
  {
    path: '/check-cart',
    name: 'CheckCart',
    component: () => import('@/views/CheckCart.vue')
  },
  {
    path: '/order-info',
    name: 'OrderInfo',
    component: () => import('@/views/OrderInfo.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin/Dashboard.vue'),
    redirect:'/admin/products',
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/Admin/Products.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/Admin/Coupons.vue'),
        meta:{
          requiresAuth:true,
        }
      },
      {
        path: 'orderlist',
        name: 'OrderList',
        component: () => import('@/views/Admin/OrderList.vue'),
        meta:{
          requiresAuth:true,
        }
      },
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
