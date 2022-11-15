<template>
    <div>
        <slot name="vita"/>
        <h1>Title for Slot</h1>
        <slot name="maksim"/>
    </div>
</template>

<script>
export default {
    name: "Slot",
};
</script>

<style lang="scss">
h1 {
    text-align: center;
    color: blue;
    font-size: 42px;
}
</style>
