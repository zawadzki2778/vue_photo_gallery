/* import axios from "axios"

export default {
    state: {
        photos: []
    },
    getters: {
        getAllPhotos(state) {
            return state.photos
        }
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload
        }
    },
    actions: {
        fetchPhotos(context) {
            this.axios
                .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
                .then(response => context.commit('setPhotos', response.data))
        }
    }
}
 */


import axios from "axios";

export default ({

  state: {

    photos: [],

  },

  getters: {

    getAllPhotos: (state) => state.photos,

  },

  actions: {

    async fetchPhotos({ commit }) {
        console.log('321')
      try {

        const data = await axios.get(

          "https://mocki.io/v1/43ca95fe-ed74-409e-ab46-895cc18b9920"

        );

        commit("setPhotos", data.data);

      } catch (error) {

        alert('123');

        console.log('123');

      }

    },

  },

  mutations: {

    setPhotos(state, photos) {

      state.photos = photos;

    },

  },

});

