/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let a = 0;
  while (a <= x) {
    a++;
    const b = a * a;
    if (b === x) return a;
    if (b > x) return a - 1;
  }
  return 0;
};