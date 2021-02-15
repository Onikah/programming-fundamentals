// implement your solution here
function superSum(a) {
 var sum = 0;
 a.forEach(function (num) {
  num.toString().split('').forEach(function(number){
   sum += parseInt(number)
  })
 });
 return sum;
}
