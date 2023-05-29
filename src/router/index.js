import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from "@/components/Login/LoginPage.vue";
import SignUpPage from "@/components/SignUp/SignUpPage.vue";
import MainView from "@/components/View/MainView.vue";
// import AddNewBook from "@/components/Modal/AddNewBook.vue";
import BooksView from "@/components/View/BooksView.vue";
import OrdersView from "@/components/View/OrdersView.vue";
import ReportsView from "@/components/View/ReportsView.vue";
import BasketView from "@/components/View/BasketOrderView.vue";
import WrapperLinks from "@/components/Wrapper/WrapperLinks.vue";
import BookGoods from "@/components/BooksCatalog/BooksCatalog.vue";


const routes = [
    {
        path: '/login',
        name: LoginPage,
        component: LoginPage
    },
    {
        path: '/signup',
        name: SignUpPage,
        component: SignUpPage
    },
    {
        path: '/',
        name: MainView,
        component: MainView,
        children: [
            {
                path: '',
                name: BookGoods,
                component: BookGoods
            },
            {
                path: 'basket',
                name: BasketView,
                component: BasketView
            },
        ]
    },
    {
        path: '/wrapper-links/',
        name: WrapperLinks,
        component: WrapperLinks,
        children: [
            {
                path: 'books',
                name: BooksView,
                component: BooksView
            },
            {
                path: 'orders',
                name: OrdersView,
                component: OrdersView
            },
            {
                path: 'reports',
                name: ReportsView,
                component: ReportsView
            },
        ]
    },
    // {
    //     path: '/add-new-book',
    //     name: AddNewBook,
    //     component: AddNewBook
    // },


]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const isAuthenticated = localStorage.getItem('token')

    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})
export default router