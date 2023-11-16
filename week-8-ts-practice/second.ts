// function getFirstElement(arr : any[]) : any{
//     return arr[0];
// }

// console.log(getFirstElement([1,2,3,4,5]));
// console.log(getFirstElement(["one", "two", "three", "four"]));
//or

type TypeArr = (number | string)[];

function getSecondElement(arr : TypeArr) {
    return arr[1];
}

console.log(getSecondElement([1,2,3,4,5]));
console.log(getSecondElement(["one", "two", "three", "four"])); 








