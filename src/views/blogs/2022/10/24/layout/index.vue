<template>
    <blog>
        <template #title>
            CSS 布局
        </template>
        <template #content>
            <h2>Flex 布局</h2>
            <div>
                <h3 style="color: #f14b79">1, 平分父元素宽度 !!!</h3>
                <wrapper resizer="observe">
                    <f1></f1>
                </wrapper>
            </div>
            <h2>Grid 布局</h2>
            <div>
                <h3 style="color: #f14b79">1, fr单位分配的是可用空间而非所有空间 !!!</h3>
                <wrapper resizer="observe">
                    <g1></g1>
                </wrapper>
            </div>
            <div>
                <h3 style="color: #f14b79">2, grid-template-areas (试着修改文本框中的值看看会发生什么) !!!</h3>
                <wrapper resizer="observe">
                    <g2></g2>
                </wrapper>
                <h4>注意 : grid-template-areas 属性的使用规则如下：</h4>
                <ul>
                    <li>你需要填满网格的每个格子</li>
                    <li>对于某个横跨多个格子的元素，重复写上那个元素<code>grid-area</code>属性定义的区域名字</li>
                    <li>所有名字只能出现在一个连续的区域，不能在不同的位置出现</li>
                    <li>一个连续的区域必须是一个矩形</li>
                    <li>使用<code>.</code>符号，让一个格子留空</li>
                </ul>
            </div>
        </template>
    </blog>
</template>
<script setup>
import Blog from "../../../../../../components/blog.vue";
import Wrapper from "../../../../../../components/wrapper/index.vue";
import F1 from "./f1.vue";
import G1 from "./g1.vue";
import G2 from "./g2.vue";
</script>

<style scoped>

</style>
