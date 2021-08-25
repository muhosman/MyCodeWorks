let array = [1, 3, 5, 6];

function findIndex(target: number) {
  let indexValue;

  let doesTargetExist = false;

  array.forEach((item, index) => {
    if (target === item) {
      doesTargetExist = true;
    }
  });

  if (doesTargetExist) {
    array.forEach((item, index) => {
      if (target === item) {
        indexValue = index;
      }
    });

    return indexValue;
  } else {
    array.push(target);

    array.sort((n1, n2) => n1 - n2);

    array.forEach((i, ind) => {
      if (target === i) {
        indexValue = ind;
      }
    });
  }

  return indexValue;
}

console.log(findIndex(0));
