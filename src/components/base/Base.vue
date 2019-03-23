<template>
    <input-text
            v-if="type === 'text'"
            :value.sync="value"
    ></input-text>
    <input-checkbox
            v-else-if="type === 'checkbox'"
            :value.sync="value"
    ></input-checkbox>
    <input-select
            v-else-if="type === 'select'"
            :value.sync="value"
            :option="option.option"
    ></input-select>
    <input-range
            v-else-if="type === 'range'"
            :value.sync="value"
            :option="option.option"
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
            type: String,
            option: Object,
        },
    }
</script>

<style scoped>

</style>
