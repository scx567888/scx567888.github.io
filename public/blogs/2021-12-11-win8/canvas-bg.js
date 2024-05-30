function bg() {
    const parentDom = document.querySelector("#start");
    const canvas1 = document.querySelector("#start-bg1");
    const canvas2 = document.querySelector("#start-bg2");
    const config = {
        circle: {
            amount: 18,
            layer: 3,
            color: [157, 97, 207],
            alpha: 0.3,
        },
        line: {
            amount: 12,
            layer: 3,
            color: [255, 255, 255],
            alpha: 0.3,
        },
        speed: 0.5,
        angle: 20,
    };

    const canvas1Context = canvas1.getContext("2d");
    const canvas2Context = canvas2.getContext("2d");
    const degree = config.angle / 360 * Math.PI * 2;
    let circles = [];
    let lines = [];
    let wWidth;
    let wHeight;
    let timer;

    const setCanvasHeight = function () {
        wWidth = parentDom.clientWidth;
        wHeight = parentDom.clientHeight;
        canvas1.width = wWidth;
        canvas1.height = wHeight;
        canvas2.width = wWidth;
        canvas2.height = wHeight;
    };

    //画圆
    const drawCircle = function (x, y, radius, color, alpha) {
        const gradient = canvas1Context.createRadialGradient(x, y, radius, x, y, 0);
        gradient.addColorStop(0, "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + alpha + ")");
        gradient.addColorStop(1, "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + (alpha - 0.1) + ")");

        canvas1Context.beginPath();
        canvas1Context.arc(x, y, radius, 0, Math.PI * 2, true);
        canvas1Context.fillStyle = gradient;
        canvas1Context.fill();
    };
    //画线
    const drawLine = function (x, y, width, color, alpha) {
        const endX = x + Math.sin(degree) * width;
        const endY = y - Math.cos(degree) * width;
        const gradient = canvas2Context.createLinearGradient(x, y, endX, endY);
        gradient.addColorStop(0, "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + alpha + ")");
        gradient.addColorStop(1, "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + (alpha - 0.1) + ")");

        canvas2Context.beginPath();
        canvas2Context.moveTo(x, y);
        canvas2Context.lineTo(endX, endY);
        canvas2Context.lineWidth = 3;
        canvas2Context.lineCap = "round";
        canvas2Context.strokeStyle = gradient;
        canvas2Context.stroke();
    };

    const animate = function () {
        const sin = Math.sin(degree);
        const cos = Math.cos(degree);

        if (config.circle.amount > 0 && config.circle.layer > 0) {
            canvas1Context.clearRect(0, 0, wWidth, wHeight);
            for (let i = 0; i < circles.length; i++) {
                let item = circles[i];
                let x = item.x;
                let y = item.y;
                let radius = item.radius;
                let speed = item.speed;

                if (x > wWidth + radius) {
                    x = -radius;
                } else if (x < -radius) {
                    x = wWidth + radius;
                } else {
                    x += sin * speed;
                }

                if (y > wHeight + radius) {
                    y = -radius;
                } else if (y < -radius) {
                    y = wHeight + radius;
                } else {
                    y -= cos * speed;
                }

                item.x = x;
                item.y = y;
                drawCircle(x, y, radius, item.color, item.alpha);
            }
        }

        if (config.line.amount > 0 && config.line.layer > 0) {
            canvas2Context.clearRect(0, 0, wWidth, wHeight);
            for (let j = 0; j < lines.length; j++) {
                let item = lines[j];
                let x = item.x;
                let y = item.y;
                let width = item.width;
                let speed = item.speed;

                if (x > wWidth + width * sin) {
                    x = -width * sin;
                } else if (x < -width * sin) {
                    x = wWidth + width * sin;
                } else {
                    x += sin * speed;
                }

                if (y > wHeight + width * cos) {
                    y = -width * cos;
                } else if (y < -width * cos) {
                    y = wHeight + width * cos;
                } else {
                    y -= cos * speed;
                }

                item.x = x;
                item.y = y;
                drawLine(x, y, width, item.color, item.alpha);
            }
        }

        timer = requestAnimationFrame(animate);
    };

    const createItem = function () {
        circles = [];
        lines = [];

        if (config.circle.amount > 0 && config.circle.layer > 0) {
            for (let i = 0; i < config.circle.amount / config.circle.layer; i++) {
                for (let j = 0; j < config.circle.layer; j++) {
                    circles.push({
                        x: Math.random() * wWidth,
                        y: Math.random() * wHeight,
                        radius: Math.random() * (20 + j * 5) + (20 + j * 5),
                        color: config.circle.color,
                        alpha: Math.random() * 0.2 + (config.circle.alpha - j * 0.1),
                        speed: config.speed * (1 + j * 0.5),
                    });
                }
            }
        }

        if (config.line.amount > 0 && config.line.layer > 0) {
            for (let m = 0; m < config.line.amount / config.line.layer; m++) {
                for (let n = 0; n < config.line.layer; n++) {
                    lines.push({
                        x: Math.random() * wWidth,
                        y: Math.random() * wHeight,
                        width: Math.random() * (20 + n * 5) + (20 + n * 5),
                        color: config.line.color,
                        alpha: Math.random() * 0.2 + (config.line.alpha - n * 0.1),
                        speed: config.speed * (1 + n * 0.5),
                    });
                }
            }
        }

        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(animate);
    };

    setCanvasHeight();
    createItem();

}

export {bg};
