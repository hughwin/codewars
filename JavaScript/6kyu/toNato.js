function to_nato(words) {
  words = words.toLowerCase().replace(/ /g, "");
  var decoded = "";
	var alphabet = {"a":"Alfa", "b":"Bravo", "c":"Charlie", "d":"Delta", "e":"Echo", "f":"Foxtrot", "g":"Golf", "h":"Hotel", "i":"India", "j":"Juliett", "k":"Kilo", "l":"Lima", "m":"Mike", "n":"November", "o":"Oscar", "p":"Papa", "q":"Quebec", "r":"Romeo", "s":"Sierra", "t":"Tango", "u":"Uniform", "v":"Victor", "w":"Whiskey", "x":"Xray", "y":"Yankee", "z":"Zulu"};
	
	for (var i = 0; i < words.length; i++){
	  decoded += alphabet[words[i]] + " ";
	}
	return decoded.trim();

}
to_nato("If you can read");