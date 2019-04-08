import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import TypeCheckbox from "../../../../src/components/base/input/TypeCheckbox.vue";

import TestComponent from "../../TestComponentUtil";

Vue.use(BootstrapVue);

describe("TypeCheckbox", () => {
    it("is a Vue instance", () => {
        expect(TestComponent.getWrapper(TypeCheckbox).isVueInstance()).toBeTruthy();
    });
    it("sets the correct default data", () => {
        expect(typeof TypeCheckbox.data).toBe("function");

        const defaultData = TypeCheckbox.data();
        expect(defaultData.checked).toBe(false);
    });
    it("is editable", () => {
        const props = {value: true, editable: true};
        const wrapper = TestComponent.getWrapper(TypeCheckbox, props);

        expect(wrapper.find("input").attributes("disabled")).toBeFalsy();
    });
    it("is not editable", () => {
        const props = {value: true, editable: false};
        const wrapper = TestComponent.getWrapper(TypeCheckbox, props);

        expect(wrapper.find("input").attributes("disabled")).toBeTruthy();
    });
    it("receives the correct value", () => {
        const props = {value: true, editable: true};
        const wrapper = TestComponent.getWrapper(TypeCheckbox, props);
        TestComponent.receivesCorrectlyOnMount(wrapper, props);

        wrapper.find("input").trigger("click");
        expect(wrapper.emitted()["update:value"].length).toBe(2);
        expect(wrapper.emitted()["update:value"][1]).toEqual([false]);
    });
});
