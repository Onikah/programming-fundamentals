function grade(a) {
    // implement your solution here
    switch (true) {
     case a > 0 && a < 30:
      return "F";
      break;
     case a > 29 && a < 40:
      return "E";
      break;
     case a > 39 && a < 50:
      return "D";
      break;
     case a > 49 && a < 60:
      return "C";
      break;
     case a > 59 && a < 80:
      return "B";
      break;
     case a > 79 && a <= 100:
      return "A";
      break;
    }
}
