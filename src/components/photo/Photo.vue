<template>
    <v-col cols="4">
        <div class="text-center">
            <div class="my-2">
              <v-btn
                x-small
                color="secondary"
                dark
                @click="deletePhoto"
              >
                Удалить
              </v-btn>
            </div>
        </div>
    
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
    props: {
        photo: {
        type: Object,
        required: true
        }
    },
    methods: {
        openPhoto() {
            this.$emit('openPhoto', this.photo) // далее--> PhotoPage ctr 45
        },
        deletePhoto() {
            this.$emit('deletePhoto') // далее--> PhotoPage 
            alert('ТЫ УВЕРЕН ???');
        }
    }
};
</script>

<style scoped>
    .photo-title {
        text-align: center;
        min-height: 50px;
    }
    .text {
        min-width: 150px;
    }
</style>