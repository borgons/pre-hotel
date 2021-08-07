import axios from 'axios'
axios.defaults.withCredentials = true

const Auth = {
   adminUsername:'',
   adminPass:''
}

const authRegister = {
   adminID: '',
   adminUsername: '',
   adminEmpID: '',
   adminEmpFirst: '',
   adminEmpLast: '',
   adminPass: '',
   adminPass_confirmation: ''
}

const state= {
   adminEmps:[],
   loginErrors:'',
   errorMsg:'',
};

const getters = {
   loginMsgErrors: state => state.loginErrors
};

const actions = {

   async register({ commit }, authRegister){
            axios.post(
               'http://localhost:8080/api/register', authRegister)
               .then(response => {
                  if(response.status == 200){
                     commit('newAdmin', response.data);
                     commit('setAdmin', response.data);
                  }
                  window.location.href="#/login"
               })
               .catch(err => {
                  if (err.response.status == 422) {
                     this.errors = err.response.data.errors
                     commit('setErrors', this.errors);
                  } 
               })
      
   },

   login({ commit }, Auth){
      axios.get('/sanctum/csrf-cookie').then(response => {
         axios.post('http://localhost:8080/api/login', Auth)
            .then(response2 => {
               localStorage.setItem("token", response2.data.token)
               window.location.href="#/showGuest"
            }).catch(error => {
               if (error.response.status == 422) {
                  this.errors = error.response.data.errors
                  commit('setErrors', this.errors);
               } else if (error.response.status == 401){
                  this.loginErrors = 'Bad Credentials. Please Try Again....'
                  commit('setLoginError', this.loginErrors  );
               } else {
                  console.log(error);
               }
            }) 
      });
   },

   logout(){
      axios.get('/sanctum/csrf-cookie').then(response => {
         axios.post('http://localhost:8080/api/logout').then(response => {
         localStorage.removeItem("token")
            window.location.href="#/login"
         })
      });
   }
};

const mutations = {
   setLoginError: (state, loginError) => (state.loginErrors = loginError), 
   setErrors: (state, errors) => (state.errorMsg = errors),
   newAdmin: (state, adminEmp) => state.adminEmps.unshift(adminEmp)

};

export default {
   state, 
   getters, 
   actions,
   mutations, 
}