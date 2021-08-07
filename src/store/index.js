import { createStore } from 'vuex'

import htlReserve from './modules/htlReserve';
import htlAuth from './modules/htlAuth';
import htlAdmin from './modules/htlAdmin.js';

//Create a new store instance.

const store = createStore({
   modules: {
      htlAdmin,
      htlReserve,
      htlAuth
   }
})

export default store;