const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./home/index.vue"),
        meta: {
            title: "首页",
        },
    },
    {
        path: "/blogs",
        name: "blogs",
        meta: {
            title: "blog",
        },
        children: [
            {
                path: "2023-02-11-software-download-link",
                name: "2023-02-11-software-download-link",
                component: () => import("./blogs/2023-02-11-software-download-link/index.vue"),
                meta: {
                    title: "2023-02-11 常用软件下载地址",
                },
            },
            {
                path: "2022-12-05-jdk-19-virtual-thread",
                name: "2022-12-05-jdk-19-virtual-thread",
                component: () => import("./blogs/2022-12-05-jdk-19-virtual-thread/index.vue"),
                meta: {
                    title: "2022-12-05 JDK 19 虚拟线程 (Virtual Thread)",
                },
            },


            {
                path: "2022-10-28-kof-98-life",
                name: "2022-10-28-kof-98-life",
                component: () => import("./blogs/2022-10-28-kof-98-life/index.vue"),
                meta: {
                    title: "2022-10-28 KOF 98 血条",
                },
            },
            {
                path: "2022-10-24-layout",
                name: "2022-10-24-layout",
                component: () => import("./blogs/2022-10-24-layout/index.vue"),
                meta: {
                    title: "2022-10-24 CSS 布局",
                },
            },
            {
                path: "2022-10-24-center-background-image",
                name: "2022-10-24-center-background-image",
                component: () => import("./blogs/2022-10-24-center-background-image/index.vue"),
                meta: {
                    title: "2022-10-24 居中的背景图像",
                },
            },
            {
                path: "2022-10-24-margin-collapsing",
                name: "2022-10-24-margin-collapsing",
                component: () => import("./blogs/2022-10-24-margin-collapsing/index.vue"),
                meta: {
                    title: "2022-10-24 外边距折叠",
                },
            },
            {
                path: "2022-10-21-box-sizing",
                name: "2022-10-21-box-sizing",
                component: () => import("./blogs/2022-10-21-box-sizing/index.vue"),
                meta: {
                    title: "2022-10-21 Box Sizing",
                },
            },
            {
                path: "2022-06-27-css-carousel",
                name: "2022-06-27-css-carousel",
                component: () => import("./blogs/2022-06-27-css-carousel/index.vue"),
                meta: {
                    title: "2022-06-27 纯 CSS 实现轮播效果",
                },
            },
            {
                path: "2022-05-19-clip-path_shape-outside",
                name: "2022-05-19-clip-path_shape-outside",
                component: () => import("./blogs/2022-05-19-clip-path_shape-outside/index.vue"),
                meta: {
                    title: "2022-05-19 浮动元素及环绕文字",
                },
            },
            {
                path: "2021-11-02-windows-note",
                name: "2021-11-02-windows-note",
                component: () => import("./blogs/2021-11-02-windows-note/index.vue"),
                meta: {
                    title: "2021-11-02 Windows 10 的一些不好记的操作",
                },
            },
        ],
    },
];

/**
 * 为路由设置 order
 * @param r
 */
function setRoutesOrder(r) {
    let i = 0;

    function setRoutesOrder0(r0) {
        for (let e of r0) {
            if (!e.meta) {
                e.meta = {};
            }
            e.meta.order = i;
            i = i + 1;
            if (e.children) {
                setRoutesOrder0(e.children);
            }
        }
    }

    setRoutesOrder0(r);
    return r;
}

function getRouteTitle(route) {
    return route.meta?.title;
}

function getPageTitle(route) {
    const title = getRouteTitle(route);
    return title == null ? "Scx WebSite" : title + " - Scx WebSite";
}

export {routes, setRoutesOrder, getPageTitle, getRouteTitle};
