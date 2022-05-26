import {PageContext} from "./page-context.js";

const ctx = new PageContext();

window.addEventListener("load", () => ctx.initElement().bindEvent());