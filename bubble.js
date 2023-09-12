
// Implementing bubble sort
// We are starting "fresh" each time we loop through
// To optimize: decrease unneccesary lops
// To optimize: stop if there aren't any swaps

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        console.log(arr);
      }
    }
  }
  return arr;
}

// don't think of loops as an index
// think of i as sets
// think of j as reps
// --------------------------------
// set j to 0
// do something arr.length times
// increment j to 1
// do something arr.length times
// increment j to 2
// do something arr.length times
// stop when you reach arr.length

module.exports = bubbleSort;

