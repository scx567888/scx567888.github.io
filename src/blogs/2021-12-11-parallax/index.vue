<template>
    <div id="www" style="position:absolute;height: 100%;width: 100%;overflow: auto;padding: 10px">
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <div style="height: 400px;overflow: hidden;border-radius: 15px;position: relative;background: aquamarine">
            <img id="img1" alt="" src="./img7.jpg" style="position:relative;width: 100%;top: -50%">
            <div style="position: absolute;top: 120px;left:50px;color: rgba(255,255,255,0.5);font-size: 50px;font-weight: 600">
                这是一些文字
            </div>
            <div style="position: absolute;top: 200px;left:50px;color: rgba(255,255,255,0.5);font-size: 50px;font-weight: 600">
                这还是一些文字
            </div>
        </div>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <div style="height: 400px;overflow: hidden;border-radius: 15px;position: relative;background: aquamarine">
            <img id="img2" alt="" src="./img11.jpg" style="position:relative;width: 100%;top: -600px">
            <div style="position: absolute;top: 120px;left:50px;color: rgba(255,255,255,0.5);font-size: 50px;font-weight: 600">
                这是一些文字
            </div>
            <div style="position: absolute;top: 200px;left:50px;color: rgba(255,255,255,0.5);font-size: 50px;font-weight: 600">
                这还是一些文字
            </div>
        </div>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
        <h1>占位符</h1>
    </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
    const www = document.querySelector("#www");
    const img1Div = document.querySelector("#img1");
    const img2Div = document.querySelector("#img2");
    www.onscroll = (e) => {
        img1Div.style.transform = `translateY(${www.scrollTop / 5}px)`;
        img2Div.style.transform = `translateY(${www.scrollTop / 5}px)`;
    };
});
</script>
