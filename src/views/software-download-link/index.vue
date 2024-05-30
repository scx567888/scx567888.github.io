<template>
    <blog>
        <template #title>
            常用软件下载地址
        </template>

        <template #content>
            <div>
                <h2>1, 常用软件下载地址</h2>
                <ul>
                    <li>
                        7-Zip <a href="https://www.7-zip.org/download.html" target="_blank">(官方)</a>
                    </li>
                    <li>
                        Git for Windows <a href="https://github.com/git-for-windows/git/releases"
                                           target="_blank">(官方)</a>
                        <a href="https://registry.npmmirror.com/binary.html?path=git-for-windows/"
                           target="_blank">(镜像)</a>
                    </li>
                    <li>
                        HeidiSQL <a href="https://www.heidisql.com/download.php" target="_blank">(官方)</a>
                    </li>
                    <li>
                        nginx <a href="http://nginx.org/en/download.html" target="_blank">(官方)</a>
                    </li>
                    <li>
                        Node.js <a href="https://nodejs.org/zh-cn/download/" target="_blank">(官方)</a>
                        <a href="https://registry.npmmirror.com/binary.html?path=node/"
                           target="_blank">(镜像)</a>
                    </li>
                    <li>
                        Everything <a href="https://www.voidtools.com/zh-cn/downloads/" target="_blank">(官方)</a>
                    </li>
                    <li>
                        MySQL Community Server <a href="https://dev.mysql.com/downloads/mysql/"
                                                  target="_blank">(官方)</a>
                    </li>
                    <li>
                        OpenJDK <a href="https://adoptium.net/" target="_blank">(官方)</a>
                        <a href="https://mirrors.tuna.tsinghua.edu.cn/Adoptium/" target="_blank">(镜像)</a>
                    </li>
                    <li>
                        FreeFileSync <a href="https://freefilesync.org/download.php" target="_blank">(官方)</a>
                    </li>
                    <li>
                        GnuPG <a href="https://gnupg.org/ftp/gcrypt/binary/" target="_blank">(官方)</a>
                    </li>
                    <li>
                        IntelliJ IDEA <a href="https://www.jetbrains.com/idea/download/#section=windows"
                                         target="_blank">(官方)</a>
                    </li>
                    <li>
                        Mp3tag <a href="https://www.mp3tag.de/en/download.html" target="_blank">(官方)</a>
                    </li>
                    <li>
                        WizTree <a href="https://www.diskanalyzer.com/download" target="_blank">(官方)</a>
                    </li>
                    <li>
                        VLC media player <a href="https://www.videolan.org/" target="_blank">(官方)</a>
                    </li>
                    <li>
                        OBS Studio <a href="https://obsproject.com/" target="_blank">(官方)</a>
                    </li>
                    <li>
                        Microsoft Visual C++ Redistributable <a
                            href="https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170"
                            target="_blank">(官方)</a>
                    </li>
                </ul>
            </div>
        </template>
    </blog>
</template>

<script>
import {defineComponent} from "vue";
import Blog from "../../components/blog.vue";

export default defineComponent({
    components: {Blog}
});
</script>
<style scoped>

</style>
