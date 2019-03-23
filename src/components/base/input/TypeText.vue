<template>
    <div class="form-group">
        <input type="text" class="form-control" v-model="text">
    </div>
</template>

<script>
    export default {
        name: "typeText",
        props: {
            value: String
        },
        data() {
            return {
                text: ""
            }
        },
        updated() {
            this.$emit("update:value", this.text);
        },
        mounted() {
            this.text = this.value;
        }
    }
</script>

<style scoped>

</style>
