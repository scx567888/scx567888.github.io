<template>
    <blog>
        <template #title>
            JDK 19 虚拟线程 (Virtual Thread)
        </template>

        <template #content>
            <div>
                <h2>问题一 什么是多线程 ?</h2>
                <div>
                    <h3 style="color: #f14b79">1, 在讨论 JDK19 新增的虚拟线程之前, 我们需要知道什么是多线程,
                        以及其用处.</h3>

                    <wrapper resizer="observe" style="resize: none">
                        <a1/>
                    </wrapper>
                </div>
                <h2>问题二 JDK19 有了哪些改进 ?</h2>
                <div>
                    <h3 style="color: #f14b79">1, 首先来说 JDK19 并不是长期支持版, 而且其虚拟线程的功能还需要手动启用.
                        所以在正式版 (21) 发布之前,我们还是 "玩玩" 就好😊.</h3>
                    <wrapper resizer="observe" style="resize: none">
                        <a2/>
                    </wrapper>
                    <h4>当然,虚拟线程并不能增加速度, 但是却可以大大的提升并发量. 以上的测试并不严谨,
                        但基本展示了虚拟线程的简单使用和大致性能,
                        相信等到 JDK 21 发售的时候, 能够在性能上更加优化</h4>
                </div>
                <div>
                    <h3 style="color: #f14b79">2, 此功能其实是属于 Project Loom 的一部分</h3>
                    <h4>参见此 : <a href="https://openjdk.org/jeps/425">JEP 425</a></h4>
                    <h4>还有 Loom 项目地址 : <a
                            href="https://github.com/openjdk/loom">https://github.com/openjdk/loom</a>
                    </h4>
                </div>
            </div>
        </template>

    </blog>
</template>

<script setup>
import Blog from "../../../../../../components/blog.vue";
import Wrapper from "../../../../../../components/wrapper/index.vue";
import A1 from "./a1.vue";
import A2 from "./a2.vue";
</script>
