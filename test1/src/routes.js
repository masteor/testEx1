import Vue from 'vue'
import Router from 'vue-router'
import tab1 from "@/components/tab1";
import tab2 from "@/components/tab2";

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    // warn: base на локалхост не работает
    // base: process.env.BASE_URL,
    routes: [
        // root.Menu,
        {
            path: '/',
        },
        {
            path: '/tab1', component: tab1
        },
        {
            path: '/tab2', component: tab2
        },
        ]})

export { router }