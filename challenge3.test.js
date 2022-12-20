const challenge3 = require("./challenge3")

describe('challenge3', () =>{

    test('should print 8 if they receive {"monedas":[1,2,4]}', () => { 
        const expected = 8
        const result = challenge3({"monedas":[1,2,4]})
        expect(expected).toEqual(result)
    })

    test('should print 8 if they receive {"monedas":[1,2,4,9]}', () => { 
        const expected = 8
        const result = challenge3({"monedas":[1,2,4,9]})
        expect(expected).toEqual(result)
    })

    test('should print 0 if they receive {"monedas":[10,25]}', () => { 
        const expected = 1
        const result = challenge3({"monedas":[10,25]})
        expect(expected).toEqual(result)
    })

    test('should print 0 if they receive {"monedas":[2]}', () => { 
        const expected = 1
        const result = challenge3({"monedas":[2]})
        expect(expected).toEqual(result)
    })

    test('should print 24 if they receive {"monedas":[1,2,4,9,7]}', () => { 
        const expected = 24
        const result = challenge3({"monedas":[1,2,4,9,7]})
        expect(expected).toEqual(result)
    })

    test('should print 6 if they receive {"monedas":[1,1,1,1,1]}', () => { 
        const expected = 6
        const result = challenge3({"monedas":[1,1,1,1,1]})
        expect(expected).toEqual(result)
    })

    test('should print 8 if they receive {"monedas":[1,2,1,2,1]}', () => { 
        const expected = 8
        const result = challenge3({"monedas":[1,2,1,2,1]})
        expect(expected).toEqual(result)
    })

    test('should print 8 if they receive {"monedas":[32,1,2,1,2,1]}', () => { 
        const expected = 8
        const result = challenge3({"monedas":[32,1,2,1,2,1]})
        expect(expected).toEqual(result)
    })

    test('should print 14 if they receive {"monedas":[32,1,2,6,1,2,1]}', () => { 
        const expected = 14
        const result = challenge3({"monedas":[32,1,2,6,1,2,1]})
        expect(expected).toEqual(result)
    })

    test('should print 20 if they receive {"monedas":[5,7,1,1,2,3,22]}', () => { 
        const expected = 20
        const result = challenge3({"monedas":[5,7,1,1,2,3,22]})
        expect(expected).toEqual(result)
    })

    test('should print error if they receive a data with negative value', () => { 
        const expected = "The data in array is not a positive integer"
        const result = challenge3({"monedas":[-10,10]})
        expect(expected).toEqual(result)
    })

    test('should print error if they receive a data with value 0', () => { 
        const expected = "The data in array is not a positive integer"
        const result = challenge3({"monedas":[10,0]})
        expect(expected).toEqual(result)
    })

    test('should print Array typeError if the argument is not a monedas', () => { 
        const expected = "Wrong type found, expected number array"
        const result = challenge3("Texto")
        expect(expected).toEqual(result)
    })

    test('should print rangeError if the monedas is empty', () => { 
        const expected = "The array is empty"
        const result = challenge3({"monedas":[]})
        expect(expected).toEqual(result)
    })

    test('should print number typeError if one data of array is not a number', () => { 
        const expected = "Wrong type found, expected number"
        const result = challenge3({"monedas":[3, 8, 54, 89, "45"]})
        expect(expected).toEqual(result)
    })
})

