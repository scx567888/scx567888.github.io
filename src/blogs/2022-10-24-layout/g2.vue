<template>

    <div style="display: flex;align-items: center;padding: 5px;gap: 5px">
        <textarea id="tex" v-model="tex" style="height: 120px;width: 300px"></textarea>
        <button id="btn" @click="reset()">重置为默认值</button>
    </div>

    <div ref="wrapperRef" class="wrapper">
        <div class="div1">1</div>
        <div class="div2">2</div>
        <div class="div3">3</div>
        <div class="div4">4</div>
        <div class="div5">5</div>
        <div class="div6">6</div>
        <div class="div7">7</div>
        <div class="div8">8</div>
        <div class="div9">9</div>
        <div class="div10">10</div>
    </div>

</template>

<script setup>
import {onMounted, ref, watch} from "vue";

const tex = ref();
const wrapperRef = ref();
let defaultStr = "";

onMounted(() => {
    defaultStr = window.getComputedStyle(wrapperRef.value)["grid-template-areas"].replaceAll("\" \"", "\"\n\"");
    tex.value = defaultStr;
});

function reset() {
    tex.value = defaultStr;
    wrapperRef.value.style.gridTemplateAreas = defaultStr;
}

watch(tex, () => {
    wrapperRef.value.style.gridTemplateAreas = tex.value;
});

</script>

<style scoped>
.wrapper {
    display: grid;
    /* 必须是矩形 */
    grid-template-areas:
                    "div3 div4 div4"
                    "div1 div1 div2"
                    "div5 div5 div5"
                    "div6 div7 div8"
                    "div6 div9 div10";
}

.wrapper > div {
    border: 1px solid #005780;
    background-color: #9ee2ff;
    border-radius: 5px;
    min-height: 50px;
}

.div1 {
    grid-area: div1;
}

.div2 {
    grid-area: div2;
}

.div3 {
    grid-area: div3;
}

.div4 {
    grid-area: div4;
}

.div5 {
    grid-area: div5;
}

.div6 {
    grid-area: div6;
}

.div7 {
    grid-area: div7;
}

.div8 {
    grid-area: div8;
}

.div9 {
    grid-area: div9;
}

.div10 {
    grid-area: div10;
}
</style>
