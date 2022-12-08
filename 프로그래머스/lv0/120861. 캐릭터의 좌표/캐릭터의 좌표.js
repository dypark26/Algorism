function solution(arr, board) {
  let x = 0;
  let y = 0;
  const width = (board[0] - 1) / 2;
  const height = (board[1] - 1) / 2;

  arr.forEach((direction) => {
    if (direction === "up") {
      y += 1;
    } else if (direction === "down") {
      y -= 1;
    } else if (direction === "left") {
      x -= 1;
    } else if (direction === "right") {
      x += 1;
    }

    if (x < -width) {
      x = -width;
    } else if (x > width) {
      x = width;
    }

    if (y < -height) {
      y = -height;
    } else if (y > height) {
      y = height;
    }
  });

  answer = [x, y];
  return answer;
}