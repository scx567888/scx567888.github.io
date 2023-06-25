<template>
    <div class="blog">
        <div class="blog-title">
            <slot name="title">这是一篇博客</slot>
        </div>
        <div class="blog-content">
            <slot name="content">这是内容</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "blog"
};
</script>

<style>
@keyframes bg {
    0% {
        background-color: rgb(64, 64, 64);
    }
    50% {
        background-color: rgb(255, 255, 255);
    }
    100% {
        background-color: rgb(64, 64, 64);
    }
}

.blog {
    background-image: radial-gradient(transparent 1px, black 1px);
    background-color: rgb(64, 64, 64);
    background-position: center;
    background-size: 40px 40px;
    animation: 30000ms bg infinite;
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px;
    align-items: center;
}

.blog-title {
    padding: 10px;
    backdrop-filter: blur(2px);
    background-color: rgba(170, 170, 170, 0.3);
    color: whitesmoke;
    border-radius: 10px;
    font-size: 2em;
    width: 60%;
}

.blog-content {
    border-width: 5px;
    border-style: dashed;
    border-color: darkseagreen;
    padding: 20px;
    background: whitesmoke;
    border-radius: 4px;
    width: 60%;
}


iframe {
    min-height: 50px;
    min-width: 50px;
    max-width: 100%;
    width: 100%;
    overflow: auto;
    resize: both;
}

ul {
    font-size: 1.2rem;
    background: #fff;
    color: #000;
    overflow-wrap: break-word;
    border-radius: 8px;
    padding: 4rem;
    position: relative;
}

@media (max-width: 900px) {

    .blog {
        padding: 8px;
        gap: 8px;
    }

    .blog-title {
        width: 100%;
    }

    .blog-content {
        width: 100%;
        padding: 8px;
    }

    ul {
        padding: 2rem;
        font-size: 1rem;
    }

}
</style>
