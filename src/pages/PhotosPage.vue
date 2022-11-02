<template>
  <div>
    <v-container>
      <Photo
        v-for="(photo, id) in photos" 
        :key="id"
        :photo="photo"
      />
    </v-container>
  </div>
</template>

<script>
import Photo from "@/components/photo/Photo.vue";
export default {
  name: "PhotosPage",
  components: { Photo },
  data() {
    return {
      photos: [
        { id: 1, title: "photo_1" },
        { id: 2, title: "photo_2" },
        { id: 3, title: "photo_3" },
        { id: 4, title: "photo_4" },
        { id: 5, title: "photo_5" },
      ],
    };
  },
};
</script>

<style scoped>
</style>