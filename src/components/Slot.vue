<template>
    <div>
        <slot name="maksim" />
        <slot name="vita" />
        <h1>SLOT-SLOT-SLOT-SLOT</h1>
    </div>
</template>

<script>
export default {
    name: "Slot",
};
</script>

<style scoped>
h1 {
    text-align: center;
    color: blue;
    font-size: 38px;
}

</style>
