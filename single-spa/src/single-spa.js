import { registerApplication, start } from 'single-spa'

Promise.all([System.import('vue'), System.import('vue-router'), System.import('vuex'), System.import('iview')]).then(function (modules) {

  const [Vue, router, vuex, iview] = modules

  Vue.use(router);
  Vue.use(vuex);
  Vue.use(iview);

  window.router = router
  window.vue = Vue
  // 主框架
  registerApplication(
    'main-app',
    () => System.import('main-app'),
    location => true // root
  );

  // 下面注册子系统...
  registerApplication(
    'vue-app',
    () => System.import('vue-app'),
    location => location.pathname.startsWith('/vue')
  );

  start();
})
