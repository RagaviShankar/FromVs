class Animal{
    speak(){
        console.log("Animal is makes a sound");
    }
}

class Dog extends Animal{
    speak(){
        console.log("The dog barks");
    }}

class Cat extends Animal{
    speak(){
        console.log("The cat meows");
    }
}function makeAnimalSpeak(animal){
animal.speak();
}

let dog = new Dog();
console.log(dog);

let cat = new Cat();
console.log(cat);

makeAnimalSpeak(dog);
makeAnimalSpeak(cat);
