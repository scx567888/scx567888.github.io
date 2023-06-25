<template>

    <div class="css-carousel">

        <div v-for="j in 20" class="carousel-wrapper">

            <div ref="carouselRefs" :class="j % 2 === 0 ? 'carousel' : 'carousel-reverse'">

                <div v-for="i in 2" class="carousel-half">

                    <div v-for="k in 7" class="carousel-item">
                        <div :class="'card' + k">
                            <h1>{{ k }}</h1>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>
<script setup>
import {onMounted, ref} from "vue";

const carouselRefs = ref(null);

onMounted(() => {
    for (let valueElement of carouselRefs.value) {
        valueElement.addEventListener("click", () => changeClass(valueElement));
    }
});

function changeClass(o) {
    if (o.classList.contains("active")) {
        o.classList.remove("active");
    } else {
        o.classList.add("active");
    }
}
</script>

<style scoped>
.css-carousel {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 8px;
}

/* 最外层包装容器, 用来隐藏滚动条 */
.carousel-wrapper {
    overflow: hidden;
}

/* 滚动动画 不停向左滚动 滚动到一半 */
@keyframes carousel-slide {
    0% {
        transform: translateX(0%)
    }
    100% {
        transform: translateX(-50%)
    }
}

/* 滚动动画 不停向右滚动 滚动到一半 */
@keyframes carousel-slide-reverse {
    0% {
        transform: translateX(-50%)
    }
    100% {
        transform: translateX(0%)
    }
}

/* 滚动容器 */
.carousel,
.carousel-reverse {
    display: flex;
    /* 宽度需要设置为实际滚动内容的两倍 */
    width: 200%;
}

.carousel {
    /* 动画 这里 5秒 一循环 */
    animation: carousel-slide 5s infinite linear;
}

.carousel-reverse {
    /* 动画 这里 5秒 一循环 */
    animation: carousel-slide-reverse 10s infinite linear;
}

/* 鼠标移入时暂停滚动动画 */
.carousel:hover,
.carousel-reverse:hover {
    /* 暂停动画 */
    animation-play-state: paused;
}

.carousel.active,
.carousel-reverse.active {
    animation-duration: 1s;
    animation-play-state: running;
}

.carousel-half {
    display: flex;
    /* 这里的宽度需要占满可视区域 否则会出现空缺 */
    width: 100%;
}

/* 元素本体 这里的样式可以随便写 */
.carousel-item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
}

.card1,
.card2,
.card3,
.card4,
.card5,
.card6,
.card7 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: white;
    transition: all 150ms ease-in-out;
    box-sizing: border-box;
}

.card1 {
    border: 5px solid #ff8080;
    background: #f83434;
}

.card2 {
    border: 5px solid #fd9e62;
    background: #ff6200;
}

.card3 {
    border: 5px solid #ffd900;
    background: #ffbf24;
}

.card4 {
    border: 5px solid #28be00;
    background: green;
}

.card5 {
    border: 5px solid #03f3fc;
    background: #00b8be;
}

.card6 {
    border: 5px solid #008cdd;
    background: #004b80;
}

.card7 {
    border: 5px solid #b72bfe;
    background: #7b00be;
}

/* hover 时我们改变一下样式 */
.card1:hover,
.card2:hover,
.card3:hover,
.card4:hover,
.card5:hover,
.card6:hover,
.card7:hover {
    transform: scale(0.9);
    border-width: 7px;
}
</style>
