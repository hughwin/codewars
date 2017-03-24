function iqTest(numbers){
  var arr = numbers.split(" ")
  var even = numbers.split(" ").filter(function(value){
    
    if (value % 2 === 0){return value}

  });
  if (even.length === 1){
    return arr.indexOf(even[0])+1
  }
  var odd = numbers.split(" ").filter(function(value){
    
    if (value % 2 !== 0){return value}

  });
  if (odd.length === 1){
    return arr.indexOf(odd[0])+1
  }

}
iqTest("2 4 7 8 10")