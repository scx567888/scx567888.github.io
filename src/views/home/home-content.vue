<template>
    <div class="home-content">
        <div v-for="i in blogRoutes" class="home-content-item">
            <router-link :to="i">
                {{ getRouteTitle(i) }}
            </router-link>
        </div>
        旧版博客
        <div class="home-content-item">
            <a href="./blogs/2022-12-07-settimeout-imprecise/index.html">
                2022-12-07 setTimeout() 和 setInterval() 不准确
            </a>
        </div>
        <div class="home-content-item">
            <a href="./blogs/2022-10-25-hacking-css-animation-state-and-playback-time/index.html">
                2022-10-25 Hacking CSS 动画状态和播放时间
            </a>
        </div>
        <div class="home-content-item">
            <a href="./blogs/2022-09-08-scx-loading-v2/index.html">
                2022-09-08 SCX LOADING (Web Components)
            </a>
        </div>
        <div class="home-content-item">
            <a href="./blogs/2022-05-27-dark-mode/index.html">
                2022-05-27 黑暗模式简易实现
            </a>
        </div>
        <div class="home-content-item">
            <a href="./blogs/2022-02-10-scx-loading/index.html">
                2022-02-10 SCX LOADING
            </a>
        </div>
        <div class="home-content-item">
            <a href="./blogs/2021-12-11-win8/index.html">
                2021-12-11 CSS 仿 Windows 8
            </a>
        </div>
        <div class="home-content-item">
            <a href="./blogs/2021-12-11-fun-border/index.html">
                2021-12-11 Fun Border
            </a>
        </div>
    </div>
</template>

<script>
import {getRouteTitle} from "../../routes.js";
import {useRouter} from "vue-router";

export default {
    name: "home-content",
    methods: {getRouteTitle},
    setup() {


        const router = useRouter();

        const routes = router.getRoutes();

        const blogsRoot = routes.find(c => c.name === "blogs");

        const blogRoutes = [];

        function setRoutes(route) {
            if (route.children) {
                for (let child of route.children) {
                    setRoutes(child);
                }
            } else {
                blogRoutes.push(route);
            }
        }

        setRoutes(blogsRoot);

        return {blogRoutes};
    }
};

</script>

<style scoped>

.home-content {
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

.home-content-item {
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

.home-content-item:hover {
    background-color: rgba(242, 242, 242, 0.5);
}

.home-content-item:last-child {
    border-bottom: unset;
}


@media (max-width: 900px) {

    .home-content {
        width: 92%;
    }
}
</style>
