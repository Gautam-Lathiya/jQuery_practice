// const obj = {name : "abc"}

// const obj2 = JSON.parse(JSON.stringify(obj));

// obj2.name = "xyz";

// console.log(obj.name + " " + obj2.name)

let obj1 = {
    "name":"Vinayak"
}
 
let obj2 = {...obj1};
 
obj2.name = "dhruv"
 
console.log(obj1);
console.log(obj2);

// const obj = [1,2,3];

// const obj2 = JSON.parse(JSON.stringify(obj));

// obj2[0] = 101;

// console.log(obj + " " + obj2)