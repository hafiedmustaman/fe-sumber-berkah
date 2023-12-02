//import vue router
import { createRouter, createWebHistory } from 'vue-router'
// createRouter digunakan untuk membuat konfigurasi sebuah router di dalam vue router.
// createWebHistory digunakan untuk membuat URL dari vue router menjadi lebih friendly.

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

export default router