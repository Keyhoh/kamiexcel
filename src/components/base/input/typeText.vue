<template>
    <div>
        <input type="text" v-model="text">
    </div>
</template>

<script>
    export default {
        name: "typeText",
        props: {
            value: {
                text: String
            }
        },
        data() {
            return {
                text: ""
            }
        },
        updated() {
            this.$emit("update:value", {
                text: this.text
            });
        },
        mounted() {
            this.text = this.value.text;
        }
    }
</script>

<style scoped>

</style>
