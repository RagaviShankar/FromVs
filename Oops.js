//methods

let Person=function(name,gender,birthYear){
    this.name= name;
    this.gender=gender;
    this.birthYear=birthYear;

this.greet=function(){
    console.log("Hey Welcome " +this.name)
}

}

let emp1= new Person('Rag','Fe',4567);
console.log(emp1);
emp1.greet();

let emp2= new Person('Raga','Fem',45678);
console.log(emp2);
emp2.greet();


