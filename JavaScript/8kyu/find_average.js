function find_average(array) {
  return array.reduce(function (a,b){return a + b}) / array.length
}
find_average([1,2,3])