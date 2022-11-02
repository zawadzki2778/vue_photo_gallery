<template>
  <div>
    <v-container> {{ photo.title + photo.id }} </v-container>
  </div>
</template>

<script>
export default {
  // name: "Photo",

  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>