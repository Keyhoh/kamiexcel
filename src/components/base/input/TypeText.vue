<template>
    <b-form-input v-model="text" type="text"/>
</template>

<script>
    export default {
        name: "typeText",
        props: {
            value: String,
        },
        data() {
            return {
                text: "",
            }
        },
        updated() {
            this.$emit("update:value", this.text);
        },
        mounted() {
            this.text = this.value;
        },
    }
</script>

<style scoped>

</style>
