<template>
    <div class="clip-path_shape-outside">
        <div class="main">
            <div class="box"></div>
            <p class="some-text">{{ someText }}</p>
        </div>
    </div>
</template>
<script setup>
//填充默认数据
const someText = Array(600).fill(0).join("");
</script>
<style scoped>
.clip-path_shape-outside {
    background-color: #cce3e5;
    height: 100%;
    width: 100%;
    position: absolute;
    padding: 10px;
}

.main {
    width: 500px;
    border: 1px solid #e70041;
}

.box {
    width: 400px;
    height: 400px;
    animation: 4s trans infinite alternate ease-in-out;
    transform-origin: center;
    float: left;
}

@keyframes trans {
    0% {
        background: #ef1919;
        clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
        shape-outside: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
    }
    25% {
        background: #ff6f00;
    }
    50% {
        background: #00a6ff;
    }
    75% {
        background: #84ff00;
    }
    100% {
        background: #9252f6;
        clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);
        shape-outside: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);
    }
}

.some-text {
    word-break: break-all;
}
</style>
