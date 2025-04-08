const arr = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];
const arr2 = [1,2,3,4,5]


const duplicatedData = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) { 
            if (data[i] === data[j]) {
                return true
            }
        }
    }
    return false 
}

console.log(duplicatedData(arr))
console.log(duplicatedData(arr2))