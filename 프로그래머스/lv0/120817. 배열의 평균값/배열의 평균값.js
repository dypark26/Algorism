function solution(numbers) {
    sum = numbers.reduce((a,b) => a + b, 0)
    return sum / numbers.length
}