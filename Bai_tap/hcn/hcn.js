class rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }
}

let rec = new rectangle(150, 50);
let height = rec.getHeight();
let width = rec.getWidth();
let area = rec.getArea();
document.write("Diện tích hình chữ nhật là " + area + "<br>")
let perimeter = rec.getPerimeter();
document.write("Chu vi hình chữ nhật là " + perimeter + "<br>")
rec.setHeight(100);
rec.setWidth(30);
let newArea = rec.getArea();
document.write("Diện tích hình chữ nhật sau khi thay đổi là " + newArea + "<br>");
let newPerimeter = rec.getPerimeter();
document.write("Chu vi hình chữ nhật sau khi thay đổi là " + newPerimeter);

let canvas = document.getElementById("DemoCanvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#fa4b2a';
ctx.fillRect(10, 10, width, height)