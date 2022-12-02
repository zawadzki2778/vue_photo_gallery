<template>
    <v-container>
        <PhotoForm />
        <!--привязываем в комп. назв.emit addPhoto из PhotoForm, вешаем на него слушатель и после = прописываем ф-ию, которая будет вызываться в methods и пушить фото в массив -->
        <v-row>
        <Photo
            v-for="(photo, index) in GET_PHOTOS"
            :key="index"
            :photo="photo"
            @openPhoto="openPhoto"
        />
        <!--вешаем cлушaтель на заемиченый openPhoto-->
        </v-row>
        <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
export default {
    name: "PhotosPage",
    components: { Photo, PhotoForm, PhotoDialog },
    data() {
        return {
        photos: [],
        currentPhoto: {},
        dialogVisible: false, // from PhotoDialog str 26
        };
    },
    mounted() {
        this.$root.$on('addPhoto', (value) =>{
        this.GET_PHOTOS.push(value)
         })
        this.FETCH_PHOTOS(this.photos)
    },
    computed: {
        ...mapGetters(["GET_PHOTOS"]),
    },
    methods: {
        ...mapActions(["FETCH_PHOTOS"]),

        openPhoto(photo) {
        // название ф-ции, присвоенное в Photo.vue для emit
        this.currentPhoto = photo;
        this.dialogVisible = true;
        },
    },
};
</script>

<style scoped>
</style>