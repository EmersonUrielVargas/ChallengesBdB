const S = 8

function O(numbers){
    try {
        let result = []
        for (let index = numbers.length; index >= 0; index--) {
            let number = numbers[index]
            if (number < S) {
                result.push(number)
            }else if(number >= 10){
                let second_digit=(number%10)
                let firts_digit=(number-second_digit)/10
                if (firts_digit < S && second_digit < S) {
                    result.push(number)
                }else if(firts_digit < S){
                    result.push(firts_digit)
                }else if (second_digit < S) {
                    result.push(second_digit)
                }
            }
        }
       return result
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = O;