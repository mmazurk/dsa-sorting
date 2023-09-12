function merge(arr1, arr2) {
  let resultArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArray.push(arr1[i]);
      i++;
    } else {
      resultArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    resultArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    resultArray.push(arr2[j]);
    j++;
  }
  return resultArray;
}

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length <= 1) {
    return arr;
  }

  let arrleft = mergeSort(arr.slice(0, mid));
  let arrright = mergeSort(arr.slice(mid, arr.length));

  return merge(arrleft, arrright);
}

module.exports = { merge, mergeSort };

// mergeSort([4, 20, 12, 10, 7, 9])
// mid = 3
// arrleft = mergeSort([4,20,12])
// arrright = mergeSort([10, 7, 9])
// merge(arrleft, arrright)

// mergeSort([4,20,12])
// mid = 1
// arrleft = mergeSort([4])
// arrright = mergeSort([20,12])
// merge(arrleft, arrright);

//mergeSort([4]);
// => 4

// arrleft = 4
