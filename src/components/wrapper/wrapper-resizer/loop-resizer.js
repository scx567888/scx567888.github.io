import {WrapperResizer} from "./wrapper-resizer.js";

/**
 * 循环
 */
class LoopResizer extends WrapperResizer {

    id;

    resize() {
        this.wrapper.style.height = this.getWrapperItemHeight() + this.gap + "px";
        this.id = requestAnimationFrame(() => this.resize());
    }

    unResize() {
        cancelAnimationFrame(this.id);
    }

}

export {LoopResizer};
