//import vue router
import { createRouter, createWebHistory } from 'vue-router'
// createRouter digunakan untuk membuat konfigurasi sebuah router di dalam vue router.
// createWebHistory digunakan untuk membuat URL dari vue router menjadi lebih friendly.

//import store vuex
import store from '../store'

//define a routes
const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },
    {
        path: '/customer/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "login" */ '../views/dashboard/Index.vue'),
        //check is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/customer/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "order" */ '../views/order/Index.vue'),
        meta: {
          //chek is loggedIn
          requiresAuth: true
        }
    },
    {
        path: '/customer/order/:snap_token',
        name: 'detail_order',
        component: () => import(/* webpackChunkName: "detail_order" */ '../views/order/Show.vue'),
        meta: {
          //chek is loggedIn
          requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/home/Index.vue')
    },
    {
        path: '/product/:slug',
        name: 'detail_product',
        component: () => import(/* webpackChunkName: "detail_product" */ '../views/product/Show.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import(/* webpackChunkName: "category" */ '../views/category/Index.vue')
    },
    {
        path: '/category/:slug',
        name: 'detail_category',
        component: () => import(/* webpackChunkName: "detail_category" */ '../views/category/Show.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/cart/Index.vue'),
        meta: {
          //chek is loggedIn
          requiresAuth: true
        }
    }
]
// path --> merupakan URL yang akan dihasilkan, di atas kita set dengan /register dan /login, jadi jika ada yang mengakses URL tersebut, maka route inilah yang akan digunakan.
// name --> merupakan nama dari route itu sendiri, ini akan mepermudah kita dalam pemanggilan route di dalam component.
// component --> merupakan views/component yang akan digunakan di dalam route, di atas misalnya untuk register, kita arahkan ke dalam folder ../views/auth/Register.vue.

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes
})

//define route for handle authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })

export default router