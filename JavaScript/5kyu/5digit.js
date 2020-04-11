function solution(digits){
  var largest = 0, 
  str = digits.toString();
  for (var i = 0; i < str.length; i++ ){
    if (Number(str.substring(i, (i + 5)) > largest)){
      largest = Number(str.substring(i, (i + 5)));
    }
  }
  return largest;
  
  
}
solution(2839101925423543838782872772587);