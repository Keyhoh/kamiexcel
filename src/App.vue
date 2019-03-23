<template>
    <div id="app" class="form-group mx-3">
        {{ data }}
        <input-text :value.sync="data.text"/>
        <input-check-box :value.sync="data.checked"/>
        <input-range :value.sync="data.position" :option="data.range"/>
        <input-select :value.sync="data.selected" :option="data.options"/>
    </div>
</template>

<script>
    import inputText from './components/base/input/TypeText'
    import inputCheckBox from "./components/base/input/TypeCheckbox"
    import inputRange from "./components/base/input/TypeRange"
    import inputSelect from "./components/base/input/TypeSelect"

    export default {
        name: 'app',
        components: {
            inputText: inputText,
            inputCheckBox: inputCheckBox,
            inputRange: inputRange,
            inputSelect: inputSelect,
        },
        data() {
            return {
                data: {
                    text: "Hello",
                    checked: false,
                    position: 0,
                    range: {min: -1, max: 1},
                    selected: "first",
                    options: {options:[
                        {value: null, text: "Please select an option"},
                        {value: "first", text: "This is the First option"},
                        {value: "second", text: "This is the Second option"},
                        {value: "third", text: "This is the Third option"}
                    ]}
                }
            };
        }
    }
</script>

<style scoped>
</style>
