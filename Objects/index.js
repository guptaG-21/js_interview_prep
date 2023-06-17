// objects access elements, delete----------------------------------
// const obj = {
//     name:'vasu',
//     age:'28',
// }
// delete obj.age; // deleting property
// obj.age = '22' //adding the property
// console.log(obj);

// const tissue = (function(a){
//     delete a;
//     return (a);
// })(4);

// console.log(tissue);

// another way of accessing property------------------------
// const addP = {
//     name:'harsh',
//     "this is hilarious" : true,
// }

// console.log(addP["this is hilarious"])

// another way of accessing the property---------------------
// const property = "first_name";
// const value = "Harsh Mittal";

// const tracking = {
//     [property]:value,
// }
// console.log(tracking);

// const user = {
//     name:"road",
//     age:"pickup",
//     isTrue:"yes"
// }

// for(key in user){
//     console.log(user[key]);
// }

// que 1--------------------
// let nums = {
//     a:100,
//     b:200,
//     title:"yes",
// }

// function multiByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key] == "number"){
//             obj[key]*=2;
//         }
//     }
// }
// multiByTwo(nums);

// console.log(nums);

// que2__________________________

// let a = {};
// let b = {key:'viore'};
// let c = {key:'rip'};

// a[b] = 123;   //a[object objet ] behaves like this
// a[c] = 345;   //a[object objet ]

// console.log(a[b])

// que-3_using stringify and parse__________________________________

// const user = {
//     boss:"me only",
//     hiss:"movie",
// }
// const pro = JSON.stringify(user);
// console.log(pro)
// console.log(JSON.parse(pro));

// que-3 ---------------------------------
// console.log(..."vasu");

// que-4------------------------------
//making specific property as string

// const user = {
//   boss: "me only",
//   hiss: "movie",
// };

// const sp = JSON.stringify(user,['boss']);
// console.log(sp);

// que-5 ----------------------------------------

// let person = {name:"losia"};
// const mem = [person];
// person = null;
// console.log(mem);

// que-5 ----------------------------------------
// const value = {number:4};
// const multi = (x={...value})=>{
//     console.log(x.number*=2)
// };
// multi(value);
// multi(value);

// que-6 ------------------------------------------------

// function changeRef(person){
//     person.age = 20;
//     person = {
//         name:'vasu',
//         age:50,
//     }
//     return person;
// }
// const person1 = {
//     name:"roman",
//     age:30,
// }
// const change = changeRef(person1);
// console.log(person1)
// console.log(change);

// deep copy and shallow copy
// shallow copy  -> giving reference to other variable
// deep copy -> clonning
const user = {
  name: "harsh",
  age: 23,
};
// 1st way
// const cloneObj = JSON.parse(JSON.stringify(user));
// 2nd way
// const cloneObj = Object.assign({},user);
// 3rd way
const cloneObj = { ...user };
cloneObj.name = "vasu";
console.log(cloneObj);
console.log(user);
