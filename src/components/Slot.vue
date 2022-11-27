<template>
    <div class="slots">
        <slot name="maksim" />
        <slot name="vita" />
        <h2>SLOT-SLOT-SLOT-SLOT</h2>
        <v-btn class="to__cart" @click="btnClick">ADD CART</v-btn>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Slotq",
    
    computed: {
        ...mapGetters(['GET_DROPDOWN']),
    },
    methods: {
        ...mapActions(["FETCH_DROPDOWN"]),

        btnClick() {
            this.FETCH_DROPDOWN(),
        },
    }
};
</script>

<style scoped>
.slots {
    text-align: center;
}
h2 {
    text-align: center;
    color: blue;
}
</style>
