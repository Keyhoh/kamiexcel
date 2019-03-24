<template>
    <div id="app" class="form-group mx-3">
        {{ data }}
        <base-component inputType="text" :value.sync="data.text"/>
        <base-component inputType="checkbox" :value.sync="data.checked"/>
        <base-component inputType="select" :value.sync="data.selected" :option="data.options"/>
        <base-component inputType="range" :value.sync="data.position" :option="data.range"/>
    </div>
</template>

<script>
    import base from "./components/base/Base"

    export default {
        name: 'app',
        components: {
            baseComponent: base,
        },
        data() {
            return {
                data: {
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
                            {value: "third", text: "This is the Third option"}
                        ]
                    }
                }
            };
        }
    }
</script>

<style scoped>
</style>
