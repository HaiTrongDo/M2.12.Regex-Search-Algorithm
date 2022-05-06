var hotelRooms = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]];
function refactoringHotelRoom(arr) {
    var total = 0;
    for (var x = 0; x < arr.length; x++) {
        for (var y = 0; y < arr[x].length; y++) {
            if (arr[x][y] == 0) {
                for (var i = x; i < arr.length; i++) {
                    arr[i][y] = 0;
                }
            }
            total += arr[x][y];
        }
    }
    return total;
}
console.log("total room price is ", refactoringHotelRoom(hotelRooms)); // total =9
// console.log(hotelRooms);
