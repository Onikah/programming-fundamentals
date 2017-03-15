// implement your solution here
function objectValues(a) {
 var arr = [];
 for (var key in a) {
  arr.push(key);
 }

 return arr.sort().map(function (value) {
  return a[value];
 });
}
