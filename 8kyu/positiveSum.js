function positiveSum(arr) {
  return arr.filter(function(value){
    if (value > 0){
      return value;
    }
  }).reduce(function(a,b){
    return a+b;
  },0);
}