function solution(n, numlist) {
  let result = [];
  for (num of numlist) {
    let small = num < n;
    if (num % n == 0) {
      if (num < n) {
        continue;
      } else {
        result.push(num);
      }
    }
  }
  return result;
}