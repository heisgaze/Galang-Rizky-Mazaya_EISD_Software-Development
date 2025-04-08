let input1 =  [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0] 
let input2 = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5] 

const dataReview = (ratings) => {
    const max = Math.max(...ratings)
    const min = Math.min(...ratings)

    let total = 0
    for (let i = 0; i < ratings.length; i++) {
        total += ratings[i]
    }

    const avg = total / ratings.length

    return [min, max, avg]
}

console.log(dataReview(input1))
console.log(dataReview(input2))