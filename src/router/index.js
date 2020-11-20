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
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order.vue')
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
