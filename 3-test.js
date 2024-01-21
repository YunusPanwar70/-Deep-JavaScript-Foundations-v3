const str = '1';
console.log(str - 1); //0
var obj1 = {
    name: 'kyle'
};
var obj = obj1;
console.log(obj == obj1); //true //refference same in memory

// ||(Or) operator finds the truty value first;
// && (And) operator finds the falsey value first;

console.log([1] == true); //true
console.log([''] == true); //false
console.log(String(0) == Number.parseFloat(-0)); //true
console.log(0 === -0); //true
console.log(Object.is(0, -0));


console.log(1 || 0 || false); //1
console.log(2 || 3 || 4);  //2
console.log(0 && false && true); //0
console.log(1 && 2 && true);

const num = 10;
const strnum = String(num);
const boolnum = !num;
const strbool = Boolean(strnum);
const numval = strnum - boolnum;

// templet dead zone tdz

let a = 3 > 2 > 1;
console.log(a);

let b = 3 < 2 < 1;
console.log(b);