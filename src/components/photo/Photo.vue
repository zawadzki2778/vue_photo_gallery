<template>
    <v-col cols="4">
        <v-card>
            <v-card-title> {{ photo.title }} </v-card-title>
            <v-card-text>
                <v-img :src="photo.url" width="250" height="250" />
            </v-card-text>
        </v-card>
    </v-col>
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