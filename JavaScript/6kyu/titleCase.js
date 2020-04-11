function titleCase(title, minorWords){
  
  if (title === "" || title === undefined){
    return "";
  }
  var arr = title.toLowerCase().split(" "),
  altered = [];
  
  if (minorWords === undefined){
    return title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  
  ignore = minorWords.split(" ");
  
  
  for (var i = 0; i < arr.length; i++){
    if(minorWords.toLowerCase().split(" ").indexOf(arr[i]) !== -1 && i !== 0){
      altered.push(arr[i]);
    }
    else {
      altered.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()));
    }
  }
  return (altered).join(" ");
  
}

titleCase("the quick brown fox");