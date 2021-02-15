// implement your solution here
function selectSum(a) {
 var sum = 0;
 a.forEach(function (item) {
  if(!isNaN(item)) {
   sum += item;
  }
 });
 return sum
}
