//import vuex
import { createStore } from 'vuex'

//import module auth
import auth from './module/auth'

//import module order
import order from './module/order'

//import module category
import category from './module/category'

//import module slider
import slider from './module/slider'

//create store vuex
export default createStore({

    modules: {
        auth,       // <-- module auth
        order,      // <-- module order
        category,   // <-- module category
        slider,     // <-- module slider
    }

})