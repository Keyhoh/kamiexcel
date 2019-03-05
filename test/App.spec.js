import {mount} from "@vue/test-utils";
import App from "@/App.vue";

describe("App", ()=>{
    it("is a Vue instance", ()=>{
        const wrapper = mount(App);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
