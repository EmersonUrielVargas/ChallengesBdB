const challenge1 = require("./challenge1")

describe('challenge1', () =>{

    test('should print [5,4,3,2,1] if they receive [1,2,3,4,5,8]', () => { 
        const expected = [5,4,3,2,1]
        const result = challenge1([1,2,3,4,5,8])
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive [88]', () => { 
        const expected = []
        const result = challenge1([88])
        expect(expected).toEqual(result)
    })

    test('should print [] if they receive [8]', () => { 
        const expected = []
        const result = challenge1([8])
        expect(expected).toEqual(result)
    })

    test('should print [0,7] if they receive [87,8]', () => { 
        const expected = [7]
        const result = challenge1([87,8])
        expect(expected).toEqual(result)
    })

    test('should print [4,6,5,2,1,3] if they receive [89,93,1,2,5,6,4]', () => { 
        const expected = [4,6,5,2,1,3]
        const result = challenge1([89,93,1,2,5,6,4])
        expect(expected).toEqual(result)
    })

    test('should print [45] if they receive [888485]', () => { 
        const expected = [45]
        const result = challenge1([888485])
        expect(expected).toEqual(result)
    })
})

