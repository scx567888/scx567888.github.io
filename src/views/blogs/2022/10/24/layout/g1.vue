<template>

    <div class="g1-wrapper">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
    </div>

</template>
<script setup>

</script>
<style scoped>
.g1-wrapper {
    display: grid;
    grid-template-columns:200px 1fr 2fr;
    gap: 10px;
}

.g1-wrapper > div {
    border: 1px solid #005780;
    background-color: #9ee2ff;
    border-radius: 5px;
    height: 50px;
}
</style>
