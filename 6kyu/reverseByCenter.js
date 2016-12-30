function reverseByCenter(s){
  if (s.length % 2 === 0){
    return s.substring(s.length/2, s.length) + s.slice(0, s.length/2);
  }
  else {
  return s.substring((s.length/2 + 1), s.length)+ s[(s.length/2) - 0.5] + s.slice(0, (s.length/2));
  }
}
reverseByCenter("animals");