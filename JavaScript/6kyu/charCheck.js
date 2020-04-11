function charCheck(text, max, spaces){
  
  if (!spaces){
    text = text.replace(/ /g,"");
  }
  
  if (text.length>max){
    return [false, text.substring(0,max)];
  }
  else{
    return [true, text];
  }
}
charCheck("I am applying for the role of Base Manager on Titan .",60, true);