<template>
    <input-text
            v-if="inputType === 'text'"
            :value="value"
            @update:value="updateValue"
            :editable="editable"
    ></input-text>
    <input-checkbox
            v-else-if="inputType === 'checkbox'"
            :value="value"
            @update:value="updateValue"
            :editable="editable"
    ></input-checkbox>
    <input-select
            v-else-if="inputType === 'select'"
            :value="value"
            :option="option"
            @update:value="updateValue"
            :editable="editable"
    ></input-select>
    <input-range
            v-else-if="inputType === 'range'"
            :value="value"
            :option="option"
            @update:value="updateValue"
            :editable="editable"
    ></input-range>
</template>

<script>
    /**
     * inputType に応じて、使用する input コンポーネントを振り分けるコンポーネント
     */

    import inputText from "./input/TypeText";
    import inputCheckbox from "./input/TypeCheckbox";
    import inputSelect from "./input/TypeSelect";
    import inputRange from "./input/TypeRange";

    export default {
        name: "InputController",
        components: {
            inputText: inputText,
            inputCheckbox: inputCheckbox,
            inputSelect: inputSelect,
            inputRange: inputRange,
        },
        props: {
            inputType: String,
            value: [String, Number, Boolean],
            option: {
                type: Object,
                default() {
                    return {};
                },
            },
            editable: {
                type: Boolean,
                default() {
                    return true;
                },
            },
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
