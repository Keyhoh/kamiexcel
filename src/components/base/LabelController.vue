<template>
    <div class="labelComponent">
        <input-text
                v-if="edit"
                :value="value"
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
            edit: Boolean,
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
    .labelComponent {
        display: inline-block;
    }
</style>
