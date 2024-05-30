import {ObserveResizer} from "./observe-resizer.js";
import {OnceResizer} from "./once-resizer.js";
import {LoopResizer} from "./loop-resizer.js";
import {IgnoreResizer} from "./ignore-resizer.js";

/**
 * 三种 resizer
 * 1, OnceResizer
 *      性能影响最低, 只在初始化的时候进行大小调整, 适合静态内容
 * 2, ObserveResizer
 *      性能影响中等, 在元素内部大小发生变化时进行调整, 适合内容有变化但内部没有 transform 变化的情况
 * 3, LoopResizer
 *      性能影响很高, 通过 requestAnimationFrame 不断的刷新大小, 适合任何情况(包括 transform) 但最好少用
 * @param type
 * @return Object
 */
function getResizerBuilder(type) {
    switch (type) {
        case "once":
            return (i) => new OnceResizer(i);
        case "observe":
            return (i) => new ObserveResizer(i);
        case "loop":
            return (i) => new LoopResizer(i);
        case "ignore":
            return (i) => new IgnoreResizer(i);
        default :
            throw new Error("未找到合适的 resizer !!!");
    }
}

export {ObserveResizer, OnceResizer, LoopResizer, IgnoreResizer, getResizerBuilder};
