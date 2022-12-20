
function minQuantityChange({monedas}){
    try {
        if (!Array.isArray(monedas)) {
            throw TypeError("Wrong type found, expected number array");
        }
        if (monedas.length === 0) {
            throw RangeError("The array is empty");
        }

        const coins_sorted = monedas.sort((a, b)=> a - b)

        const validateNumber= ({array,value})=>{
            let aux_plus = 0
            let findChangetoNum = false
            for (let index = (array.length-1); index >= 0; index--) {
                const element = array[index];
                if((aux_plus+element) < value){
                    aux_plus += element
                }else if((aux_plus+element) === value){
                    findChangetoNum = true
                    break
                }
            }
            return findChangetoNum
        }


        let maxChange = 0
        let auxCoins = []
        let testing_change = 1
        let is_realizable_change = true
        while (is_realizable_change && testing_change < 21) {

            let aux_plus = 0
            console.log(testing_change)
            for (const coin of coins_sorted) {

                if (!(typeof coin === "number")) {
                    throw TypeError("Wrong type found, expected number");
                }
                if (coin <= 0) {
                    throw RangeError("The data in array is not a positive integer");
                }
                if(coin < testing_change){
                    
                    console.log("side minor")
                    if ((aux_plus+coin) === testing_change) {
                        console.log("igual comparacion "+(aux_plus+coin))
                        break

                    }else if((aux_plus+coin) < testing_change){
                        aux_plus += coin
                        auxCoins.push(coin)
                        console.log(auxCoins)
                    }else{
                        auxCoins.push(coin)
                        find_change_to_value = validateNumber({"array": auxCoins, "value":testing_change})
                        if(!find_change_to_value){
                            is_realizable_change = false
                            maxChange = testing_change
                            break
                        }
                    }

                }else if(coin === testing_change){

                    break;

                }else{
                    is_realizable_change = false
                    maxChange = testing_change
                    break
                }
            }
            testing_change++;
        }
        console.log(maxChange)

        return maxChange
        
    } catch (error) {
        return error.message
    }

}

console.log(minQuantityChange({"monedas":[1,2,4]}))

module.exports = minQuantityChange;