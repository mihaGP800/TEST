import {multy, sum} from "./01"

test('sum should be correct', ()=>{
    let a = 1
    let b = 2
    let c = 3

    const result1 = sum(a,b)
    const result2 = sum(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiply should be correct', ()=>{
    let a = 1
    let b = 2
    let c = 3

    const result1 = multy(a,b)
    const result2 = multy(b,c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})