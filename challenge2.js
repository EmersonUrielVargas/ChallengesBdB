const S = 8

function squareNumbersFilterOrderAsc({array}){
    try {
        if (!Array.isArray(array)) {
            throw TypeError("Wrong type found, expected number array");
        }
        if (array.length === 0) {
            throw RangeError("The array is empty");
        }

        const validateNumber = (num) => num < (S*11) 
        let array_num_square = []
        let result = []

        for (const number of array) {
            if (!(typeof number === "number")) {
                throw TypeError("Wrong type found, expected number");
            }
            array_num_square.push(number*number)
        }

        for (let index = 0; index < array_num_square.length; index++) {

            let min_num_index = index
            for (let subIndex = index; subIndex <= (array_num_square.length-1); subIndex++) {

                if (array_num_square[subIndex] < array_num_square[min_num_index]) {
                    min_num_index = subIndex
                }

            }

            let num_aux = array_num_square[index]
            array_num_square[index] = array_num_square[min_num_index]
            array_num_square [min_num_index] = num_aux
            if(validateNumber(array_num_square[index])){
                result.push(array_num_square[index])
            }

        }

        return result
        
    } catch (error) {
        return error.message
    }

}

module.exports = squareNumbersFilterOrderAsc;