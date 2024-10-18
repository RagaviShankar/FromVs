class Shape{
getArea(){
throw new Error("getArea() must be implmented")
}}
class Circle extends Shape{constructor(radius){
    super();
    this.radius = radius;
}
getArea(){
return Math.PI*this.radius*this.radius
}}
class Rectangle extends Shape{
constructor(width,height){
    super();
    this.width = width;
    this.height = height;
}getArea(){

    return this.width*this.height;}

}let circle = new Circle(5);
console.log("Circle Area : " + circle.getArea());

let rectangle = new Rectangle(4,6);
console.log("Rectangle value : "+rectangle.getArea());