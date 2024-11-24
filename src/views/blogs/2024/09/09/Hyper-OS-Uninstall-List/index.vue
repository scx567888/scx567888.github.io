<template>
    <blog>
        <template #title>
            Hyper OS 卸载清单
        </template>

        <template #content>
            <textarea style="width: 100%;height: 600px">
小米商店
.\adb.exe shell pm uninstall -k --user 0 com.xiaomi.market
浏览器
.\adb.exe shell pm uninstall -k --user 0 com.android.browser
小爱同学
.\adb.exe shell pm uninstall -k --user 0 com.miui.voiceassist
游戏服务
.\adb.exe shell pm uninstall -k --user 0 com.xiaomi.gamecenter.sdk.service
语音唤醒
.\adb.exe shell pm uninstall -k --user 0 com.miui.voicetrigger
快应用服务框架
.\adb.exe shell pm uninstall -k --user 0 com.miui.hybrid
智能助理
.\adb.exe shell pm uninstall -k --user 0 com.miui.personalassistant
小爱翻译
.\adb.exe shell pm uninstall -k --user 0 com.xiaomi.aiasst.vision
游戏高能时刻
.\adb.exe shell pm uninstall -k --user 0 com.xiaomi.migameservice
小爱通话
.\adb.exe shell pm uninstall -k --user 0 com.xiaomi.aiasst.service
自动连招
.\adb.exe shell pm uninstall -k --user 0 com.xiaomi.macro
CarWith
.\adb.exe shell pm uninstall -k --user 0 com.miui.carlink
Analytics
.\adb.exe shell pm uninstall -k --user 0 com.miui.analytics
坚决不能卸载 (会卡米)
小米程序包管理器
            </textarea>
        </template>
    </blog>
</template>

<script setup>
import Blog from "../../../../../../components/blog.vue";
</script>
<style scoped>

</style>
