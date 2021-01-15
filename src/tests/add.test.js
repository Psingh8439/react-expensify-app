const add = (a, b)=>{
    return a + b 
}

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`


test('should add two numbers', ()=>{
    const result = add(3,4)

    expect(result).toBe(7)
})


test('shoud generate greeting from name', ()=>{
    const result = generateGreeting('Mike')

    expect(result).toBe('Hello Mike!')
})

test('shoud generate greeting for no name', ()=>{
    const result = generateGreeting()

    expect(result).toBe('Hello Anonymous!')
})