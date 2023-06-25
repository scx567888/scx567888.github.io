<template>
    <div class="footer">
        🐴🌶🕊👃🦆
    </div>
</template>

<script>
export default {
    name: "home-footer"
};
</script>

<style scoped>
.footer {
    position: absolute;
    opacity: 0;
    bottom: 5px;
    right: 5px;
    transform: scale(0.8);
    transition: all 300ms;
}

.footer:hover {
    opacity: 1;
    transform: scale(1);
}
</style>
