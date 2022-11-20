<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto"/><!--привязываем в комп. назв.emit addPhoto из PhotoForm, вешаем на него слушатель и после = прописываем ф-ию, которая будет вызываться в methods и пушить фото в массив -->
        <v-row>
            <Photo v-for="(photo, id) in photos" 
                   :key="id" 
                   :photo="photo"
                   @openPhoto="openPhoto" />
            <!--:photo - it`s name of props from Photo.vue , "photo" - element, which we have after loop-->
            <!--вешаем млушптель на заемиченый openPhoto-->
        </v-row>
        <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" /> <!-- передаем через props обьект currentPhoto в comp. PhotoDialog-->                    
    </v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue'
import PhotoForm from '@/components/photo/PhotoForm.vue'
import PhotoDialog from '@/components/photo/PhotoDialog.vue'
export default {
    name: 'PhotosPage',
    components: { Photo, PhotoForm, PhotoDialog },
    data() {
        return {
        photos: [],
        currentPhoto: {},
        dialogVisible: false // from PhotoDialog str 26
        }
    },
    mounted() {
        this.fetchTodo()
    },
    methods: {
        fetchTodo() {
            this.axios
            .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
            .then((response) => (this.photos = response.data))
        },
        addPhoto(photo) { // название ф-ции, присвоенное выше при подключении комп.PhotosPage, принимающее в кач-ве параметра объект photo
            this.photos.push(photo)
        },
        openPhoto(photo) { // название ф-ции, присвоенное в Photo.vue для emit 
            this.currentPhoto = photo
            this.dialogVisible = true
        }
    }
};
</script>

<style scoped>
</style>