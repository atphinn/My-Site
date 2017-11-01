// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var empty = [];
//   var cut =
//   for (var i = 0; i < arr.length; i++) {
//     if (size){
//       arr.slice(0, size -=1);
//
//     }
//
//   }
//   return empty;
// }
//
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// var arr = [1,2,3,4];
// var empty=[];
// var cut = arr.slice(1,2);
//
// empty.push(cut);


function chunkArrayInGroups(arr, size) {
  // Break it up.


  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == size ){
      var emptyArr = [];
      var sliceArry =  arr.slice(size, (size +=2));
      sliceArry.push(empty);
    }

  }
  return sliceArry;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


var emptyArr = [];
var arr = ["a", "b", "c", "d"]
var sliceArry =  arr.slice(0,2);
console.log(sliceArry.push(emptyArr));
