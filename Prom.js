let myPromise = new Promise((resolve,reject)=>{
let condition = false;
if(condition){
    resolve("Condition is true");
}
else{
    reject("Condition is false");
}
});

myPromise.then(

(message)=>{
    console.log(message); //resolve
},

(error)=>{
    console.log(error); //reject
})
.finally(()=>{

console.log("Promise handled")

})

