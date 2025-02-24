<template>

    <div>
        <input id="v" max="500" min="0" style="width: 200px" type="range" value="50"><span id="vv">50个</span>
    </div>
    <div class="f1-wrapper">

    </div>

</template>


<script setup>
import {onMounted} from "vue";

onMounted(() => {

    const wrapper = document.querySelector(".f1-wrapper");
    const v = document.querySelector("#v");
    const vv = document.querySelector("#vv");
    v.addEventListener("input", (e) => update(e.target.value));

    function update(i) {
        vv.innerHTML = i + "个";
        const size = parseInt(i);
        wrapper.innerHTML = "";
        for (let i = 0; i < size; i++) {
            const item = document.createElement("div");
            item.classList.add("f1-item");
            const c = (360 / size) * i;
            item.style.backgroundColor = `hsl(${c}, 100%, 50%)`;
            item.innerHTML = i + "";
            wrapper.appendChild(item);
        }
    }

    update(v.value);
});

</script>
<style>
.f1-wrapper {
    justify-content: center;
    display: flex;
    border: 1px solid red;
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
    width: 100%;
    gap: 2px;
}

.f1-item {
    flex: 1 100px;
    height: 30px;
}
</style>
