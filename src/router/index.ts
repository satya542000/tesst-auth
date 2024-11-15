import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from "@/store";
import Login from '../views/login.vue';
import Token from '../views/token.vue';
import Session from '../views/session.vue';
import Onboarding from '../views/onboarding.vue';
import Logout from '../views/logout.vue';

const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '*',
    //     name: 'Page not found',
    //     meta: {
    //         title: 'error',
    //         layout: 'empty-layout',
    //     },
    //     props: { errorResult: { Number: 404, Description: 'asfsa' } },
    //     component: () => import('@/views/error.vue')
    // },
    {
        path: '/error',
        name: 'error',
        meta: {
            title: 'error',
            layout: 'empty-layout',
        },
        // props: { errorResult: { Number: 404, Description: 'asfsa' } },
        props:true,
        component: () => import('@/views/error.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/error',
    },
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            
        },
    },
    {
        path: '/token',
        name: 'token',
        component: Token
    },
    {
        path: '/session',
        name: 'session',
        component: Session
    },
    {
        path: "/onboarding",
        name: "onboarding",
        component: Onboarding,
    },
    {
        path: "/logout",
        name: "logout",
        component: Logout,
    },
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

router.beforeEach(async (to, from, next) => {
    document.title=`Authentication - ${to.meta.title}`
    if(to.name == 'login'){
        if (!localStorage.getItem('AUTH_ID')) {
            next()
        } else{
            const userInfo = store.getters.userInfo;
            const roles = userInfo.roles.map((a:any) => a.roleId);
            if(roles.includes(10201 || 10202 || 10206)){
                window.location.href = `${process.env.VUE_APP_ORG_WEBAPP_URL}`
            } else{
                window.location.href = `${process.env.VUE_APP_MONITOR_WEBAPP_URL}`
            }
        }
    }
    next();
    // console.log('1');
    // if (!localStorage.getItem('AUTH_ID')) {
    //     console.log('2', to.query.session);
    //     next('/');
    // } else {
    //     console.log('5');
    //     const userInfo = store.getters.userInfo;
    //     if (!userInfo.roles) {
    //         await store.dispatch('getUserInfo').then((res) => {
    //             next();
    //         });
    //     }
    //     else {
    //         next();
    //     }
    // }
});

export default router
