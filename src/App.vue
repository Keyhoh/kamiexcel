<template>
    <div id="app" class="form-group mx-3">
        {{ data }}
        <base-label :value.sync="data.label1" :edit="false"/>
        <base-label :value.sync="data.label2" :edit="true"/>
        <base-input inputType="text" :value.sync="data.text" :edit="false"/>
        <base-input inputType="checkbox" :value.sync="data.checked" :edit="true"/>
        <base-input inputType="select" :value.sync="data.selected" :option="data.options" :edit="true"/>
        <base-input inputType="range" :value.sync="data.position" :option="data.range" :edit="true"/>
    </div>
</template>

<script>
    import baseInput from "./components/base/InputController";
    import baseLabel from "./components/base/LabelController";

    export default {
        name: 'app',
        components: {
            baseInput: baseInput,
            baseLabel : baseLabel,
        },
        data() {
            return {
                data: {
                    label1: "label1",
                    label2: "label2",
                    text: "Hello",
                    checked: false,
                    position: 0,
                    range: {min: -1, max: 1},
                    selected: "first",
                    options: {
                        options: [
                            {value: null, text: "Please select an option"},
                            {value: "first", text: "This is the First option"},
                            {value: "second", text: "This is the Second option"},
                            {value: "third", text: "This is the Third option"},
                        ]
                    }
                }
            };
        }
    }
</script>

<style scoped>
</style>
