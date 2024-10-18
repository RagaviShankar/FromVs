class A{
constructor(name,gender,birth){
this.name=name;
this.gender=gender;
this.birth=birth;}
calAge(){
    let age= new Date().getFullYear-this.birth;
    console.log(age);
}greet(){
    console.log('Good Evening !!' + this.name);
}}
class B extends A{
    constructor(name,mark,grade){
        super(name)
        this.mark=mark;
        this.grade=grade;}
greet(){
      console.log('Good Night !!' + this.name)
    }
calAge(){
        super.calAge();
    }
}

let class1= new B("Arthi",899,'A');
console.log(class1);
class1.greet();
class1.calAge();