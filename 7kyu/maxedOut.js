function maxedOut(arr) {
  var result = arr.map(function(value){
    return value*value*value;
  }).reduce(function(a,b){
    return a+b;
  });
  if (result > 9007199254740991){
    return "You've pushed me to the max!";
  }
  else return result;

}