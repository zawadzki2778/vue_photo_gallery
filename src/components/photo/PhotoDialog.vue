<template>
    <v-dialog 
    max-width="600px"
    v-model="dialogVisible"
    >
    <v-card>
        <v-card-title>{{ photo.title }}</v-card-title>
        <v-card-text>
            <v-img
            :src="photo.img"
            ></v-img>

        </v-card-text>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'PhotoDialog',
    props: ['photo'],
    data() {
        return {
            dialogVisible: false,
        }
    }
}
</script>

<style scoped>

</style>