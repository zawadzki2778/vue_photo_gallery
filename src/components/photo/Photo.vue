<template>
    <v-col cols="4">
        <v-card @click="openPhoto"> <!--вешаем обр для открытия мод.окна + method стр21-->
            <v-card-title class="photo-title"> {{ photo.title }} </v-card-title>
            <v-card-text class="text">
                <v-img :src="photo.thumbnailUrl" width="330" height="200" />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {  
    props: {// name: "Photo",
        photo: {
        type: Object,
        required: true
        }
    },
    methods: {
        openPhoto() {
            this.$emit('openPhoto', this.photo) // далее--> PhotoPage ctr 36
        }
    }
};
</script>

<style scoped>
    .photo-title {
        min-height: 50px;
    }
    .text {
        min-width: 150px;
    }
</style>