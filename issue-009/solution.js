// implement your solution here
function sumEven(a) {
 return a.reduce(function (sum, num) {
  if (num % 2 === 0) {
   sum = sum +  num;
  }
  return sum;
 }, 0);
}
