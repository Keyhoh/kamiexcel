<template>
    <div>
        <input type="checkbox" v-model="bool">
    </div>
</template>

<script>
    export default {
        name: "typeCheckBox",
        props: {
            value: Boolean
        },
        data() {
            return {
                bool: false
            }
        },
        updated() {
            this.$emit("update:value", this.bool);
        },
        mounted() {
            this.bool = this.value;
        }
    }
</script>

<style scoped>

</style>
