import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

// AUTH PART
function isLoggedIn(){
   return localStorage.getItem("token")
}

router.beforeEach((to, from, next) => {
   // instead of having to check every route record with
   if (to.matched.some(record => record.meta.requiresAuth)){
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if(!isLoggedIn()){
         next({
            name:'Login',
         })
      } else {
         next()
      }
   } else if (to.matched.some(record => record.meta.requiresVisitor)){
      if(isLoggedIn()){
         next({
            name:['ShowGuest','AdminAbout','AdminCheckGuest','AdminAddEmp','AdminGuestDetail']
            
         })
      } else {
         next()
      }
   } else {
      next()
   }
})

createApp(App)
   .use(router)
   .use(store)
   .mount('#app')

