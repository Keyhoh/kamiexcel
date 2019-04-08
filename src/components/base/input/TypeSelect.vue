<template>
    <b-form-select
            v-model="selected"
            :options="option.options"
            :disabled="!editable"
    />
</template>

<script>
    export default {
        name: "typeSelect",
        props: {
            value: String,
            option: {
                type: Object,
                default() {
                    return {options: []};
                }
            },
            editable: Boolean,
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
