//import global API
import Api from '../../api/Api'

const category = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //index categories
        categories: [],
    
    },

    //mutations
    mutations: {

        //set state categories dengan data dari response 
        GET_CATEGORIES(state, categories) {
            state.categories = categories
        },

    },

    //actions
    actions: {

        //action getCategories
        getCategories({ commit }) {

            //get data categories ke server
            Api.get('/categories')
            .then(response => {

                //commit ke mutation GET_CATEGORIES dengan response data
                commit('GET_CATEGORIES', response.data.categories)

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

export default category