import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import SignUp from "../views/pages/SignUp.vue"
import Test from "../views/pages/Test.vue"
import TestResults from "../views/pages/TestResults.vue"
import InfoSheet from "../views/pages/InfoSheet.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/login", component: Login },
    { path: "/signup", component: SignUp },
    { path: "/test", component: Test },
    { path: "/testresults", component: TestResults },
    { path: "/infosheet", component: InfoSheet },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;