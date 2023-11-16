function getThirdElement<T> ( arr : T[]){
    return arr[2];
}

let ans1 = getThirdElement<number>([1,2,3,4,5]);
let ans2 = getThirdElement<string>(["one", "two", "three", "four"]);

console.log(ans2.toUpperCase());