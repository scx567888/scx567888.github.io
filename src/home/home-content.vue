<template>
    <div class="content">
        <div class="content-item">
            <a href="./blogs/2023-02-11-software-download-link">
                2023-02-11 常用软件下载地址
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-12-07-settimeout-imprecise/index.html">
                2022-12-07 setTimeout() 和 setInterval() 不准确
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-12-05-jdk-19-virtual-thread/index.html">
                2022-12-05 JDK 19 虚拟线程 (Virtual Thread)
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-10-28-kof-98-life/index.html">
                2022-10-28 KOF 98 血条
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-10-25-tree-background/index.html">
                2022-10-25 无限延长的 树 背景图
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-10-25-hacking-css-animation-state-and-playback-time/index.html">
                2022-10-25 Hacking CSS 动画状态和播放时间
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-10-21-box-sizing/index.html">
                2022-10-21 Box Sizing
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-09-08-scx-loading-v2/index.html">
                2022-09-08 SCX LOADING (Web Components)
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-05-27-dark-mode/index.html">
                2022-05-27 黑暗模式简易实现
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2022-02-10-scx-loading/index.html">
                2022-02-10 SCX LOADING
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2021-12-11-win8/index.html">
                2021-12-11 CSS 仿 Windows 8
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2021-12-11-fun-border/index.html">
                2021-12-11 Fun Border
            </a>
        </div>
        <div class="content-item">
            <a href="./blogs/2021-12-11-parallax/index.html">
                2021-12-11 视差
            </a>
        </div>
        <div v-for="i in blogRoutes" class="content-item">
            <router-link :to="i">
                {{ getRouteTitle(i) }}
            </router-link>
        </div>
    </div>
</template>

<script>
import {getRouteTitle} from "../routes.js";
import {useRouter} from "vue-router";

export default {
    name: "home-content",
    methods: {getRouteTitle},
    setup() {


        const router = useRouter();

        const routes = router.getRoutes();

        const blogsRoot = routes.find(c => c.name === "blogs");

        const blogRoutes = blogsRoot.children;

        return {blogRoutes};
    }
};

</script>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 50px;
    width: 80%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(100, 100, 100, 0.2);
    box-shadow: 1px 2px 5px 0 rgba(50, 50, 50, 0.2);
}

.content-item {
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding-left: 1em;
    padding-right: 1em;
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
    align-items: start;
    transition: background-color 200ms;
}

.content-item:hover {
    background-color: rgba(242, 242, 242, 0.5);
}

.content-item:last-child {
    border-bottom: unset;
}


@media (max-width: 900px) {

    .content {
        width: 92%;
    }
}
</style>
