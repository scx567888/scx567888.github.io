<template>
    <h4>有关多线程技术的定义在此次就不多做解释(可以自行 Google), 但是我们可以通过一个 java
        小例子来演示其常见的用法.</h4>
    <p>假设我们想要编写一个爬虫程序 功能为获取某个壁纸网站的精选壁纸, 这里代码如下</p>
    <highlight code="
    // 我们这里只是模拟一下而已, 并不是真正的爬虫
    public static String getWallpaper() {
        try {
            // 这里模拟 网络请求和解析图片的耗时
            Thread.sleep(200);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return UUID.randomUUID().toString();
    }"/>

    <p>我们假设一共有 1000 条需要获取的壁纸, 在不使用多线程的情况下我们可以写以下代码</p>
    <highlight code="
    public static void main(String[] args) {
        var wallpaperList = new ArrayList&lt;String>();
        for (int i = 0; i &lt; 1000; i++) {
            wallpaperList.add(getWallpaper());
        }
        System.out.println(wallpaperList.size());
    }"/>
    <p>当然很容易计算出, 1000 * 200 = 200秒, 这样的时间实在是太长了,下面我们使用多线程进行改进</p>
    <highlight code="
    public static void main(String[] args) throws InterruptedException {
        var startTime = System.nanoTime();
        var wallpaperList = new ArrayList&lt;String>();
        var threads = new ArrayList&lt;Thread>();
        for (int i = 0; i &lt; 1000; i++) {
            threads.add(new Thread(() -> {
                wallpaperList.add(getWallpaper());
            }));
        }
        threads.forEach(Thread::start);
        for (var thread : threads) {
            thread.join();
        }
        System.out.println(wallpaperList.size());
        System.out.println((System.nanoTime() - startTime) / 1000000L);
    }"/>
    <p>再次执行, 我们会发现时间大幅的缩短了, 以下为执行结果</p>
    <pre><code class="language-java">

</code></pre>
    <highlight code="
  998 // size
  280 // 耗时"/>
    <p>问题出现了, 虽然缩短了耗时, 但是我们的 size 并不正确, 有经验的小伙伴会想到这是多线程同步的问题,
        所以我们下边进行一下小修改</p>
    <highlight code="
    public static void main(String[] args) throws InterruptedException {
        ...
        var wallpaperList = Collections.synchronizedList(new ArrayList&lt;String>());
        ...
    }"/>

    <p>再次执行, 数据正常了</p>
    <highlight code="
  1000 // size
  290  // 耗时"/>
    <p>但是如果我们现在将 1000 更改为 100000 呢 ?</p>
    <highlight code="
  100000 // size
  9268  // 耗时"/>
    <p>时间很明显变长了, 而且相较于直接 new Thread 的方式, 很多小伙伴喜欢将线程池化, 像这样</p>
    <highlight code="
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        var startTime = System.nanoTime();
        var wallpaperList = Collections.synchronizedList(new ArrayList&lt;String>());
        var fixedThread = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
        var futures = new ArrayList&lt;Future&lt;?>>();
        for (int i = 0; i &lt; 1000; i++) {
            futures.add(fixedThread.submit(() -> {
                wallpaperList.add(getWallpaper());
            }));
        }
        for (var future : futures) {
            future.get();
        }
        System.out.println(wallpaperList.size());
        System.out.println((System.nanoTime() - startTime) / 1000000L);
    }"/>
    <p>或者使用 CompletableFuture </p>
    <highlight code="
    public static void main(String[] args) {
        var startTime = System.nanoTime();
        var wallpaperList = Collections.synchronizedList(new ArrayList&lt;String>());
        var completableFutures = new ArrayList&lt;CompletableFuture&lt;?>>();
        for (int i = 0; i &lt; 1000; i++) {
            completableFutures.add(CompletableFuture.runAsync(() -> {
                wallpaperList.add(getWallpaper());
            }));
        }
        CompletableFuture.allOf(completableFutures.toArray(CompletableFuture[]::new)).join();
        System.out.println(wallpaperList.size());
        System.out.println((System.nanoTime() - startTime) / 1000000L);
    }"/>
    <p>但情况是, 单纯的线程池并不太适用于这种阻塞任务,
        我们会发现这种写法某些情况下反而会导致程序速度变慢(当然这与线程池的池大小有关).</p>

</template>

<script setup>
import Highlight from "../../../../../../components/highlight/index.vue";
</script>
