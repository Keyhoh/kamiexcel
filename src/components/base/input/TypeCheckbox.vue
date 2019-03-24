<template>
    <b-form-checkbox v-model="checked"/>
</template>

<script>
    export default {
        name: "typeCheckBox",
        props: {
            value: Boolean,
        },
        data() {
            return {
                checked: false,
            }
        },
        updated() {
            this.$emit("update:value", this.checked);
        },
        mounted() {
            this.checked = this.value;
        },
    }
</script>

<style scoped>

</style>
