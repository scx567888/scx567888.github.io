/**
 * 寻找距离最近段元素 (是根据坐标系查找,不是根据 Dom 结构查找)
 * @param source 用来定位的元素
 * @param elementList 可被查找的元素列表
 * @param type 查找依据 有 上下左右四种
 * @returns {null} 返回查找到的元素或者 null
 */
function findNearestElement(source, elementList = [], type = "right") {
    const sourceElementCoordinate = new ElementCoordinate(source);
    //距离最近的元素
    let nearestElement = null;
    //临时存储
    let tempNum = Number.MAX_VALUE;
    if (type === "right") {
        for (let ele of elementList) {
            const eleElementCoordinate = new ElementCoordinate(ele);
            if (eleElementCoordinate.leftCenter.x >= sourceElementCoordinate.rightCenter.x) {
                //计算两点之间距离
                const len = getDistance(eleElementCoordinate.leftCenter, sourceElementCoordinate.rightCenter);
                if (len <= tempNum) {
                    nearestElement = ele;
                    tempNum = len;
                }
            }
        }
    } else if (type === "left") {
        for (let ele of elementList) {
            const eleElementCoordinate = new ElementCoordinate(ele);
            if (sourceElementCoordinate.leftCenter.x >= eleElementCoordinate.rightCenter.x) {
                //计算两点之间距离
                const len = getDistance(sourceElementCoordinate.leftCenter, eleElementCoordinate.rightCenter);
                if (len <= tempNum) {
                    nearestElement = ele;
                    tempNum = len;
                }
            }
        }
    } else if (type === "bottom") {
        for (let ele of elementList) {
            const eleElementCoordinate = new ElementCoordinate(ele);
            if (sourceElementCoordinate.bottomCenter.y <= eleElementCoordinate.topCenter.y) {
                //计算两点之间距离
                const len = getDistance(eleElementCoordinate.topCenter, sourceElementCoordinate.bottomCenter);
                if (len <= tempNum) {
                    nearestElement = ele;
                    tempNum = len;
                }
            }
        }
    } else if (type === "top") {
        for (let ele of elementList) {
            const eleElementCoordinate = new ElementCoordinate(ele);
            if (eleElementCoordinate.bottomCenter.y <= sourceElementCoordinate.topCenter.y) {
                //计算两点之间距离
                const len = getDistance(eleElementCoordinate.bottomCenter, sourceElementCoordinate.topCenter);
                if (len <= tempNum) {
                    nearestElement = ele;
                    tempNum = len;
                }
            }
        }
    } else {
        console.error("type 类型取值只能为 [left,top,right,bottom] 得到的值 : " + type);
    }
    return nearestElement;
}

class Positions {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}

class ElementCoordinate {
    constructor(ele) {
        let domRect = ele.getBoundingClientRect();
        //先根据顶部的距离和元素的宽度定位元素顶部中心点位置
        const eleTop = ele.offsetTop;
        const eleLeft = ele.offsetLeft;
        const eleWidth = domRect.width;
        const eleHeight = domRect.height;
        this.topCenter = new Positions(eleLeft + (eleWidth / 2), eleTop);
        this.bottomCenter = new Positions(eleLeft + (eleWidth / 2), eleTop + eleHeight);
        this.leftCenter = new Positions(eleLeft, eleTop + +(eleHeight / 2));
        this.rightCenter = new Positions(eleLeft + eleWidth, eleTop + (eleHeight / 2));
    }
}

/**
 * 获取两点的距离 这里应该在开一下根号 不过这里只是用来比较大小,而且是内部使用 为了性能就不开根号了
 * @param a
 * @param b
 * @returns {number}
 */
function getDistance(a, b) {
    return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
}

export {
    findNearestElement,
};
