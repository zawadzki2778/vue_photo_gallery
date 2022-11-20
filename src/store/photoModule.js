import axios from "axios"

export default {
    state: {// храним данные
        photos: []
    },
    mutations: {// ф-ии меняющие состояние
        setPhotos(state, payload) {
            state.photos = payload
        }
    },
    getters: {// ф-ии возвращащие результаты вычислений (как computed)
        getAllPhotos(state) { // б.возвр.все фото
            return state.photos
        }
    },
    actions: {// ф-ии асинхронные работающие с внешним API
        fetchPhotos(context) {
            axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
            .then(response => context.commit('setPhotos', response.data))
        }
    }
}