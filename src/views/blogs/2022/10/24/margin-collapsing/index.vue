<template>
    <div style="padding: 10px">
        <h4>
            详情参见 <a
                href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">外边距折叠</a>
            <br>
            在开发中, 如果发现上下边距不符合预期, 可以考虑是否发生了外边距折叠
            <br>
            Flex 布局可以避免这种情况
            <br>
            如下所示 :
        </h4>

        <div style="display: flex;row-gap: 10px;column-gap: 20px;padding: 10px">
            <div>
                <h4>flex (没有发生外边距折叠)</h4>
                <h3 class="b1"></h3>
                <div class="p1" style="display: flex;flex-direction: column">
                    <div class="div1">
                        width: 200px
                        <br>
                        height: 200px
                        <br>
                        margin-bottom: 50px
                    </div>
                    <div class="div2">
                        width: 200px
                        <br>
                        height: 200px
                        <br>
                        margin-top: 30px
                    </div>
                </div>
            </div>

            <div>
                <h4>默认 (发生了外边距折叠)</h4>
                <h3 class="b2"></h3>
                <div class="p2">
                    <div class="div1">
                        width: 200px
                        <br>
                        height: 200px
                        <br>
                        margin-bottom: 50px
                    </div>
                    <div class="div2">
                        width: 200px
                        <br>
                        height: 200px
                        <br>
                        margin-top: 30px
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const b1 = document.querySelector(".b1");
    const b2 = document.querySelector(".b2");
    b1.innerHTML = "height : " + p1.getBoundingClientRect().height + "px";
    b2.innerHTML = "height : " + p2.getBoundingClientRect().height + "px";
});

</script>

<style scoped>
.div1 {
    width: 200px;
    height: 200px;
    background: #ff9bb4;
    margin-bottom: 50px;
}

.div2 {
    width: 200px;
    height: 200px;
    background: #87c2fd;
    margin-top: 30px;
}

.p1,
.p2 {
    box-shadow: 0 0 0 2px #fb0000;
}

</style>
