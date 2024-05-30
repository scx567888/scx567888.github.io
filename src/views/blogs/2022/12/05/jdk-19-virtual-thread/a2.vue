<template>
    <h4>JDK19 下载后需要启用其预览功能. 可以直接在命令行加 --enable-preview, 如果你使用的是 Maven
        也可以参考如下配置</h4>
    <highlight code='
  &lt;?xml version="1.0" encoding="UTF-8"?>
      &lt;project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
               xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
      &lt;modelVersion>4.0.0&lt;/modelVersion>
  
      ...
  
      &lt;build>
          &lt;plugins>
  
              &lt;plugin>
                  &lt;groupId>org.apache.maven.plugins&lt;/groupId>
                  &lt;artifactId>maven-compiler-plugin&lt;/artifactId>
                  &lt;configuration>
                      &lt;compilerArgs>
                          &lt;arg>--enable-preview&lt;/arg>
                      &lt;/compilerArgs>
                  &lt;/configuration>
              &lt;/plugin>
  
              &lt;plugin>
                  &lt;groupId>org.apache.maven.plugins&lt;/groupId>
                  &lt;artifactId>maven-surefire-plugin&lt;/artifactId>
                  &lt;configuration>
                      &lt;argLine>--enable-preview&lt;/argLine>
                  &lt;/configuration>
              &lt;/plugin>
  
          &lt;/plugins>
      &lt;/build>
  
      ...
  
  &lt;/project>' language="xml"/>

    <p>下面我们使用 虚拟线程 来编写刚才的程序</p>
    <highlight code="
    public static void main(String[] args) throws InterruptedException {
        var startTime = System.nanoTime();
        var wallpaperList = Collections.synchronizedList(new ArrayList&lt;String>());
        var threads = new ArrayList&lt;Thread>();
        for (int i = 0; i < 1000; i++) {
            threads.add(Thread.ofVirtual().start(() -> {
                wallpaperList.add(getWallpaper());
            }));
        }
        for (var thread : threads) {
            thread.join();
        }
        System.out.println(wallpaperList.size());
        System.out.println((System.nanoTime() - startTime) / 1000000L);
    }"/>
    <p>和我们之前使用的普通线程(现在也称平台线程)不同, 虚拟线程并不建议池化, 所以这么写就可以.
        而且和普通线程的写法相比,除了创建线程的写法改变了,
        其余写法和普通线程完全相同. 这也是 java 的优点 (强大的版本兼容性)</p>
    <h3>和前面的普通线程示例对比一下执行时间吧</h3>
    <highlight code="
    虚拟线程     普通线程(平台线程)
     1000       1000
     284        289"/>
    <p>嗯, 好像并没有快多少, 那让我们把循环次数调大一些😜 1000 -> 100000</p>
    <highlight code="
    虚拟线程     普通线程(平台线程)
    100000      100000
    1456        8847"/>
    <p>快了不少, 让我们再次加大 100000 -> 1000000</p>
    <highlight code="
    虚拟线程     普通线程(平台线程)
    1000000      1000000
    12745        90269"/>
    <p>好吧, 明显又快了许多. 😎</p>
</template>

<script setup>
import Highlight from "../../../../../../components/highlight/index.vue";
</script>
