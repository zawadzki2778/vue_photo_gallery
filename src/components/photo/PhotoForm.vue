<template>
    <v-continer>
        <v-row class="d-flex">
            <v-text-field  v-model="title"/> <!-- связываем input с переменными из data, теперь при каждом изм.инпуту меняются и значения переменных в дате-->
            <v-file-input v-model='img'/>
            <v-btn @click="addPhoto">Добавить фото</v-btn>
        </v-row>
    </v-continer>
</template>

<script>
export default {
    name: 'PhotoForm',
    data() {
        return {
            title: '',
            img: ''
        }
    },
    methods: {
        addPhoto() {
            const reader = new FileReader() // с помощью объекта JS FileReader мы сможеи прочитать фото
            reader.onload = () => { // слушатель обрабатывает момент когда изображение было прочитано 
                let photo = {
                    id: Data.now(), // получаем из текущей даты просто для уникальности
                    title: this.title,
                    url: reader.result
                }
            }
            reader.readAsDataURL(this.img)           
        }
    }
}
</script>

<style scoped>

</style>