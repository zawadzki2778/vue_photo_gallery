<template>
    <div>
        <v-app>
            <Navbar />
            <div class="class">
                <Slot>
                    <h2 slot="title">{{ myTitle }}</h2>
                    <p slot="text">*** paragraf for this title also from app ***</p>
                </Slot>
            </div>
            <router-view />
        </v-app>
    </div>
</template>

<script>
import Slot from "@/components/Slot";
import Navbar from "@/components/Navbar";

export default {
    name: "App",
    components: { Slot, Navbar },
    data() {
        return {
            myTitle: " new TITLE from APP",
        };
    },
};
</script>

<style lang="scss" scoped>
h2,
p {
    text-align: center;
}
</style>