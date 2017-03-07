// implement your solution here
function evenOdd(a) {
 return a.reduce(function (sum, num) {
  if (num % 2 == 0) {
   sum = sum + num;

  } else {
   sum = sum - num;
  }
  return sum;
 }, 0)
}
