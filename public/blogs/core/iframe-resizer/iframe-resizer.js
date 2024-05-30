class IframeResizer {

    /**
     * 间隙
     * @type {number}
     */
    gap = 4;

    /**
     * @type {HTMLIFrameElement}
     */
    iframe;

    /**
     * a
     */
    documentElement;

    /**
     *
     * @param iframe {HTMLIFrameElement}
     */
    constructor(iframe) {
        this.iframe = iframe;
        this.documentElement = this.iframe.contentDocument.documentElement;
    }

    resize() {

    }

    unResize() {

    }

    getDocumentElementHeight() {
        return Math.ceil(this.documentElement.scrollHeight);
    }

}

export {IframeResizer};
