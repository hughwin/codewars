function removeUrlAnchor(url){
  if (url.indexOf("#") === -1){
    return url;
  }
  else{
  var cut = url.indexOf("#");
  return url.slice(0,cut);
  }
}
removeUrlAnchor("www.codewars.com#about");