function findEvenIndex(arr)
{
  for (var i = 1; i < arr.length-1; i++){
    var x = arr.slice(0,i).reduce( function (a,b){return a + b});
    var y = arr.slice(i+1).reduce( function (a,b){return a + b});
    if (x === y){
      return i
    }
  }
  return -1
}
findEvenIndex([1,2,3,4,5,6]);