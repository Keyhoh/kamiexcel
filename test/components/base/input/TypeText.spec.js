import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import TypeText from "../../../../src/components/base/input/TypeText.vue";

import TestComponent from "../../testComponentGetters";

Vue.use(BootstrapVue);


describe("TypeText", () => {
    it("is a Vue instance", () => {
        expect(TestComponent.getWrapper(TypeText).isVueInstance()).toBeTruthy();
    });
    it("sets the correct default data", () => {
        expect(typeof TypeText.data).toBe("function");

        const defaultData = TypeText.data();
        expect(defaultData.text).toBe("");
    });
    it("renders correctly with different props", () => {
        expect(TestComponent.getRenderedValue(TypeText, {value: "Hello"})).toBe("Hello");
        expect(TestComponent.getRenderedValue(TypeText, {value: "Bye"})).toBe("Bye");
    });
    it("receives the correct value", () => {
        const wrapper = TestComponent.getWrapper(TypeText, {value: "ABC"});
        expect(wrapper.emitted()["update:value"]).toBeTruthy();
        expect(wrapper.emitted()["update:value"].length).toBe(1);
        expect(wrapper.emitted()["update:value"][0]).toEqual(["ABC"]);

        wrapper.setValue("DEF");
        expect(wrapper.emitted()["update:value"].length).toBe(2);
        expect(wrapper.emitted()["update:value"][1]).toEqual(["DEF"]);
    });
});
