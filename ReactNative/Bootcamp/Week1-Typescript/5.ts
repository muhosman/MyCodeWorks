function findLongestPalindrome(str: string) {
  let result: any[] = [];
  let array = Array.from(str);
  let longestPalindrome = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let start;
      let end;

      if (i <= j) {
        start = i;
        end = j;
      } else {
        start = j;
        end = i;
      }

      let string = str.substring(start, end + 1);
      let bool = isPalindrome(string);
      if (bool) {
        result.push(string);
      }
    }
  }

  result.forEach((item, index) => {
    if (item.length >= longestPalindrome.length) {
      longestPalindrome = item;
    }
  });

  console.log("longestPalindrome :" + longestPalindrome);
}

function isPalindrome(str: string) {
  let result;
  let reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

findLongestPalindrome("kelek");
