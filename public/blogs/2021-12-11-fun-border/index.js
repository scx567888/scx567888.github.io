function addBorder(needAddBorderElements, time = 400, onChange) {
    //创建一个过渡动画对象
    const borderElement = document.createElement("div");
    borderElement.classList.add("has-border");
    borderElement.style.position = "absolute";
    //暂时先隐藏起来
    borderElement.style.display = "none";
    //在第一个元素的父节点追加
    needAddBorderElements[0].parentElement.appendChild(borderElement);

    //为所有需要动画的对象添加事件
    for (let needAddBorderElement of needAddBorderElements) {
        needAddBorderElement.style.position = "relative";
        needAddBorderElement.addEventListener("click", (e) => moveBorder(needAddBorderElement));
    }

    //清除页面中所有带边框的对象,并且获取上一个有边框的对象 这里用来做初始的坐标设置 如果没有则返回 null
    function cleanAndGetLastBorderElement() {
        const list = document.querySelectorAll(".has-border");
        let lastBorderElement = null;
        for (let ele of list) {
            if (ele === borderElement) {
                continue;
            }
            if (ele.classList.contains("has-border")) {
                lastBorderElement = ele;
            }
            ele.classList.remove("has-border");
        }
        return lastBorderElement;
    }

    let nowHasMove = false;

    let setTimeOutEvent = null;

    //移动边框
    function moveBorder(e) {
        if (onChange) {
            onChange(e);
        }
        if (nowHasMove) {
            clearTimeout(setTimeOutEvent);
        } else {
            nowHasMove = true;
        }
        let lastBorderElement = cleanAndGetLastBorderElement();
        //尝试设置初始坐标和起始动画
        if (lastBorderElement != null) {
            const {width, height} = lastBorderElement.getBoundingClientRect();
            borderElement.style.top = `${lastBorderElement.offsetTop}px`;
            borderElement.style.left = `${lastBorderElement.offsetLeft}px`;
            borderElement.style.width = `${width}px`;
            borderElement.style.height = `${height}px`;
        }
        borderElement.style.display = "unset";
        borderElement.style.transition = "all ease-in-out " + time + "ms";

        //获取需要移动到的坐标
        const {width, height} = e.getBoundingClientRect();
        borderElement.style.top = `${e.offsetTop}px`;
        borderElement.style.left = `${e.offsetLeft}px`;
        borderElement.style.width = `${width}px`;
        borderElement.style.height = `${height}px`;

        //当动画执行完毕 从页面中移除 borderElement
        setTimeOutEvent = setTimeout(() => {
            if (!e.classList.contains("has-border")) {
                e.classList.add("has-border");
            }
            borderElement.style.display = "none";
            borderElement.style.transition = "unset";
            nowHasMove = false;
        }, time);
    }
}

export {addBorder};
