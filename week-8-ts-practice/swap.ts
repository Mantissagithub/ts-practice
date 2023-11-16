function swap<T>(a: T, b: T){
    return [b , a];
}

let a1 = swap(1,2);
let b1 = swap("one", "two");

console.log(a1);
console.log(b1);

