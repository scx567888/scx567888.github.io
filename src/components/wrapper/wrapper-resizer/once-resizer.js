import {WrapperResizer} from "./wrapper-resizer.js";

/**
 * 单次
 */
class OnceResizer extends WrapperResizer {

    resize() {
        this.wrapper.style.height = this.getWrapperItemHeight() + this.gap + "px";
    }

}

export {OnceResizer};
