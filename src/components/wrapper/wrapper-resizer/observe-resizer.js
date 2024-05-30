import {WrapperResizer} from "./wrapper-resizer.js";

/**
 * 使用监听器设置
 */
class ObserveResizer extends WrapperResizer {

    resizeObserver;

    resize() {
        this.resizeObserver = new ResizeObserver((entries) => {
            this.wrapper.style.height = this.getWrapperItemHeight() + this.gap + "px";
        });
        this.resizeObserver.observe(this.wrapperItem);
    }

    unResize() {
        this.resizeObserver.disconnect();
    }

}

export {ObserveResizer};
