import axios from 'axios'

let BASEAPI = axios.create({
   baseURL: 'http://localhost:8080/api'
});

let API = function(){
   let token = localStorage.getItem("token");

   if(token){
      BASEAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   return BASEAPI;
}

export default API;