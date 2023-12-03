//import global API
import Api from '../../api/Api'

const order = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        
        //define state orders
        orders: [],

    },

    //mutations
    mutations: {

        //GET ORDER
        GET_ORDER(state, orders) {
            state.orders = orders // <-- assign state orders dari hasil response
        },

    },

    //actions
    actions: {

        //action getOrder
        getOrder({ commit }) {

            //define variable token
            const token = localStorage.getItem('token')

            Api.defaults.headers.common['Authorization'] = "Bearer " +token
            Api.get('/order')
            .then(response => {
                
                //commit ke mutation GET_ORDER
                commit('GET_ORDER', response.data.data)

            })

        },

    },

    //getters
    getters: {

        //getter getOrder
        getOrder(state) {
            return state.orders
        },

    }

}

export default order