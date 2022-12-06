import {IframeResizer} from "./iframe-resizer.js";

/**
 * 使用监听器设置
 */
class ObserveResizer extends IframeResizer {

    resize() {
        const resizeObserver = new ResizeObserver((entries) => {
            this.iframe.style.height = "auto"
            this.iframe.style.height = this.getDocumentElementHeight() + this.gap + "px"
        });
        resizeObserver.observe(this.documentElement);
    }

}

export {ObserveResizer}