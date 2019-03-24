<template>
    <input-text
            v-if="inputType === 'text'"
            :value.sync="value"
    ></input-text>
    <input-checkbox
            v-else-if="inputType === 'checkbox'"
            :value.sync="value"
    ></input-checkbox>
    <input-select
            v-else-if="inputType === 'select'"
            :value.sync="value"
            :option="option"
    ></input-select>
    <input-range
            v-else-if="inputType === 'range'"
            :value.sync="value"
            :option="option"
    ></input-range>
</template>

<script>
    import inputText from "./input/TypeText"
    import inputCheckbox from "./input/TypeCheckbox"
    import inputSelect from "./input/TypeSelect"
    import inputRange from "./input/TypeRange"

    export default {
        name: "Base",
        components: {
            inputText: inputText,
            inputCheckbox: inputCheckbox,
            inputSelect: inputSelect,
            inputRange: inputRange,
        },
        props: {
            inputType: String,
            value: [String, Number, Boolean],
            option: Object,
        },
        updated(){
            this.$emit("update:value", this.value);
        },
    }
</script>

<style scoped>

</style>
