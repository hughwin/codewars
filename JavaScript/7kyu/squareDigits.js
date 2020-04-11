function squareDigits(num){
  var squared = [];
  arr = (""+num).split("");
  for (var i = 0; i < arr.length; i++){
    squared.push(arr[i] * arr[i]);
  }
  return parseInt(squared.join(""));
  
}
squareDigits(9119)