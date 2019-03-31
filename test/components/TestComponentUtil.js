import {mount} from "@vue/test-utils";
import Vue from "vue";

/**
 * return the wrapper that contains vue component
 * @param Component
 * @param props
 * @returns {Wrapper<any> | Wrapper<Vue>}
 */
const getWrapper = (Component, props) => {
    return mount(
        Vue.extend(Component),
        props === undefined ? props : {propsData: props}
    );
};

const receivesCorrectlyOnMount = (wrapper, props) => {
    expect(wrapper.emitted()["update:value"]).toBeTruthy();
    expect(wrapper.emitted()["update:value"].length).toBe(1);
    expect(wrapper.emitted()["update:value"][0]).toEqual([props.value]);
};

export default {getWrapper, receivesCorrectlyOnMount};
