<template>
    <div ref="wrapperRef" class="wrapper">
        <div class="wrapper-item">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import {getResizerBuilder} from "./wrapper-resizer/index.js";
import {onMounted, ref} from "vue";

export default {
    name: "wrapper",
    props: {
        resizer: {
            default: "once"
        },
    },
    setup(props) {
        const wrapperRef = ref();

        onMounted(() => {
            getResizerBuilder(props.resizer)(wrapperRef.value).resize();
        });

        return {wrapperRef};

    }
};
</script>

<style scoped>
.wrapper {
    min-height: 50px;
    min-width: 50px;
    max-width: 100%;
    width: 100%;
    overflow: auto;
    resize: both;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}

.wrapper-item {
    padding: 8px;
}
</style>
