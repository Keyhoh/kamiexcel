import {mount} from "@vue/test-utils";
import Vue from "vue";

/**
 * return the wrapper that contains vue component
 * @param Component
 * @param propsData
 * @returns {Wrapper<any> | Wrapper<Vue>}
 */
const getWrapper = (Component, propsData) => {
    return mount(
        Vue.extend(Component),
        propsData === undefined ? propsData : {propsData: propsData}
    );
};

const receivesCorrectlyOnMount = (wrapper, propData) => {
    expect(wrapper.emitted()["update:value"]).toBeTruthy();
    expect(wrapper.emitted()["update:value"].length).toBe(1);
    expect(wrapper.emitted()["update:value"][0]).toEqual([propData.value]);
};

export default {getWrapper, receivesCorrectlyOnMount};
