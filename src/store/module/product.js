//import global API
import Api from '../../api/Api'

const product = {

    //set namespace true
    namespaced: true,

    //state
    state: {
    
        //index products
        products: [],

    },

    //mutations
    mutations: {

        //set state products dengan data dari response 
        GET_PRODUCTS(state, products) {
            state.products = products
        },

    },

    //actions
    actions: {

        //action getProducts
        getProducts({ commit }) {

            //get data sliders ke server
            Api.get('/products')
            .then(response => {

                //commit ke mutation GET_PRODUCTS dengan response data
                commit('GET_PRODUCTS', response.data.products)

            }).catch(error => {

                //show error log dari response
                console.log(error)

            })
        },

    },

    //getters
    getters: {

    }

}

export default product