import Vue from 'vue'
import Vuex from 'vuex'
import photoModule from '../modules/photoModule'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: { photoModule },
}) 
