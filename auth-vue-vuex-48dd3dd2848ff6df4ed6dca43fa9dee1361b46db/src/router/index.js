import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
// import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  //  webpackChunkName: "registrar" é para criar um arq do webpack so com os itens importados
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import( /* webpackChunkName: "registrar" */
      '../views/NovoUsuario.vue'),
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !store.state.token) {
    return next({ path: '/login'})
  }
  next()
})
export default router
