<template>
    <v-container>
        <div class="dropdown" v-if="GET_DROPDOWN">
            <v-col cols="3">
                <v-select
                    :items="items"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Label"
                ></v-select>
            </v-col>
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "DropDown",
    data() {
        return {
        items: ["Foo", "Bar", "Fizz", "Buzz"],
        };
    },
    computed: {
        ...mapGetters(['GET_DROPDOWN']),
    },
};
</script>

<style scoped>
.col-3 {
  height: 100px;
  margin: 0 auto;
} 
</style>
