function mean(lst){
  
  var letters = [],
  numbers = [];
  
  for (var i =0; i < lst.length; i++){
    if (isNaN(lst[i]) === true){
      letters.push(lst[i]);
    }
    else numbers.push(lst[i]);
  }
  var total = numbers.reduce(function(a,b){
    return parseInt(a)+parseInt(b);
  });
  return [total/numbers.length, letters.join("")];
}
mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']);