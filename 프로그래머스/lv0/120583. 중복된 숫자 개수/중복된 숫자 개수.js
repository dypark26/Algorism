function solution(array, n) {
  let counter = 0;
  for (arr of array) {
    if (arr === n) {
      counter += 1;
    }
  }
  return counter;
}