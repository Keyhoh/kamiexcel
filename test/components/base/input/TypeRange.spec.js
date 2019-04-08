import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import TypeRange from "../../../../src/components/base/input/TypeRange";

import TestComponent from "../../TestComponentUtil";

Vue.use(BootstrapVue);


describe("TypeRange", () => {
    it("is a Vue instance", () => {
        expect(TestComponent.getWrapper(TypeRange).isVueInstance()).toBeTruthy();
    });
    it("sets the correct default data", () => {
        expect(typeof TypeRange.data).toBe("function");

        const defaultData = TypeRange.data();
        expect(defaultData.position).toBe(0);
    });
    it("sets the correct default option prop", () => {
        expect(typeof TypeRange.props.option.default).toBe("function");

        const defaultOptionProp = TypeRange.props.option.default();
        expect(defaultOptionProp).toEqual({min: 0, max: 100});
    });
    it("is editable", () => {
        const props = {value: 3, option: {min: -5, max: 5}, editable: true};
        const wrapper = TestComponent.getWrapper(TypeRange, props);

        expect(wrapper.attributes("disabled")).toBeFalsy();
    });
    it("is not editable", () => {
        const props = {value: 3, option: {min: -5, max: 5}, editable: false};
        const wrapper = TestComponent.getWrapper(TypeRange, props);

        expect(wrapper.attributes("disabled")).toBeTruthy();
    });
    it("receives the correct value", () => {
        const props = {value: 3, option: {min: -5, max: 5}, editable: true};
        const wrapper = TestComponent.getWrapper(TypeRange, props);
        TestComponent.receivesCorrectlyOnMount(wrapper, props);

        wrapper.setValue(-5);
        expect(wrapper.emitted()["update:value"].length).toBe(2);
        expect(wrapper.emitted()["update:value"][1]).toEqual([-5]);
    });
});
