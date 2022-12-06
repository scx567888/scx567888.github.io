import {IframeResizer} from "./iframe-resizer.js";

/**
 * 循环
 */
class LoopResizer extends IframeResizer {

    resize() {
        this.iframe.style.height = "auto"
        this.iframe.style.height = this.getDocumentElementHeight() + this.gap + "px"
        requestAnimationFrame(() => this.resize())
    }

}

export {LoopResizer}