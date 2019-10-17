import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('./views/AboutUs.vue'),
    },
    {
      name: 'recursos',
      path: '/recursos',
      component: () => import('./views/recursos.vue'),
    },
    {
      name: 'faqs',
      path: '/faqs',
      component: () => import('./views/FAQs.vue'),
    },
    {
      name: 'moduloSeguridad',
      path: '/moduloseguridad',
      component: () => import('./components/modules/moduloSeguridad.vue'),
    },
    {
      name: 'moduloDerechos',
      path: '/moduloderechos',
      component: () => import('./components/modules/moduloDerechos.vue'),
    },
    {
      name: 'moduloIncorporacion',
      path: '/moduloincorporacion',
      component: () => import('./components/modules/moduloIncorporacion.vue'),
    },
    {
      name: 'moduloProtocolos',
      path: '/moduloprotocolos',
      component: () => import('./components/modules/moduloProtocolos.vue'),
    },
    {
      name: 'moduloReglamento',
      path: '/moduloreglamento',
      component: () => import('./components/modules/moduloReglamento.vue'),
    },
    {
      name: 'moduloPagos',
      path: '/modulopagos',
      component: () => import('./components/modules/moduloPagos.vue'),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('./views/Login.vue'),
    },
    {
      name: 'cuestionarioDeberes',
      path: '/cuestionariodeberes',
      component: () => import('./components/modules/cuestionarioDeberes.vue'),
    }
  ],
});

