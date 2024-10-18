class Person{
constructor(name,gender,birthYear){
this.name=name;
this.gender=gender;
this.birthYear=birthYear;
}

calAge(){

let age = new Date().getFullYear()-this.birthYear;
console.log("Age : " + age)
}}

Person.prototype.greet=function(){

    console.log("Hey Hii");
}


let data = new Person('Rag','Fe',1999);
console.log(data);
data.calAge();
data.greet();







