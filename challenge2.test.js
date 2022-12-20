const challenge2 = require("./challenge2")

describe('challenge2', () =>{

    test('should print [1,4,9,25,36,64] if they receive {"array":[1,2,3,5,6,8,10,25]}', () => { 
        const expected = [1,4,9,25,36,64]
        const result = challenge2({"array":[1,2,3,5,6,8,10,25]})
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive {"array":[10,25]}', () => { 
        const expected = []
        const result = challenge2({"array":[10,25]})
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive {"array":[25]}', () => { 
        const expected = []
        const result = challenge2({"array":[25]})
        expect(expected).toEqual(result)
    })

    test('should print [1,4] if they receive {"array":[-2,-1]}', () => { 
        const expected = [1,4]
        const result = challenge2({"array":[-2,-1]})
        expect(expected).toEqual(result)
    })

    test('should print [0,16,16,25,25,49,49] if they receive {"array":[-7,-5,-4,0,4,5,7]}', () => { 
        const expected = [0,16,16,25,25,49,49]
        const result = challenge2({"array":[-7,-5,-4,0,4,5,7]})
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive {"array":[-10,10]}', () => { 
        const expected = []
        const result = challenge2({"array":[-10,10]})
        expect(expected).toEqual(result)
    })

    test('should print Array typeError if the argument is not a array', () => { 
        const expected = "Wrong type found, expected number array"
        const result = challenge2("Texto")
        expect(expected).toEqual(result)
    })

    test('should print rangeError if the array is empty', () => { 
        const expected = "The array is empty"
        const result = challenge2({"array":[]})
        expect(expected).toEqual(result)
    })

    test('should print number typeError if one data of array  is not a number', () => { 
        const expected = "Wrong type found, expected number"
        const result = challenge2({"array":[3, 8, 54, 89, "45"]})
        expect(expected).toEqual(result)
    })
})

