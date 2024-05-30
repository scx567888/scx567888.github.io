<template>
    <div class="wrapper">
        <div class="div1">
            div1
        </div>
        <div class="div2">
            div2
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.wrapper {
    width: 400px;
    height: 200px;
    border-style: solid;
    border-color: red;
    border-width: 2px;
    display: flex;
}

.div1 {
    height: 100%;
    width: 50%;
    background: rgba(255, 155, 180, 0.8);
    padding: 10px;
}

.div2 {
    height: 100%;
    width: 50%;
    background: rgba(135, 194, 253, 0.8);
    padding: 10px;
}
</style>

