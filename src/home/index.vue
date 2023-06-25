<template>
    <div class="home">
        <home-header/>
        <home-content/>
        <home-footer/>
    </div>
</template>

<script setup>
import HomeHeader from "./home-header.vue";
import HomeContent from "./home-content.vue";
import HomeFooter from "./home-footer.vue";
</script>

<style>
body {
    margin: 0;
}

.home {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
    font-size: 20px;
}

@media (max-width: 900px) {
    .home {
        font-size: 15px;
    }
}
</style>
