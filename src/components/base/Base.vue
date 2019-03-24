<template>
    <input-text
            v-if="inputType === 'text'"
            :value="value"
            @update:value="updateValue"
    ></input-text>
    <input-checkbox
            v-else-if="inputType === 'checkbox'"
            :value="value"
            @update:value="updateValue"
    ></input-checkbox>
    <input-select
            v-else-if="inputType === 'select'"
            :value="value"
            :option="option"
            @update:value="updateValue"
    ></input-select>
    <input-range
            v-else-if="inputType === 'range'"
            :value="value"
            :option="option"
            @update:value="updateValue"
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
        methods: {
            updateValue(event) {
                this.$emit("update:value", event);
            },
        },

    }
</script>

<style scoped>

</style>
