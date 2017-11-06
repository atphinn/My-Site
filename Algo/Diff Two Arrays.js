function diffArray(arr1, arr2) {
    var newArr = [];
    var arr3 = arr1.concat(arr2).sort();
    for (var i = 0; i <= arr3.length; i++) {
        if (arr3[i] !== arr3[i + 1] && arr3[i] !== arr3[i - 1]) {
            newArr.push(arr3[i]);
        }
    }
    return newArr;

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);