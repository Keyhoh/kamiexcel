<template>
    <div id="app" class="form-group">
        {{ data }}
        <input-text v-bind:value.sync="data.text"/>
        <input-check-box v-bind:value.sync="data.bool"/>
    </div>
</template>

<script>
    import inputText from './components/base/input/typeText'
    import inputCheckBox from "./components/base/input/typeCheckBox"

    export default {
        name: 'app',
        components: {
            inputText: inputText,
            inputCheckBox: inputCheckBox
        },
        data() {
            return {
                data: {
                    text: "Hello",
                    bool: false
                }
            };
        }
    }
</script>

<style scoped>

</style>
