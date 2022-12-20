const challenge3 = require("./challenge3")

describe('challenge3', () =>{

    test('should print [1,4,9,25,36,64] if they receive {"monedas":[1,2,3,5,6,8,10,25]}', () => { 
        const expected = [1,4,9,25,36,64]
        const result = challenge3({"monedas":[1,2,3,5,6,8,10,25]})
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive {"monedas":[10,25]}', () => { 
        const expected = []
        const result = challenge3({"monedas":[10,25]})
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive {"monedas":[25]}', () => { 
        const expected = []
        const result = challenge3({"monedas":[25]})
        expect(expected).toEqual(result)
    })

    test('should print [1,4] if they receive {"monedas":[-2,-1]}', () => { 
        const expected = [1,4]
        const result = challenge3({"monedas":[-2,-1]})
        expect(expected).toEqual(result)
    })

    test('should print [0,16,16,25,25,49,49] if they receive {"monedas":[-7,-5,-4,0,4,5,7]}', () => { 
        const expected = [0,16,16,25,25,49,49]
        const result = challenge3({"monedas":[-7,-5,-4,0,4,5,7]})
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive {"monedas":[-10,10]}', () => { 
        const expected = []
        const result = challenge3({"monedas":[-10,10]})
        expect(expected).toEqual(result)
    })

    test('should print Array typeError if the argument is not a monedas', () => { 
        const expected = "Wrong type found, expected number monedas"
        const result = challenge3("Texto")
        expect(expected).toEqual(result)
    })

    test('should print rangeError if the monedas is empty', () => { 
        const expected = "The monedas is empty"
        const result = challenge3({"monedas":[]})
        expect(expected).toEqual(result)
    })

    test('should print number typeError if one data of monedas  is not a number', () => { 
        const expected = "Wrong type found, expected number"
        const result = challenge3({"monedas":[3, 8, 54, 89, "45"]})
        expect(expected).toEqual(result)
    })
})

