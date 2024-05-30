<template>
    <div class="blog">
        <div class="app-bg">
            <img alt="bg" class="tree_head" src="./tree_head.png">
            <div class="tree_body"></div>
            <img alt="bg" class="tree_foot" src="./tree_foot.png">
        </div>

        <div class="tall">
            我是一个占位符
        </div>

        <div class="controller">
            <input id="v" max="5000" min="0" type="range" value="100">
            <span id="vv">100%</span>
        </div>

    </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
    const v = document.querySelector("#v");
    const vv = document.querySelector("#vv");
    const tall = document.querySelector(".tall");
    v.addEventListener("input", (e) => {
        vv.innerHTML = e.target.value + "px";
        tall.style.height = e.target.value + "px";
    });
});

</script>
<style scoped>
.blog {
    position: absolute;
    width: 100%;
    min-height: 100%;
}

.controller {
    position: fixed;
    right: 10px;
    top: 20%;
    background: #87c2fd;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.tall {
    height: 100px;
    position: relative;
    margin-left: 50%;
    width: 100px;
    border: 5px solid #2caa2e;
    background-color: rgba(1, 129, 1, 0.5);
    margin-top: 200px;
    margin-bottom: 200px;
}

.app-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
}


.tree_head {
    object-position: center;
    object-fit: cover;

}

.tree_foot {
    object-position: center;
    object-fit: cover;
}

.tree_body {
    background-image: url("./tree_body.png");
    background-repeat: repeat-y;
    flex: 1;
}


</style>
