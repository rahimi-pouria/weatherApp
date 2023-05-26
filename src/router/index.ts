import { createRouter, createWebHistory } from 'vue-router'
// import SignUp from '../views/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      beforeEnter: () => { 
        if (!localStorage.getItem('name')) {
          router.push('/')
        }
      }

    },
    {
      path: '/WorkList',
      name: 'WorkList',
      component: () => import('../views/WorkList.vue'),
      beforeEnter: () => { 
        if (!localStorage.getItem('name')) {
            router.push('/')
         }
      }
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: () => import('../views/Weather.vue'),
      beforeEnter: () => { 
        if (!localStorage.getItem('name')) {
            router.push('/')
         }
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/setting.vue'),
      beforeEnter: () => { 
        if (!localStorage.getItem('name')) {
            router.push('/')
         }
      }
    },
    // {
    //   path: '/SignUp',
    //   name: 'SignUp',
    //   component: SignUp 
    // },
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
