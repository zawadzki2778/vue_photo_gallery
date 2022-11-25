<template>
  <v-container>
    <PhotoForm v-if="photos.length < 9" @addPhoto="addPhoto" />
    <div v-else>NOT MOORE PHOTOS</div>
    <!--привязываем в комп. назв.emit addPhoto из PhotoForm, вешаем на него слушатель и после = прописываем ф-ию, которая будет вызываться в methods и пушить фото в массив -->
    <v-row>
      <Photo
        v-for="(photo, index) in getAllPhotos"
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
     this.fetchPhotos(this.photos)
    /* this.$store.dispatch(fechPhotos);  */ //dispatch работает с аcинхронныии actions, в параметре назв. actions
  },
  computed: {
    ...mapGetters(["getAllPhotos"]),
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
    // fetchTodo() {
    
    addPhoto(photo) {
      // название ф-ции, присвоенное выше при подключении комп.PhotosPage, принимающее в кач-ве параметра объект photo
      this.photos.push(photo);
    },
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