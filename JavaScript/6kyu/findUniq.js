function findUniq(arr) {
  
  for (var i = 0; i < arr.length; i++){
    
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
      
      return arr[i];
      
    }
    
  }
  
}

findUniq([ 0, 1, 0, 4, 4, 5 ])