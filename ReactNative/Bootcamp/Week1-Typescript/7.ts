function reverseInt(number: number) {
  let numStr = String(number);
  let result;

  if (numStr === "0") {
    result = "0";
  } else if (
    numStr.includes("-", 0) &&
    numStr.split("").reverse().join("").includes("0", 0)
  ) {
    numStr = numStr.substring(1, numStr.length);
    let resultStr = numStr.split("").reverse().join("");

    let count = 0;
    Array.from(resultStr).forEach((item, index) => {
      if (item == "0") {
        count = count + 1;
      }
    });

    result = resultStr.substring(count, resultStr.length);
    result = `-${result}`;
  } else if (numStr.includes("-", 0)) {
    numStr = numStr.substring(1, numStr.length);
    result = numStr.split("").reverse().join("");
    result = `-${result}`;
  } else if (numStr.split("").reverse().join("").includes("0", 0)) {
    let resultStr = numStr.split("").reverse().join("");
    let count = 0;

    Array.from(resultStr).forEach((item, index) => {
      if (item == "0") {
        count = count + 1;
      }
    });

    result = resultStr.substring(count, resultStr.length);
  } else {
    result = numStr.split("").reverse().join("");
  }

  console.log(result);
}

reverseInt(-100);
