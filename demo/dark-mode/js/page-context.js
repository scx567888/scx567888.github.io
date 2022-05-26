class PageContext {

    themeSelect;

    eventMap = {
        changeTheme: this.changeTheme.bind(this)
    }

    constructor() {

    }

    initElement() {
        this.themeSelect = document.querySelector("#themeSelect");
        return this;
    }

    bindEvent() {
        this.themeSelect.addEventListener("change", this.eventMap.changeTheme);
        return this;
    }

    removeBindEvent() {
        this.themeSelect.removeEventListener("change", this.eventMap.changeTheme);
        return this;
    }

    changeTheme(e) {
        const val = e.target.value;
        if (val === "dark") {
            document.documentElement.setAttribute('theme', "dark");
        } else if (val === "light") {
            document.documentElement.setAttribute('theme', "light");
        } else if (val === "system") {
            document.documentElement.removeAttribute('theme');
        }
    }

}

export {PageContext}