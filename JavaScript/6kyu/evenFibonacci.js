 function fibonacci(num){
  var temp = 0;
  var previous = 0;
  var current = 1;
  var even = 0;
  while (current <= num){
    temp = current;
    current += previous;
    previous = temp;
    console.log(temp + " " + current + " " + previous);
    if (current % 2 === 0 && current < num){
      even += current;
    }
  }
  return even;
}

fibonacci(7);