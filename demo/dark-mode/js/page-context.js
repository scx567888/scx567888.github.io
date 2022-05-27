class PageContext {

    themeSelect;
    scxApp;
    scxAppLoading;
    scxAppLoadingStyle;

    eventMap = {
        changeThemeFromSelect: this.changeThemeFromSelect.bind(this)
    }

    constructor() {

    }

    initElement() {
        this.themeSelect = document.querySelector("#theme-select");
        this.scxApp = document.querySelector("#scx-app");
        this.scxAppLoading = document.querySelector("#scx-app-loading");
        this.scxAppLoadingStyle = document.querySelector("#scx-app-loading-style");
        return this;
    }

    bindEvent() {
        this.themeSelect.addEventListener("change", this.eventMap.changeThemeFromSelect);
        return this;
    }

    removeBindEvent() {
        this.themeSelect.removeEventListener("change", this.eventMap.changeThemeFromSelect);
        return this;
    }

    loadThemeFromLocalStorage() {
        let theme = localStorage.getItem("theme");
        if (theme) {
            theme = theme.trim();
            this.themeSelect.value = theme;
            this.changeTheme(theme);
        }
        return this;
    }

    showContent() {
        document.body.removeChild(this.scxAppLoading);
        document.head.removeChild(this.scxAppLoadingStyle);
        this.scxApp.removeAttribute("style");
        return this;
    }

    changeThemeFromSelect(e) {
        const val = e.target.value;
        this.changeTheme(val);
        localStorage.setItem("theme", val);
    }

    changeTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute('theme', "dark");
        } else if (theme === "light") {
            document.documentElement.setAttribute('theme', "light");
        } else if (theme === "system") {
            document.documentElement.removeAttribute('theme');
        }
    }

}

export {PageContext}