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
                @deletePhoto="deletePhoto(index)" 
            />
            <!--вешаем cлушaтель на заемиченый openPhoto-->
            <!-- Добавил индекс чтобы удалялась именно та карта --->
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
        isPhotoVisible: false
        };
    },
    mounted() {
        this.$root.$on('addPhoto', (value) => { 
        this.GET_PHOTOS.push(value)
         })
        this.FETCH_PHOTOS(this.photos)
    },  
    computed: {
        ...mapGetters(["GET_PHOTOS"]),
    },
    methods: {
        ...mapActions(["FETCH_PHOTOS","DELETE_FROM_PHOTOS"]),
        // название ф-ции, присвоенные в Photo.vue для emit
        openPhoto(photo) {
            this.currentPhoto = photo;
            this.dialogVisible = true;
        },
        deletePhoto(index) {
            this.DELETE_FROM_PHOTOS(index)
            console.log(index);
        },       
    },
};
</script>

<style scoped>
</style>