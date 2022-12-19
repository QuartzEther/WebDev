function getSum( a,b )
{
  n = a<b? a:b;
  sum = 0;
  while (n <= (a<b?b:a)){
    console.log (n)
    sum += n;
    n++
  }
  return sum
}
getSum(1,-2)
//console.log(getSum(4,7));