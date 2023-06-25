<template>
    <pre><code class="hljs" v-html="html"></code></pre>
</template>

<script>
import "highlight.js/styles/base16/darcula.css";
import highlight from "highlight.js";

export default {
    name: "highlight",
    props: {
        code: {},
        language: {
            default: "java"
        }
    },
    setup(props, ctx) {
        const html = highlight.highlight(props.code, {language: props.language}).value;
        return {html};
    }
};
</script>

<style scoped>

</style>
