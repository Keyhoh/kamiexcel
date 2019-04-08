import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import InputController from "../../../src/components/base/InputController.vue";

import TypeText from "../../../src/components/base/input/TypeText";
import TypeCheckbox from "../../../src/components/base/input/TypeCheckbox";
import TypeSelect from "../../../src/components/base/input/TypeSelect";
import TypeRange from "../../../src/components/base/input/TypeRange";

import TestComponent from "../TestComponentUtil";

Vue.use(BootstrapVue);

describe("InputController", () => {
    it("is a Vue instance", () => {
        const wrapper = TestComponent.getWrapper(InputController);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
    it("sets the correct default props", () => {
        expect(typeof InputController.props.option.default).toBe("function");

        const defaultOption = InputController.props.option.default();
        expect(defaultOption).toEqual({});

        expect(typeof InputController.props.editable.default).toBe("function");

        const defaultEditable = InputController.props.editable.default();
        expect(defaultEditable).toBe(true);
    });
    it("sets the correct input", () => {
        const propsForText = {
            inputType: "text",
            value: "This is text input",
            editable: true,
        };
        const textInputWrapper = TestComponent.getWrapper(TypeText, propsForText);
        expect(textInputWrapper.is(TypeText)).toBeTruthy();

        const propsForCheckbox = {
            inputType: "checkbox",
            value: false,
            editable: true,
        };
        const checkboxInputWrapper = TestComponent.getWrapper(TypeCheckbox, propsForCheckbox);
        expect(checkboxInputWrapper.is(TypeCheckbox)).toBeTruthy();

        const propsForSelect = {
            inputType: "select",
            value: "first",
            option: {
                options: [
                    {value: "first", text: "first option"},
                    {value: "first", text: "first option"},
                    {value: "second", text: "second option"},
                ],
            },
            editable: true,
        };
        const selectInputWrapper = TestComponent.getWrapper(TypeSelect, propsForSelect);
        expect(selectInputWrapper.is(TypeSelect)).toBeTruthy();

        const propsForRange = {
            inputType: "range",
            value: 0,
            option: {
                min: -1,
                max: 1,
            },
            editable: true,
        };
        const rangeInputWrapper = TestComponent.getWrapper(TypeRange, propsForRange);
        expect(rangeInputWrapper.is(TypeRange)).toBeTruthy();
    });
});
