const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('Test should run and return integer 2', () => {
    expect(returnTwo()).toBe(2)
 });

 test('Test should return a greeting for name', () => {
    expect(greeting('James')).toBe('Hello, James')
    expect(greeting('Jill')).toBe('Hello, Jill')

 })

 test('Test should return a sum of 1 and 2', () => {
    expect(add(1,2)).toBe(3)
 })
 
 test('Test should return a sum of 5 and 9', () => {
    expect(add(5,9)).toBe(14)
 })

 test('Test should return a factor of two nums', () => {
    expect(multiply(2,3)).toBe(6)
    expect(multiply(4,10)).toBe(40)

 })
 test('Test should return a division of two nums', () => {
    expect(divide(10,2)).toBe(5)
    expect(divide(20,4)).toBe(5)

 })
 test('Test should return a subtraction of two nums', () => {
    expect(subtract(10,2)).toBe(8)
    expect(subtract(15,11)).toBe(4)

 })
 describe('Math functions', () =>{
    test('Test should return a factor of two nums', () => {
        expect(multiply(2,3)).toBe(6)
        expect(multiply(4,10)).toBe(40)
    
     })
     test('Test should return a division of two nums', () => {
        expect(divide(10,2)).toBe(5)
        expect(divide(20,4)).toBe(5)
    
     })
     test('Test should return a subtraction of two nums', () => {
        expect(subtract(10,2)).toBe(8)
        expect(subtract(15,11)).toBe(4)
    
  })
  test('Test should return a sum of 1 and 2', () => {
    expect(add(1,2)).toBe(3)
 })
 
 test('Test should return a sum of 5 and 9', () => {
    expect(add(5,9)).toBe(14)
 })
})
    
 
 

