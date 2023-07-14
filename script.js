function fibonacci(num) {
// your code here
	 if (num <= 1) {
    return num;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= num; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}

module.exports = fibonacci;
