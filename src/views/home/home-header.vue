<template>
    <div class="home-header">
        <div class="home-header-left">
            <img alt="" src="/logos/scx.svg">
            欢迎来到 SCX
        </div>
        <div class="home-header-right">
            <div class="home-header-right-item active"><a href="./">博客</a></div>
            <div class="home-header-right-item">
                <router-link :to="{name:'favorites'}">收藏夹</router-link>
            </div>
            <div class="home-header-right-item">
                <router-link :to="{name:'software-download-link'}">常用软件下载地址</router-link>
            </div>
            <div class="home-header-right-item"><a href="/docs/index.html">文档</a></div>
            <div class="home-header-right-item"><a href="/logos/index.html">Logos</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-header"
};
</script>

<style scoped>
.home-header {
    position: sticky;
    top: 0;
    display: flex;
    height: 50px;
    width: 100%;
    background-color: rgba(245, 245, 245, 90%);
    justify-content: space-between;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(50, 50, 50, 0.5);
    font-size: 1.25em;
}

.home-header-left {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.home-header-left > img {
    height: 70%;
}

.home-header-right {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.home-header-right-item {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    transition: background-color 200ms;
    cursor: pointer;
}

.home-header-right-item.active,
.home-header-right-item:hover {
    background-color: rgba(45, 45, 45, 0.2);
}

.home-header-right-item.active {
    box-shadow: inset 0 0 3px 0 rgba(45, 45, 45, 0.4);
}


@media (max-width: 900px) {

    .home-header {
        font-size: 1em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }

    .home-header-left {
        gap: 5px;
    }

    .home-header-right-item {
        padding-left: 5px;
        padding-right: 5px;
    }


}
</style>
