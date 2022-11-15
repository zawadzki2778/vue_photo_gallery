<template>
    <div>
        <slot name="text" />
            <h1>Title for Slot</h1>
        <slot name="title" />
    </div>
</template>

<script>
export default {
    name: "Slot",
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    color: blue;
    font-size: 42px;
}
</style>

