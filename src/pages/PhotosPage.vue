<template>
    <v-container>
        <PhotoForm />
        <v-row>
            <Photo v-for="(photo, id) in photos" :key="id" :photo="photo" />
            <!--:photo - it`s name of props from Photo.vue , "photo" - element, which we have after loops-->
        </v-row>
    </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue"
export default {
    name: "PhotosPage",
    components: { Photo, PhotoForm },
    data() {
        return {
        photos: [],
        }
    },

    mounted() {
        this.fetchTodo()
    },
    methods: {
        fetchTodo() {
            this.axios
            .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
            .then((response) => (this.photos = response.data));
        }
    }
};
</script>

<style scoped>
</style>