<template>
    <div>
        <v-app>
            <Navbar />
            <div class="class">
                <Slot>
                    <template v-slot:vita>
                        <p><img src="https://i.pinimg.com/originals/8c/9b/68/8c9b68645e6058b4309e644df0faee34.jpg" alt="bater"></p>
                    </template>

                    <template v-slot:maksim>
                        <h2>{{ myTitle }}</h2>
                        <p>*** paragraf for this title also from app ***</p>
                    </template>                                                                                
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
            myTitle: "TITLE FROM APP",
        };
    },
};
</script>

<style scoped>
    h2, p {
        text-align: center;
    }
    img {
        width: 800px;
    }
</style>