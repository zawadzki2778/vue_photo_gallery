<template>
    <v-dialog 
    max-width="900px"
    v-model="value"
    >
        <v-card>
            <v-card-title>{{ photo.title }}</v-card-title>
            <v-card-text>
                <v-img :src="photo.url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
// import { watch } from 'vue'
export default {
    name: 'PhotoDialog',
    props: {
        photo: {
            type: Object,
            required: true
        },
        value: { // далее созлаем в PhotoPage str 22
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dialogVisible: false
        }
    },
    created() {
        this.dialogVisible = this.value
    },
    watch: {
        value(newValue) {
            this.dialogVisible = newValue
        },
        dialogVisible(newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>

<style scoped>

</style>