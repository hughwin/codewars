function unique(arr) {
  var temp = [];
return arr.filter(function(value){
  if (temp.indexOf(value) === -1){
    temp.push(value)
    return true;
  }
});

}
