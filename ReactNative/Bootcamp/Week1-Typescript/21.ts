let a1 = [1, 2, 4];

let a2 = [1, 3, 4];

let resultArray = [...a1, ...a2].sort((n1, n2) => n1 - n2);

console.log(resultArray);
