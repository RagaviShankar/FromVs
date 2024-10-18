class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get getname(){
    return this.name;
    }

    set setname(newName){

        if(typeof newName === 'string'){

            this.name=newName;
        }
        else{
            console.log('Invalid name')
        }

}

get getage(){
    return this.age();
}

 set setage(newAge){

    if(typeof newAge === 'number' && newAge>0){

        this.age=newAge;
}

else{
    console.log('Invalid age');
}
}}

const person=new Person('Ragavi',99);
console.log(person)

//Get method


person.name=23456;
console.log(person.name);


//set method

person.name=3456789;






