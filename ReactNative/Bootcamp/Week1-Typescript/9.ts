let num = 135;

function isPalindrome(number: number) {
  let numStr = String(number);
  let reversedStr = numStr.split("").reverse().join("");

  return reversedStr === numStr ? true : false;
}

console.log(isPalindrome(-282));
