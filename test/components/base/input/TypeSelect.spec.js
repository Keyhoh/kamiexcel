import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import TypeSelect from "../../../../src/components/base/input/TypeSelect";

import TestComponent from "../../TestComponentUtil";

Vue.use(BootstrapVue);

describe("TypeSelect", () => {
    it("is a Vue instance", () => {
        expect(TestComponent.getWrapper(TypeSelect).isVueInstance()).toBeTruthy();
    });
    it("sets the correct default data", () => {
        expect(typeof TypeSelect.data).toBe("function");

        const defaultData = TypeSelect.data();
        expect(defaultData.selected).toBeNull();
    });
    it("sets the correct default props", () => {
        expect(typeof TypeSelect.props.option.default).toBe("function");

        const defaultOptionProp = TypeSelect.props.option.default();
        expect(defaultOptionProp.options).toEqual([]);
    });
    it("is editable", () => {
        const props = {
            value: "first",
            option: {
                options: [
                    {value: "first", text: "first option"},
                    {value: "second", text: "second option"},
                    {value: "third", text: "third option"},
                ]
            },
            editable: true,
        };
        const wrapper = TestComponent.getWrapper(TypeSelect, props);

        expect(wrapper.attributes("disabled")).toBeUndefined();
    });
    it("is not editable", () => {
        const props = {
            value: "first",
            option: {
                options: [
                    {value: "first", text: "first option"},
                    {value: "second", text: "second option"},
                    {value: "third", text: "third option"},
                ]
            },
            editable: false,
        };
        const wrapper = TestComponent.getWrapper(TypeSelect, props);

        expect(wrapper.attributes("disabled")).toBeTruthy();
    });
    it("receives the correct value", () => {
        const props = {
            value: "first",
            option: {
                options: [
                    {value: "first", text: "first option"},
                    {value: "second", text: "second option"},
                    {value: "third", text: "third option"},
                ]
            },
            editable: true,
        };
        const wrapper = TestComponent.getWrapper(TypeSelect, props);
        TestComponent.receivesCorrectlyOnMount(wrapper, props);

        wrapper.setValue("third");
        expect(wrapper.emitted()["update:value"].length).toBe(2);
        expect(wrapper.emitted()["update:value"][1]).toEqual(["third"]);
    });
});
