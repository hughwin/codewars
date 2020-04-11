function countChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] === char.toUpperCase() || string[i] === char.toLowerCase()){
      count += 1;
    }
  }
  return count
}
countChar("fizZbuzz","z")