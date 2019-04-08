import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import TypeText from "../../../../src/components/base/input/TypeText.vue";

import TestComponent from "../../TestComponentUtil";

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
    it("is editable", () => {
        const props = {value: "ABC", editable: true};
        const wrapper = TestComponent.getWrapper(TypeText, props);

        expect(wrapper.attributes("disabled")).toBeUndefined();
    });
    it("is editable", () => {
        const props = {value: "ABC", editable: false};
        const wrapper = TestComponent.getWrapper(TypeText, props);

        expect(wrapper.attributes("disabled")).toBeTruthy();
    });
    it("receives the correct value", () => {
        const props = {value: "ABC", editable: true};
        const wrapper = TestComponent.getWrapper(TypeText, props);
        TestComponent.receivesCorrectlyOnMount(wrapper, props);

        wrapper.setValue("DEF");
        expect(wrapper.emitted()["update:value"].length).toBe(2);
        expect(wrapper.emitted()["update:value"][1]).toEqual(["DEF"]);
    });
});
