function rot13(message){
  var decode = "";
  for (var i = 0; i < message.length; i++){
    if (/[a-m]/gi.test(message[i])){
    decode += String.fromCharCode(message.charCodeAt(i)+13);
      continue;
    }
    if (/[n-z]/gi.test(message[i])) {
      decode += String.fromCharCode(message.charCodeAt(i)-13);
      continue;
}
else decode += message[i];
}
  return decode;
}
rot13("abcedfgijklmnopqrstvwxyz")