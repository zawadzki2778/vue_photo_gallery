import axios from "axios";

export default ({
    state: {
        photos: [],
        dialogVisible: false,
        isDropDownVisible: false,
        isPhotoVisible: false
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
        },
        DELETE_FROM_PHOTOS({commit}, index) {
            commit('REMOVE_FROM_PHOTOS', index)
        }
    },
    mutations: {
        SET_PHOTOS(state, photos) {
            state.photos = photos;
        },
        SET_DROPDOWN(state) {
            state.isDropDownVisible = true;
        },
        REMOVE_FROM_PHOTOS(state, index) { // связываем в PhotosPage стр 53
            state.photos.splice(index, 1)
        }
    },
})