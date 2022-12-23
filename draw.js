class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        let perimeter = this.getPerimeter();
        let area = this.getArea();
        return "Perimeter: " + perimeter + "; Area " + area;
    }
}
let rectangle = new Rectangle(200,100);
let width = rectangle.getWidth();
let height = rectangle.getHeight();
rectangle.getWidth();
document.getElementById("drawRectangle").innerHTML = rectangle.toString();
let draw = document.getElementById("myCanvas").getContext("2d");
draw.fillStyle = "red";
draw.fillRect(20, 30, width, height);
