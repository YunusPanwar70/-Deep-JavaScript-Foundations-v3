// javascript
// var a = 10;
// var func = function() {
//     var b = 20;
//     console.log("a  and b is accessible(outer):", a, b);
//     var innerFunc = function() {
//         var c = 30;
//         console.log("a and b and c is accessible(inner)", a, b, c);
//     };
//     innerFunc();
//     return;
// };
// func();
// console.log("only a is a accessible (global):", a);

function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;
}

let closureEx = outer(10);
let result = closureEx(5);
console.log(closureEx);
console.log(result);