let arr: number[] = [1,2,2,2,3,3,5,6,7,8,8,11,11]
let number:number = 2

function countAppearanceInData(arr:number[], targetNumber:number):number{
    let count:number = 0
    arr.forEach(element => {
        if (element== targetNumber) count++
    })
    return count
}

console.log(countAppearanceInData(arr, number));;
