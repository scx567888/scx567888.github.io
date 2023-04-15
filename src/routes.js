const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./home/index.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        path: '/blogs',
        name: 'blogs',
        meta: {
            title: 'blog',
        },
        children: [
            {
                path: '2021-11-02-windows-note',
                name: '2021-11-02-windows-note',
                component: () => import('./blogs/2021-11-02-windows-note/index.vue'),
                meta: {
                    title: '2023-02-11 常用软件下载地址',
                }
            },
        ]
    },
]

/**
 * 为路由设置 order
 * @param r
 */
function setRoutesOrder(r) {
    let i = 0;

    function setRoutesOrder0(r0) {
        for (let e of r0) {
            if (!e.meta) {
                e.meta = {}
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

export {routes, setRoutesOrder, getPageTitle, getRouteTitle}