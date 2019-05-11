import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/login.vue'
import SecureComponent from "@/components/secure.vue"
import RegistroComponent from "@/components/registro.vue"

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/registro",
            name: "registro",
            component: RegistroComponent
        }
    ]
})
