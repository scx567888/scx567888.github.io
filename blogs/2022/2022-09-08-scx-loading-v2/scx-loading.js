const SCX_LOADING_HTML = `
<style>
    body {
        margin: 0;
        padding: 0;
    }

    .scx-loading {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        padding-bottom: 20vh;
        box-sizing: border-box;
    }

    .scx-loading-logo {
        height: 220px;
        width: 220px;
    }

    .scx-loading-spinner {
        margin-top: 25px;
        height: 60px;
        width: 60px;
    }

    .scx-loading-spinner > svg > :last-child {
        transform-origin: 50% 50%;
        animation: scx-loading-spinner-dash 1400ms ease-in-out infinite, scx-loading-spinner-rotate 1400ms linear infinite;
    }

    @keyframes scx-loading-spinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0
        }
        50% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -15px
        }
        100% {
            stroke-dasharray: 100, 200;
            stroke-dashoffset: -125px
        }
    }

    @keyframes scx-loading-spinner-rotate {
        100% {
            transform: rotate(360deg)
        }
    }
</style>
<div class="scx-loading">
    <div class="scx-loading-logo">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="url(#myGradient)" points="717,0 195,552 636,552 307,1024 829,472 388,472"/>
            <defs>
                <linearGradient gradientTransform="rotate(90)" id="myGradient">
                    <stop offset="0%" stop-color="#489349"/>
                    <stop offset="100%" stop-color="#70960c"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div class="scx-loading-spinner">
        <svg fill="transparent" stroke-linecap="round" stroke-width="4" viewbox="0 0 44 44">
            <circle cx="22" cy="22" r="20" stroke="rgba(92,148,43,0.3)"></circle>
            <circle cx="22" cy="22" r="20" stroke="rgba(92,148,43,1)" stroke-dasharray="80,200"></circle>
        </svg>
    </div>
</div>
`;

/**
 * 初始化 scxLoading 元素
 * @returns {DocumentFragment}
 */
function initScxLoading() {
    //采用 template 而不是直接 innerHtml 是为了保证样式隔离
    const scxLoadingTemplate = document.createElement("template");
    scxLoadingTemplate.innerHTML = SCX_LOADING_HTML;
    return scxLoadingTemplate.content;
}

/**
 * scxLoading 全局变量 创建全部使用此变量
 * @type {DocumentFragment}
 */
const scxLoading = initScxLoading();

/**
 * scxLoading 组件类
 */
class ScxLoading extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "closed"});
        shadow.appendChild(scxLoading.cloneNode(true));
    }
}

/**
 * 注册 scxLoading 组件
 */
customElements.define("scx-loading", ScxLoading);
