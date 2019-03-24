<template>
    <b-form-input type="range" v-model="position" :min="option.min" :max="option.max" number/>
</template>

<script>
    export default {
        name: "typeRange",
        props: {
            value: Number,
            option: {
                min: Number,
                max: Number,
            },
        },
        data() {
            return {
                position: 0,
            }
        },
        updated() {
            this.$emit("update:value", this.position);
        },
        mounted() {
            this.position = this.value;
        },
    }
</script>

<style scoped>

</style>
