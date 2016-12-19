function min(arr, toReturn) {
  var min = Math.min(...arr)
  if (toReturn === "index"){
    return arr.indexOf(min)
  }
  else return min
}
min([1,2,3,4,5], "index");