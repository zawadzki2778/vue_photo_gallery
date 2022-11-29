import axios from "axios";

export default ({
    state: {
        photos: [],
        dialogVisible: false,
        isDropDownVisible: false
    },
    getters: {
        GET_PHOTOS: (state) => state.photos,
    
        GET_DROPDOWN: (state) => state.isDropDownVisible,
    },
    actions: {
        async FETCH_PHOTOS({ commit }) {
            console.log('321')
            try {
                const data = await axios.get(
                    "https://jsonplaceholder.typicode.com/photos?_limit=3"
                );
                commit('SET_PHOTOS', data.data);
            } catch (error) {
                alert('123');
                console.log('123');
            }
        },
        FETCH_DROPDOWN({ commit }) {
            commit('SET_DROPDOWN')
        }
    },
    mutations: {
        SET_PHOTOS(state, photos) {
            state.photos = photos;
        },
        SET_DROPDOWN(state) {
            state.isDropDownVisible = true;
        }
    },
});

// export default {
//     state: {
//         photos: []
//     },
//     getters: {
//         getAllPhotos(state) {
//             return state.photos
//         }
//     },
//     mutations: {
//         setPhotos(state, payload) {
//             state.photos = payload
//         }
//     },
//     actions: {
//         fetchPhotos(context) {
//             this.axios
//                 .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
//                 .then(response => context.commit('setPhotos', response.data))
//         }
//     }
// }
//https://mocki.io/v1/43ca95fe-ed74-409e-ab46-895cc18b9920