<template>
    <b-form-select v-model="selected" :options="option.options"/>
</template>

<script>
    export default {
        name: "typeSelect",
        props: {
            value: String,
            option: {
                options: Array,
            },
        },
        data() {
            return {
                selected: null,
            }
        },
        updated() {
            this.$emit("update:value", this.selected);
        },
        mounted() {
            this.selected = this.value;
        },
    }
</script>

<style scoped>

</style>
