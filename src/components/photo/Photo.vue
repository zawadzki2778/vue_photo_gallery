<template>
    <v-col cols="4">
        <v-card @click="openPhoto"> <!--вешаем обр для открытия мод.окна + method стр21-->
            <v-card-title class="photo-title"> {{ photo.title }} </v-card-title>
            <v-card-text class="text">
                <v-img :src="photo.url" width="330" height="200" />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {  
    props: {// name: "Photo",
        photo: {
        type: Object,
        required: true,
        },
    },
    methods: {
        openPhoto() {
            this.$emit('openPhoto', this.photo) //--> PhotoPage ctr
        }
    }
};
</script>

<style scoped>
    .photo-title {
        min-height: 100px;
    }
    .text {
        min-width: 330px;
    }
</style>