import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

import locales from '../i18n'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const localeKeys = Object.keys(locales);

let sb = localeKeys.reduce((str, k) => str + k + '|', '/:locale(');
sb = sb.substring(0, sb.length - 1) + ')?';
for (let i = 0; i < routes.length - 1; i++) {
  if (routes[i].path.substring(0, 6) !== '/:locale') routes[i].path = sb + routes[i].path;
}

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach((to, from) => {
    if (to.params.locale === '') return '/' + localeKeys[0] + to.fullPath;
  })

  return Router
})
