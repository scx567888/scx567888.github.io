<template>
    <div style="padding: 10px;line-height: 1.5rem;font-weight: bold">
        在多数浏览器的盒子模型中 box-sizing 默认为 content-box (这应该是一种 "错误的设计")
        <br>
        但这会在实际开发中导致很多让人意想不到的 "错误" , 尤其是在为元素设置高度或宽度的时候
        <br>
        这里我们推荐将默认的 box-sizing 设置为 border-box 以便统一, 并减少混淆
        <br>
        如下所示 :
    </div>
    <div style="display: flex;height: 500px;width:1400px;padding: 20px;column-gap: 20px">
        <div style="width: 50%;">
            <h4> 默认状态 (div1 和 div2 中的 padding 会导致整体的宽高变大并溢出父元素)</h4>
            <wrapper resizer="ignore" style="width: 100%;height: 100%;resize: unset">
                <default/>
            </wrapper>
        </div>
        <div style="width: 50%;">
            <h4> 将 box-sizing 设置为 border-box
            </h4>
            <wrapper resizer="ignore" style="width: 100%;height: 100%;resize: unset">
                <use-normalize/>
            </wrapper>
        </div>

    </div>

    <div style="margin-top: 60px;padding: 20px">
        <h3>您也可以使用如下代码, 用来实现重置效果</h3>
        <highlight code='
/*
    移除默认的 margin
*/
body {
    margin: 0;
}

/*
    在多数浏览器的盒子模型中 box-sizing 默认为 content-box (这应该是一种 "错误的设计")
    但这会在实际开发中导致很多让人意想不到的 "错误" , 尤其是在为元素设置高度或宽度的时候
    这里我们推荐将默认的 box-sizing 设置为 border-box 以便统一, 并减少混淆
*/
html {
    box-sizing: border-box;
}

/*
    配合上一段 css 实现 box-sizing 的规范化
*/
*,
*:before,
*:after {
    box-sizing: inherit;
}

/*
    重置表单元素的字体
*/
button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
}

' language="css"/>
    </div>

</template>
<script setup>
import Wrapper from "../../../../../../components/wrapper/index.vue";
import Default from "./default.vue";
import UseNormalize from "./use-normalize.vue";
import Highlight from "../../../../../../components/highlight/index.vue";
</script>
