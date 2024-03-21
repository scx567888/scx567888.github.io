import {ObserveResizer} from "./observe-resizer.js";
import {OnceResizer} from "./once-resizer.js";
import {LoopResizer} from "./loop-resizer.js";
import {IgnoreResizer} from "./ignore-resizer.js";

function resizeAllIframe() {
    const iframeList = getAllIframe();
    for (let i of iframeList) {
        getResizer(i).resize();
    }
}

function resizeIframe(type, i) {
    if (!type.endsWith("-resizer")) {
        type = type + "-resizer";
    }
    let builder = getResizerBuilder(type);
    if (Array.isArray(i) || i instanceof NodeList) {
        for (let ii of i) {
            builder(ii).resize();
        }
    } else {
        builder(i).resize();
    }

}


/**
 * 三种 resizer
 * 1, OnceResizer
 *      性能影响最低, 只在初始化的时候进行大小调整, 适合静态内容
 * 2, ObserveResizer
 *      性能影响中等, 在元素内部大小发生变化时进行调整, 适合内容有变化但内部没有 transform 变化的情况
 * 3, LoopResizer
 *      性能影响很高, 通过 requestAnimationFrame 不断的刷新大小, 适合任何情况(包括 transform) 但最好少用
 * @param i
 * @return {IframeResizer}
 */
function getResizer(i) {
    let classList = Array.from(i.classList);
    let type = "once-resizer";
    for (let string of classList) {
        switch (string) {
            case "once-resizer":
            case "observe-resizer":
            case "loop-resizer":
            case "ignore-resizer":
                type = string;
        }
    }
    return getResizerBuilder(type)(i);
}

/**
 *
 * @param type
 * @return {function(HTMLIFrameElement): IframeResizer}
 */
function getResizerBuilder(type) {
    switch (type) {
        case "once-resizer":
            return (i) => new OnceResizer(i);
        case "observe-resizer":
            return (i) => new ObserveResizer(i);
        case "loop-resizer":
            return (i) => new LoopResizer(i);
        case "ignore-resizer":
            return (i) => new IgnoreResizer(i);
        default :
            throw new Error("未找到合适的 resizer !!!");
    }
}

function getAllIframe() {
    return Array.from(document.querySelectorAll("iframe"));
}

export {resizeAllIframe, resizeIframe, ObserveResizer, OnceResizer, LoopResizer, IgnoreResizer};
