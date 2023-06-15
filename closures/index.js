// lexical scope of variable-----------------
// function parent(){
//     let x = "Shivanshu";
//     function child(){
//         console.log(x);
//     }
//     child();
// }
// const myChild = parent();
// myChild;
// parent();

// take an exaple for let and var ->scoping----------------
// console.log(Math.random())
// y=.7;
// if(y > 0.5){
//     var x =1;
// }else{
//     var x = 4;
// }
// console.log(x)

// core example of closures-----------------
// function sum(num1){
//     return function (num2){
//         return num1+num2;
//     }
// }

// const sum5 = sum(2); //here value is assigned to variable num1
// console.log(sum5(4)); //here we have given num2 value

// lets have another example for the same ------------------------

// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment() {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// })();

// counter.increment();
// console.log(counter.value())

// here look closely  that we degisned the program in such a way that
// we have counter and increment, decrement and value methods function
// are giving output from another function

// further lets talk about scope chain for closures--------------
/*there are three type of closures chaining 1st is global scope, 2nd local scope
and 3rd one is outer function scope */
// var num = 5; //global
// function sum(){
//     var nam = "sameer" //local
//     function disp(name){
//         console.log(nam,name,num); //outer function
//     }
//     return disp;
// }

// sum()("harsh");

// the above example shows all the closures

// example-> examine the output -------------
// que-1--
// let count = 0;
// (function printcount(){
//     if(count == 0){
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();
// que-2--
// function createBase(num1){
//     return function (num2){
//         console.log(num1 + num2);
//     }
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// closure optimize the time as well --------

// function optimize(index){
//     var a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i*i;
//      }
//      console.log(a[index]);

//      return function(index){
//         console.log(a[index]);
//      }
// }
// console.time(6);
// let closures =optimize(6); // this takes approximately 16.480
// console.timeEnd(6)
// console.time(6);
// closures(6); //this takes approximately .187
// console.timeEnd(6)

// the time taking will change every time you refresh the page

// que-3 :---------
// for (var i = 0; i < 3; i++) {
//   function inn(i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
//   inn(i);
// }

// let view;
// function code(){
//     let count = 0;
//     return function(){
//         if(count > 0){
//             console.log("already joined  : no need to join again")
//         }else{
//             view = "Join the cummunity";
//             console.log(view);
//             count++;
//         }
//     }
// }

// const code1 = code();
// code1();
// code1();

// polyfil for once func ---------------------

function ONCE(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const sum = ONCE(()=> console.log("ran once:"))
sum();
sum();
sum();
