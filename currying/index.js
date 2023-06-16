// function SUM(a){
//     return function(b){
//         return `${a} ${b}`
//     }
// }

// console.log(SUM(5)(4))

// use of currying---------------

// check the we

// que ----------------
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(3)(4)(5));

// que-> ================---------------------
// evaluate("sum")()();
// evaluate("multiply")()();
// evaluate("divide")()();

// function evaluate(Operation) {
//   return function (a) {
//     return function (b) {
//       if (Operation === "sum") return a + b;
//       else if (Operation === "substract") return a - b;
//       else if (Operation === "divide") return a / b;
//       else if (Operation === "multiply") return a * b;
//       else return "Invalid operation";
//     };
//   };
// }

// console.log(evaluate('sum')(6)(3));

// que-> infinite currying ---------------------------
// function infinite(a){
//     return function(b){
//         if(b) return infinite(a+b)
//         return a;
//     };
// }
// console.log(infinite(3)(4)(5)())

// Partial Application --------------------------

// function Sum(a){
//     return function(b,c){
//         return a+b+c;
//     };
// }

// console.log(Sum(4)(3,2));
// // or 
// const X = Sum(4);
// console.log(X(3,4))

// currying in DOM -----------------------------
// function updateDom(id){
//     return function(content){
//         document.querySelector("#" + id).textContent = content;
//     };
// }

// const update = updateDom("head");
// update("hil");
// update("Rosita good");

// currying function--------------------------------
function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func(...args);
        }else{
            return function(...next){
                return curried(...args,...next)
            };
        }
    };
}

const sum = (a,b,c,d)=>a+b+c+d;

const curr = curry(sum);
console.log(curr(2)(3)(4)(5));

const multiply = (a,b,c)=>a*b*c ;
const sip = curry(multiply);
console.log(multiply(2,3,4))