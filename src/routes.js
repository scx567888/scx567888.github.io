const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/home/index.vue"),
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
                path: "2024",
                children: [{
                    path: "09",
                    children: [
                        {
                            path: "09", children: [
                                {
                                    path: "2024-09-09-Angel",
                                    name: "2024-09-09-Angel",
                                    component: () => import("./views/blogs/2024/09/09/Angel/index.vue"),
                                    meta: {
                                        title: "2024-09-09 Angel 出招表",
                                    },
                                },{
                                    path: "2024-09-09-Hyper-OS-Uninstall-List",
                                    name: "2024-09-09-Hyper-OS-Uninstall-List",
                                    component: () => import("./views/blogs/2024/09/09/Hyper-OS-Uninstall-List/index.vue"),
                                    meta: {
                                        title: "2024-09-09 Hyper OS 卸载清单",
                                    },
                                },
                            ],
                        },
                    ],
                },{
                    path: "05",
                    children: [
                        {
                            path: "09", children: [
                                {
                                    path: "2024-05-09-imgs",
                                    name: "2024-05-09-imgs",
                                    component: () => import("./views/blogs/2024/05/09/imgs/index.vue"),
                                    meta: {
                                        title: "2024-05-09 图集",
                                    },
                                },
                            ],
                        },
                    ],
                }],
            },
            {
                path: "2022",
                children: [
                    {
                        path: "12",
                        children: [
                            {
                                path: "05",
                                name: "05",
                                children: [
                                    {
                                        path: "jdk-19-virtual-thread",
                                        name: "jdk-19-virtual-thread",
                                        component: () => import("./views/blogs/2022/12/05/jdk-19-virtual-thread/index.vue"),
                                        meta: {
                                            title: "2022-12-05 JDK 19 虚拟线程 (Virtual Thread)",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "10",
                        children: [
                            {
                                path: "28",
                                children: [
                                    {
                                        path: "kof-98-life",
                                        name: "kof-98-life",
                                        component: () => import("./views/blogs/2022/10/28/kof-98-life/index.vue"),
                                        meta: {
                                            title: "2022-10-28 KOF 98 血条",
                                        },
                                    },
                                ],
                            },
                            {
                                path: "25",
                                children: [
                                    {
                                        path: "tree-background",
                                        name: "tree-background",
                                        component: () => import("./views/blogs/2022/10/25/tree-background/index.vue"),
                                        meta: {
                                            title: "2022-10-25 无限延长的 树 背景图",
                                        },
                                    },
                                ],
                            },
                            {
                                path: "24",
                                children: [
                                    {
                                        path: "layout",
                                        name: "layout",
                                        component: () => import("./views/blogs/2022/10/24/layout/index.vue"),
                                        meta: {
                                            title: "2022-10-24 CSS 布局",
                                        },
                                    },
                                    {
                                        path: "center-background-image",
                                        name: "center-background-image",
                                        component: () => import("./views/blogs/2022/10/24/center-background-image/index.vue"),
                                        meta: {
                                            title: "2022-10-24 居中的背景图像",
                                        },
                                    },
                                    {
                                        path: "2022-10-24-margin-collapsing",
                                        name: "2022-10-24-margin-collapsing",
                                        component: () => import("./views/blogs/2022/10/24/margin-collapsing/index.vue"),
                                        meta: {
                                            title: "2022-10-24 外边距折叠",
                                        },
                                    },
                                ],
                            },
                            {
                                path: "21",
                                children: [
                                    {
                                        path: "box-sizing",
                                        name: "box-sizing",
                                        component: () => import("./views/blogs/2022/10/21/box-sizing/index.vue"),
                                        meta: {
                                            title: "2022-10-21 Box Sizing",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "06", children: [
                            {
                                path: "27", children: [
                                    {
                                        path: "css-carousel",
                                        name: "css-carousel",
                                        component: () => import("./views/blogs/2022/06/27/css-carousel/index.vue"),
                                        meta: {
                                            title: "2022-06-27 纯 CSS 实现轮播效果",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "05", children: [
                            {
                                path: "19", children: [
                                    {
                                        path: "clip-path_shape-outside",
                                        name: "clip-path_shape-outside",
                                        component: () => import("./views/blogs/2022/05/19/clip-path_shape-outside/index.vue"),
                                        meta: {
                                            title: "2022-05-19 浮动元素及环绕文字",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                path: "2021", children: [
                    {
                        path: "12", children: [
                            {
                                path: "11", children: [
                                    {
                                        path: "2021-12-11-parallax",
                                        name: "2021-12-11-parallax",
                                        component: () => import("./views/blogs/2021/12/11/parallax/index.vue"),
                                        meta: {
                                            title: "2021-12-11 视差",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "11", children: [
                            {
                                path: "02", children: [
                                    {
                                        path: "2021-11-02-windows-note",
                                        name: "2021-11-02-windows-note",
                                        component: () => import("./views/blogs/2021/11/02/windows-note/index.vue"),
                                        meta: {
                                            title: "2021-11-02 Windows 10 的一些不好记的操作",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: "/favorites",
        name: "favorites",
        component: () => import("./views/favorites/index.vue"),
        meta: {
            title: "收藏夹",
        },
    },
    {
        path: "/software-download-link",
        name: "software-download-link",
        component: () => import("./views/software-download-link/index.vue"),
        meta: {
            title: "常用软件下载地址",
        },
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
