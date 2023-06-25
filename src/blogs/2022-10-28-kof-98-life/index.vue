<template>

    <div id="kof-98-life">

        <div class="options1">
            <button id="hitsBtn1" class="hitsBtn">击打</button>
            <button id="recoveryBtn1" class="recoveryBtn">恢复</button>
        </div>

        <div class="options2">
            <button id="hitsBtn2" class="hitsBtn">击打</button>
            <button id="recoveryBtn2" class="recoveryBtn">恢复</button>
        </div>

        <div id="kof98">
            <div class="life-wrapper">
                <div class="life-border-1"></div>
                <!-- 也可以使用 life-border-2 来代替 life-border-1 的filter -->
                <!--  <div class="life-border-2"></div>  -->
                <div class="life-border-3"></div>
                <div class="life-bg"></div>
                <div class="life-1"></div>
                <div class="life-2"></div>
            </div>
            <div class="life-wrapper2">
                <div class="life-border-1"></div>
                <div class="life-border-2"></div>
                <div class="life-border-3"></div>
                <div class="life-bg"></div>
                <div class="life-1"></div>
                <div class="life-2"></div>
            </div>
        </div>

    </div>


</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
    //todo 动画的细节 (时间) 等还有待优化
    //因为按照原有像素 会导致画面过小 这里 全部 * 3
    //
    // 血条 总高度 14 上边框 2 下边框 2 阴影 1  血条格子背景 9
    // 血条本体 高度 11
    // 血条总宽度 106 左边框 1 右边框 1
    // 在剩最后一丝血时 血条绿色部分会变为红色 这里暂时先使用后边的红色做效果 后期应该改为 将前置血条的颜色修改为红色

    const hitsBtn1 = document.querySelector("#hitsBtn1");
    const recoveryBtn1 = document.querySelector("#recoveryBtn1");
    const hitsBtn2 = document.querySelector("#hitsBtn2");
    const recoveryBtn2 = document.querySelector("#recoveryBtn2");

    const p1life1 = document.querySelector(".life-wrapper > .life-1");
    const p1life2 = document.querySelector(".life-wrapper > .life-2");

    const p2life1 = document.querySelector(".life-wrapper2 > .life-1");
    const p2life2 = document.querySelector(".life-wrapper2 > .life-2");

    let p1Recovering = false;
    let p2Recovering = false;

    function getRandom() {
        return Math.floor(Math.random() * 100);
    }

    function p1hits() {
        const {width} = window.getComputedStyle(p1life1);
        let w = parseInt(width) - getRandom();
        w = Math.max(0, w);
        p1life1.style.width = w <= 3 ? 0 : w + "px";
        p1life2.style.width = w + "px";
    }

    function p1recovery() {
        let needTimes = 312;

        function vvv() {
            const {width} = window.getComputedStyle(p1life1);
            let w = parseInt(width);
            p1life1.style.width = w + 3 + "px";
            p1life2.style.width = w + 3 + "px";
            needTimes = needTimes - 3;
            if (needTimes > 0 && w < 312) {
                requestAnimationFrame(vvv);
            }
        }

        vvv();
    }

    function p2hits() {
        const {width} = window.getComputedStyle(p2life1);
        let w = parseInt(width) - getRandom();
        w = Math.max(0, w);
        p2life1.style.width = w <= 3 ? 0 : w + "px";
        p2life2.style.width = w + "px";
    }

    function p2recovery() {
        p2life1.style.width = "100%";
        p2life2.style.width = "100%";
    }

    hitsBtn1.addEventListener("click", p1hits);
    recoveryBtn1.addEventListener("click", p1recovery);
    hitsBtn2.addEventListener("click", p2hits);
    recoveryBtn2.addEventListener("click", p2recovery);
});
</script>
<style scoped>

#kof-98-life {
    background: black;
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
}

.options1 {
    position: absolute;
    display: flex;
    gap: 10px;
    left: 20px;
    z-index: 9;
}

.options2 {
    position: absolute;
    display: flex;
    gap: 10px;
    right: 20px;
    flex-direction: row-reverse;
    z-index: 9;
}

.hitsBtn,
.recoveryBtn {
    width: 100px;
    height: 50px;
    font-size: 20px;
    color: whitesmoke;
}

.hitsBtn {
    background-color: #f64646;
    border-color: #ff9bb4;
}

.recoveryBtn {
    background-color: green;
    border-color: #2caa2e;
}

#kof98 {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-image: url("Kof98-usa-bg.gif");
    background-position: bottom;
    background-size: cover;
    height: 672px;
    width: 912px;
    justify-content: space-between;
}

.life-wrapper {
    width: 318px;
    height: 42px;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    left: 93px;
    top: 51px;
}

.life-border-1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 36px;
    border: 3px solid rgb(252, 252, 252);
    /* 不使用 box-shadow的原因是因为 box-shadow 无法穿透原 div */
    /* box-shadow: 0 3px 0 black; */
    filter: drop-shadow(0 3px 0 rgb(179, 187, 196));
    z-index: 1;
}

.life-border-2 {
    position: absolute;
    left: 0;
    top: 3px;
    width: 100%;
    height: 36px;
    border: 3px solid rgb(179, 187, 196);
}

.life-border-3 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    border-bottom: 3px solid rgb(0, 0, 0);
}

.life-bg {
    position: absolute;
    left: 0;
    top: 6px;
    width: 312px;
    height: 27px;
    margin-left: 3px;
    background-image: linear-gradient(45deg, black 25%, transparent 0, transparent 75%, black 0),
    linear-gradient(45deg, black 25%, transparent 0, transparent 75%, black 0);
    background-position: 0 0, 3px 3px;
    background-size: 6px 6px;
}

.life-1 {
    position: absolute;
    right: 3px;
    top: 3px;
    height: 33px;
    width: 312px;
    max-width: 312px;
    z-index: 3;
    background-image: linear-gradient(
            rgb(40, 203, 0) 3px,
            rgb(74, 231, 0) 3px,
            rgb(74, 231, 0) 27px,
            rgb(24, 198, 0) 27px,
            rgb(24, 198, 0) 30px,
            rgb(15, 171, 0) 30px);
}

.life-2 {
    position: absolute;
    right: 3px;
    top: 3px;
    height: 33px;
    width: 312px;
    max-width: 312px;
    z-index: 2;
    background-image: linear-gradient(
            rgb(255, 90, 16) 30px,
            rgb(211, 32, 0) 30px);
    transition-duration: 200ms;
    transition-property: width;
}

.life-wrapper2 {
    width: 318px;
    height: 42px;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    right: 93px;
    top: 51px;
}

.life-wrapper2 > .life-1 {
    left: 3px;
}

.life-wrapper2 > .life-border-1 {
    filter: unset;
}

.life-wrapper2 > .life-2 {
    left: 3px;
}


</style>
