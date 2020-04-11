function bingo(ticket, win){

var sum = 0;

for (var i = 0; i < ticket.length; i++){
  for (var k = 0; k < ticket[i][0].length; k++){
    if (ticket[i][0].charCodeAt(k) === ticket[i][1]){
      sum+= 1;
      break;
    }
  }
}
 if (sum >= win){
    return "Winner!"
  }
  else return "Loser!"
}
bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]])