import {IframeResizer} from "./iframe-resizer.js";

/**
 * 单次
 */
class OnceResizer extends IframeResizer {

    resize() {
        this.iframe.style.height = "auto";
        this.iframe.style.height = this.getDocumentElementHeight() + this.gap + "px";
    }

}

export {OnceResizer};
