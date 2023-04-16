import {IframeResizer} from "./iframe-resizer.js";

/**
 * 循环
 */
class LoopResizer extends IframeResizer {

    id;

    resize() {
        this.iframe.style.height = "auto";
        this.iframe.style.height = this.getDocumentElementHeight() + this.gap + "px";
        this.id = requestAnimationFrame(() => this.resize());
    }

    unResize() {
        cancelAnimationFrame(this.id);
    }

}

export {LoopResizer};
