import {mount} from "@vue/test-utils";
import base from "../../../src/components/base/InputController.vue"

describe("base", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(base);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
