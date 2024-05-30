<template>
    <blog>
        <template #title>
            收藏夹
        </template>

        <template #content>

            <div v-for="i in list">
                <h2>
                    {{ i.type }}
                </h2>

                <ul>
                    <li v-for="c in i.list">
                        {{ c.name }} <a :href="c.url" target="_blank">{{ c.url }}</a>
                    </li>
                </ul>

            </div>

        </template>
    </blog>
</template>

<script setup>
import Blog from "../../components/blog.vue";


const list = [
    {
        type: "1, 技术相关",
        list: [
            {
                name: "Maven Central",
                url: "https://central.sonatype.com/"
            },
            {
                name: "CSS-Tricks",
                url: "https://css-tricks.com/"
            },
            {
                name: "Regexper",
                url: "https://regexper.com/"
            },
            {
                name: "regex101",
                url: "https://regex101.com/"
            },
            {
                name: "Central Repository: cool/scx",
                url: "https://repo.maven.apache.org/maven2/cool/scx/"
            }
        ]
    },
    {
        type: "2, 工具相关",
        list: [
            {
                name: "Yandex",
                url: "https://yandex.com/"
            },
            {
                name: "表情图标百科",
                url: "https://emojipedia.org/zh/"
            },
            {
                name: "Convertio — 文件转换器",
                url: "https://convertio.co/zh/"
            },
            {
                name: "Power Supply Calculator | Cooler Master",
                url: "https://www.coolermaster.com/power-supply-calculator/"
            },
        ]
    },
    {
        type: "3, 下载相关",
        list: [
            {
                name: "BTNull - 无名小站",
                url: "https://www.btnull.org/"
            },
            {
                name: "迅雷磁力",
                url: "https://xunleis.me/"
            },
            {
                name: "磁力天堂",
                url: "https://btlm.cc/"
            },
            {
                name: "Mp4电影",
                url: "https://www.dbmp4.com/"
            },
            {
                name: "字幕库(zimuku)",
                url: "https://srtku.com/"
            },
            {
                name: "Download game PS3 PS4 PS2 RPCS3 PC free",
                url: "https://dlpsgame.com/home/"
            },
        ]
    },
    {
        type: "4, 杂项",
        list: [
            {
                name: "琵琶行论坛",
                url: "https://www.ppxclub.com/"
            },
            {
                name: "SNK Wiki | Fandom",
                url: "https://snk.fandom.com/wiki/Main_Page"
            },
            {
                name: "Zophar's Domain",
                url: "https://www.zophar.net/"
            },
            {
                name: "Arcade Database",
                url: "http://adb.arcadeitalia.net/default.php"
            },
            {
                name: "Neo-Geo Forums",
                url: "https://www.neo-geo.com/forums/index.php"
            },
            {
                name: "Luigi Auriemma",
                url: "https://aluigi.altervista.org/quickbms.htm"
            },
            {
                name: "马克思主义文库",
                url: "https://www.marxists.org/chinese/index.html"
            },
            {
                name: "Microsoft Store - Generation Project",
                url: "https://store.rg-adguard.net/"
            },
            {
                name: "[NEO SNKOF] SHIN-NIHON-KIKAKU FOREVER",
                url: "http://www.neosnkof.net/"
            },
            {
                name: "UUP dump",
                url: "https://uupdump.net/"
            }
        ]
    }
];

</script>
<style scoped>

</style>
