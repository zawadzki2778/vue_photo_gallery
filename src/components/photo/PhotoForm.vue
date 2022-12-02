<template>
    <v-container>
        <v-row class="d-flex">
            <v-text-field  v-model="title"/> <!-- связываем input с переменными из data, теперь при каждом изм.инпуту меняются и значения переменных в дате-->
            <v-file-input v-model="img"/>
            <v-btn @click="addPhoto">Добавить фото</v-btn> <!--вешаем слущатель на кнопку и начинаем реализовывать логику , далее стр 21 -->
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PhotoForm',
    data() {
        return {
            title: '',
            img: null
        }
    },
    methods: {
        addPhoto() {
            const reader = new FileReader() // с помощью объекта JS FileReader мы сможеи прочитать фото
            reader.onload = () => { // слушатель обрабатывает момент когда изображение было прочитано 
                let photo = {
                    id: Date.now(), // получаем из текущей даты просто для уникальности
                    title: this.title,
                    url: reader.result
                }
                this.$root.$emit('addPhoto', photo)//при помощи $emit прокидывает созданный здесь ОБЪЕКТ photo в пустой массив photos, который объявили в компоненте PhotosPage. Далее идё в комп.PhotosPage стр 3
            }
            reader.readAsDataURL(this.img)       
        }
    }
}
</script>

<style scoped>
</style>