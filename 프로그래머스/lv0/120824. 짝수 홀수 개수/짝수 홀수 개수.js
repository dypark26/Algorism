function solution(num_list) {
    let result = []
    let even = 0;
    let odd = 0;
    for (let num of num_list) {
        if (num % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    }
    result.push(even, odd)
    return result;
}