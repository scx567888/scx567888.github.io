import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import {getPageTitle, routes, setRoutesOrder} from "./routes.js";

const router = createRouter({
    history: createWebHashHistory(),
    routes: setRoutesOrder(routes),
});

router.beforeEach(async (to, from) => {
    document.title = getPageTitle(to);
});

createApp(App)
    .use(router)
    .mount("#app");
