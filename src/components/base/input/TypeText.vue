<template>
    <b-form-input v-model="text" :disabled="!editable"/>
</template>

<script>
    export default {
        name: "typeText",
        props: {
            value: String,
            editable: Boolean,
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
