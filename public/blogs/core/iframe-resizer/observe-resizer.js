import {IframeResizer} from "./iframe-resizer.js";

/**
 * 使用监听器设置
 */
class ObserveResizer extends IframeResizer {

    resizeObserver;

    resize() {
        this.resizeObserver = new ResizeObserver((entries) => {
            this.iframe.style.height = "auto";
            this.iframe.style.height = this.getDocumentElementHeight() + this.gap + "px";
        });
        this.resizeObserver.observe(this.documentElement);
    }


    unResize() {
        this.resizeObserver.disconnect();
    }

}

export {ObserveResizer};
