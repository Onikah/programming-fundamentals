function product(a, b) {
    // implement your solution here
    try {
     if (!isNaN(a) && !isNaN(b) && a != undefined && b != undefined) {
      return a * b;
     } else {
      throw "NaN Expection"
     }
    } catch (e) {
     return "error", e;
    }
}

console.log(product());
