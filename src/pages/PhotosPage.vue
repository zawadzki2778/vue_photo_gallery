<template>
  <div>
    <v-container>
      <Photo v-for="(photo, id) in photos" :key="id" :photo="photo" />
      <!--:photo - it`s name of props from Photo.vue , "photo" - element, which we have after loops-->
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
      photos: [],
    },
  }

  mounted () {
      this.axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
      .then(response => this.photos = response.data)
    }
}
</script>

<style scoped>
</style>