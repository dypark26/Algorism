function solution(n) {
    let sum = 0
    for (let num = 1; num <= n; num++) {
        if (num % 2 === 0) {
            sum += num
        }
    }
    return sum
}