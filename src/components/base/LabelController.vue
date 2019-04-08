<template>
    <div class="labelComponent">
        <input-text
                v-if="edit"
                :value="value"
                :editable="true"
                @update:value="updateValue"
        ></input-text>
        {{ edit ? "" : value }}
    </div>
</template>

<script>
    /**
     * 編集可能なラベルと編集不可能なラベルに振り分けるコンポーネント
     */

    import inputText from "./input/TypeText";

    export default {
        name: "LabelController",
        components: {
            inputText: inputText,
        },
        props: {
            edit: {
                type: Boolean,
                default() {
                    return false
                },
            },
            value: String,
        },
        methods: {
            updateValue(event) {
                this.$emit("update:value", event);
            }
        }
    }
</script>

<style scoped>
</style>
