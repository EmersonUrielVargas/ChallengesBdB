const S = 8


/** S = cualquier número del 1 al 9
 * Teniendo una lista de n números con dígitos en el rango [0, S], donde n <= 100, 
 * cambiar todas las posiciones de la lista en O(n) tiempo.
 * Si el número de entrada contiene un dígito mayor o igual que S, borrará el dígito del número,
 * por ejemplo con S=6, 61 se convierte en 1, y 6 se borrará de la matriz. El resultado se imprimirá en 
 * la consola/terminal. Por favor, no utilizar la ordenación integrada del lenguaje. 
 */

function filterNumbers(numbers){
    try {
        if (!Array.isArray(numbers)) {
            throw TypeError("Wrong type found, expected number array");
        }
        if (numbers.length > 100) {
            throw RangeError("The array is too long, max length allow is 100 numbers");
        }

        const validateNumber = (num) => num < S
        let result = []

        for (let index = (numbers.length - 1); index >= 0; index--) {
            let number = numbers[index]
            if (!(typeof number === "number")) {
                throw TypeError("Wrong type found, expected number");
            }

            if (validateNumber(number)) {
                result.push(number)
            }else {
                const num_to_string = number+""
                const digits_num = num_to_string.split("")
                
                let validated_num_string = ""
                for (const digit of digits_num) {
                    if (validateNumber(Number(digit))) {
                        validated_num_string += digit
                    }
                }
                if(!(validated_num_string === "")){
                    const validated_num = Number(validated_num_string)
                    result.push(validated_num)
                }
            }
        }
        return result
        
    } catch (error) {
        return error.message
    }

}

module.exports = filterNumbers;