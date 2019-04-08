<template>
    <b-form-input
            type="range"
            v-model="position"
            :min="option.min"
            :max="option.max"
            :disabled="!editable"
            number
    />
</template>

<script>
    export default {
        name: "typeRange",
        props: {
            value: Number,
            option: {
                type: Object,
                default() {
                    return {min: 0, max: 100};
                },
            },
            editable: Boolean,
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
