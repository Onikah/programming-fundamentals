// implement your solution here
function objectValues(a) {
 return Object.keys(a).sort().map(function (value) {
  return a[value];
 });
}
