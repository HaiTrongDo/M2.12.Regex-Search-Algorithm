var arr = [1, 2, 2, 2, 3, 3, 5, 6, 7, 8, 8, 11, 11];
var number = 2;
function countAppearanceInData(arr, targetNumber) {
    var count = 0;
    arr.forEach(function (element) {
        if (element == targetNumber)
            count++;
    });
    return count;
}
console.log(countAppearanceInData(arr, number));
;
