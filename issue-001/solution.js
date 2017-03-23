function dataTypeCheck(a) {
    // implement your solution here
  if (typeof(a) == "string") {
    if (isNaN(a)) {
      return "hello " + a;
    } else {
      return Number(a);
    }
  } else if (typeof(a) == 'number') {
    if (isNaN(a)) {
      return 0;
    } else if (a !== Math.floor(a)) {
      return a * 2;
    } else {
      return a / 2;
    }
  } else if (a == null || typeof(a) == "undefined") {
    return 0;
  }
}

console.log(dataTypeCheck(NaN));
