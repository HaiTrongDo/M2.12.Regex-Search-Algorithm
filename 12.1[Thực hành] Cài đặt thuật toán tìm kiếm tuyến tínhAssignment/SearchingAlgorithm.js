var arr = [1, 2, 5, 6, 7, 10];
function findItemMiss(data) {
    var i = 1;
    var arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
//output: [3, 4, 8, 9]
console.log(findItemMiss(arr));
