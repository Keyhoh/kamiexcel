import {mount} from "@vue/test-utils";
import Vue from "vue";

const getWrapper = (Component, propsData) => {
    return mount(
        Vue.extend(Component),
        propsData === undefined ? propsData : {propsData: propsData}
    );
};

const getRenderedValue = (Component, propsData) => {
    return getWrapper(Component, propsData).element.value;
};

export default {getWrapper, getRenderedValue};
