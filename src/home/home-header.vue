<template>
    <div class="header">
        <div class="header-left">
            <img alt="" src="/logos/scx.svg">
            欢迎来到 SCX
        </div>
        <div class="header-right">
            <div class="header-right-item active"><a href="./">博客</a></div>
            <div class="header-right-item"><a href="/docs/index.html">文档</a></div>
            <div class="header-right-item"><a href="/logos/index.html">Logos</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-header"
};
</script>

<style scoped>
.header {
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

.header-left {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.header-left > img {
    height: 70%;
}

.header-right {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.header-right-item {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    transition: background-color 200ms;
    cursor: pointer;
}

.header-right-item.active,
.header-right-item:hover {
    background-color: rgba(45, 45, 45, 0.2);
}

.header-right-item.active {
    box-shadow: inset 0 0 3px 0 rgba(45, 45, 45, 0.4);
}


@media (max-width: 900px) {

    .header {
        font-size: 1em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }

    .header-left {
        gap: 5px;
    }

    .header-right-item {
        padding-left: 5px;
        padding-right: 5px;
    }


}
</style>
