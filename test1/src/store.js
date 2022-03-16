import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// наполняем хранилище Vuex свойствами и методами
export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [/* this.subscribe((mutation, state) => {
    console.log(`mutation: ${mutation}, state: ${state}`)
  }) */],
    state: {
        data: ''

    },
    getters: {},
    actions: {},
    mutations: {
        changeData (state, data) {
            state.data = data
        }

    },
})