import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import TypeCheckbox from "../../../../src/components/base/input/TypeCheckbox.vue";

import TestComponent from "../../testComponentGetters";

Vue.use(BootstrapVue);

describe("TypeCheckbox", () => {
    it("is a Vue instance", () => {
        expect(TestComponent.getWrapper(TypeCheckbox).isVueInstance()).toBeTruthy();
    });
});
