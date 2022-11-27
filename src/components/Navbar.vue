<template>
    <!--HEADER-->
    <v-container>
        <v-app-bar color="deep-orange" dark>
            <v-spacer></v-spacer
            ><!--v-spacer cоздает пустое пространство по вертикали или горизонтали, в данном случае сдвинул кнопки в право -->
            <v-btn outlined class="mr-5" 
                ><router-link to="/">ГЛАВНАЯ</router-link></v-btn
            ><!-- добавил outlined что бы убрать цвет по дефолту-->
            <v-btn outlined class="mr-5" 
                ><router-link to="/photo">ФОТО</router-link
            ></v-btn>
            </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: "Navbar",
};
</script>
<style scoped>
.v-application a {
    color: whitesmoke;
    text-decoration: none;
}

</style>