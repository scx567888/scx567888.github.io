<template>
    <div style="padding: 10px">
        <h1>实现背景图 固定 保持横纵比 居中</h1>
        <h3>方式 1 采用 background-image (调整 方式 1 的大小或进行内容滚动 观察 方式2 的变化)</h3>
        <div ref="div1Ref" class="div1">
            <h1>内容 1</h1>
            <h1>内容 2</h1>
            <h1>内容 3</h1>
            <h1>内容 4</h1>
            <h1>内容 5</h1>
            <h1>内容 6</h1>
            <h1>内容 7</h1>
            <h1>内容 8</h1>
            <h1>内容 9</h1>
            <h1>内容 10</h1>
            <h1>内容 11</h1>
            <h1>内容 12</h1>
            <h1>内容 13</h1>
            <h1>内容 14</h1>
            <h1>内容 15</h1>
            <h1>内容 16</h1>
        </div>
        <h3>方式 2 采用 img 标签</h3>
        <div ref="div2Ref" class="div2">
            <img alt="bg" class="div2-bg" src="./bg.jpeg">
            <div ref="div2ContentRef" class="div2-content">
                <h1>内容 1</h1>
                <h1>内容 2</h1>
                <h1>内容 3</h1>
                <h1>内容 4</h1>
                <h1>内容 5</h1>
                <h1>内容 6</h1>
                <h1>内容 7</h1>
                <h1>内容 8</h1>
                <h1>内容 9</h1>
                <h1>内容 10</h1>
                <h1>内容 11</h1>
                <h1>内容 12</h1>
                <h1>内容 13</h1>
                <h1>内容 14</h1>
                <h1>内容 15</h1>
                <h1>内容 16</h1>
            </div>
        </div>
    </div>

</template>
<script setup>
import {onMounted, ref} from "vue";

const div1Ref = ref();
const div2Ref = ref();
const div2ContentRef = ref();

onMounted(() => {
    div1Ref.value.addEventListener("scroll", (e) => div2ContentRef.value.scrollTo({top: div1Ref.value.scrollTop}));

    const resizeObserver = new ResizeObserver((entries) => {
        div2Ref.value.style.height = div1Ref.value.offsetHeight + "px";
        div2Ref.value.style.width = div1Ref.value.offsetWidth + "px";
    });

    resizeObserver.observe(div1Ref.value);
});

</script>

<style scoped>
.div1 {
    /*背景图居中 既不拉伸图片 有使图片居中 */
    background-image: url("./bg.jpeg");
    height: 200px;
    width: 200px;
    background-position: center;
    background-size: cover;
    resize: both;
    overflow: auto;
    color: whitesmoke;
}

.div2 {
    height: 200px;
    width: 200px;
    resize: both;
    overflow: auto;
    position: relative;
    color: whitesmoke;
}

.div2-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
}

.div2-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
}
</style>
