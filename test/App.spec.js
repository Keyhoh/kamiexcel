import {mount} from "@vue/test-utils";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "../src/App.vue";

Vue.use(BootstrapVue);

describe("App", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Vue.extend(App));
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
