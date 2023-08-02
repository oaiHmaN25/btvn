var sum = 0;
var n = 7,f=0;

for (var i = 1; i <= n; i++) {
  sum = i * (i + 1);
  // console.log(sum);
  f += sum;
}

console.log("Sum S for n =", n, "is", f);