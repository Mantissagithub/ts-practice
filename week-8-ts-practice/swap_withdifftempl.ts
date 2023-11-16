function swap1 <U,T>(a: T, b: U){
    return [b , a];
}

let a2 = swap1(1,"two");
let b2 = swap1("one", 2);

console.log(a2);
console.log(b2);

