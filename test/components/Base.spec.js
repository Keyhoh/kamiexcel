import {mount} from "@vue/test-utils";
import inputTypeText from "@/components/base/input/typeText.vue";

describe("typeText", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(inputTypeText);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
