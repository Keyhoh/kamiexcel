<template>
    <b-form-select v-model="selected" :options="items"/>
</template>

<script>
    export default {
        name: "typeList",
        data() {
            return {
                selected: null,
                items: [
                    {value: null, text: 'Please select an option'},
                    {value: 'a', text: 'This is First option'},
                    {value: 'b', text: 'This is Second option'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
