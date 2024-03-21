class WrapperResizer {

    /**
     * 间隙
     * @type {number}
     */
    gap = 4;

    /**
     * @type {HTMLDivElement}
     */
    wrapper;

    /**
     * a
     */
    wrapperItem;

    /**
     *
     * @param wrapper {HTMLDivElement}
     */
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.wrapperItem = this.wrapper.firstChild;
    }

    resize() {

    }

    unResize() {

    }

    getWrapperItemHeight() {
        return Math.ceil(this.wrapperItem.scrollHeight);
    }

}

export {WrapperResizer};
