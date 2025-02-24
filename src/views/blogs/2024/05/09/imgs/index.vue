<template>
    <blog>
        <template #title>
            图集
        </template>

        <template #content>
            <h2>猫咪</h2>
            <img src="https://scx.cool/images/Kitten.jpg" style="width: 100%">
            <ul>
                <li>
                    <a download href="https://scx.cool/images/Kitten.jpg">JPEG 下载</a>
                    MD5 : 9DE1F18760593545768FDE44A1AB78CA
                </li>
                <li>
                    <a href="https://www.flickr.com/photos/eviltomthai/5177485690/">原图地址</a>
                    https://www.flickr.com/photos/eviltomthai/5177485690/
                </li>
            </ul>

            <h2>皮卡丘</h2>
            <img src="https://scx.cool/images/Pikachu.png" style="width: 100%">
            <ul>
                <li>
                    <a download href="https://scx.cool/images/Pikachu.png">PNG 下载</a>
                    MD5 : 9A7BA23F62D913CC4E0C8E590B50995C
                </li>
                <li>
                    原图地址 (未知)
                </li>
            </ul>
        </template>
    </blog>
</template>

<script setup>
import Blog from "../../../../../../components/blog.vue";
</script>
<style scoped>

</style>
