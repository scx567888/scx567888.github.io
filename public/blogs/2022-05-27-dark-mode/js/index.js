import {PageContext} from "./page-context.js";

const ctx = new PageContext();

window.addEventListener("load", () => {
    ctx.initElement()
        .bindEvent()
        .loadThemeFromLocalStorage();
    //这里模拟内容页面加载时的速度很慢
    setTimeout(() => ctx.showContent(), 500);
});
