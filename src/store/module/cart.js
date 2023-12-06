//import global API
import Api from '../../api/Api'

const cart = {

    //set namespace true
    namespaced: true,

    //state
    state: {
    
        //cart
        cart: [],

        //total cart
        cartTotal: 0,

    },

    //mutations
    mutations: {

        //get data cart
        GET_CART(state, product) {
            state.cart = product
        },

        //get total cart
        TOTAL_CART(state, total) {
            state.cartTotal = total
        },

    },

    //actions
    actions: {

        //action addToCart
        addToCart({ commit }, { product_id, price, quantity, weight }) {

            //get data token dan user
            const token = localStorage.getItem('token')
            const user  = JSON.parse(localStorage.getItem('user'))

            //set axios header dengan type Authorization + Bearer token
            Api.defaults.headers.common['Authorization'] = "Bearer " +token
            
            //send data cart ke server
            Api.post('/cart', {
                product_id: product_id,
                price: price,
                quantity: quantity,
                weight: weight,
                customer_id: user.id
            })
            .then(() => {

                //get dat cart
                Api.get('/cart')
                .then(response => {
                    
                    //commit mutation GET_CART
                    commit('GET_CART', response.data.cart)

                })

                //get total cart
                Api.get('/cart/total')
                .then(response => {
                    
                    //commit mutation TOTAL_CART
                    commit('TOTAL_CART', response.data.total)

                })

            })
        },

        //cart count
        cartCount({ commit }) {

            //get data token dan user
            const token = localStorage.getItem('token')

            //set axios header dengan type Authorization + Bearer token
            Api.defaults.headers.common['Authorization'] = "Bearer " +token

            //get dat cart
            Api.get('/cart')
            .then(response => {
                
                //commit mutation GET_CART
                commit('GET_CART', response.data.cart)

            })

        },

        //cart total
        cartTotal({ commit }) {

            //get data token dan user
            const token = localStorage.getItem('token')

            //set axios header dengan type Authorization + Bearer token
            Api.defaults.headers.common['Authorization'] = "Bearer " +token

            //get dat cart
            Api.get('/cart/total')
            .then(response => {
                
                //commit mutation GET_CART
                commit('TOTAL_CART', response.data.total)

            })

        },


    },

    //getters
    getters: {

        //get cart
        getCart(state) {
            return state.cart
        },
        
        //count cart
        cartCount(state) {
            return state.cart.length
        },

        //cart total
        cartTotal(state) {
            return state.cartTotal
        }

    }

}

export default cart