function solution(n, k) {
    let first = 12000 * n + 2000 * k
    let service = Math.floor(n/10) * 2000
    return first - service
    // return (12000 * n + 2000 * k) - (Math.floor(n/10) * 2000)
}