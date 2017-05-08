function isValidWalk(walk) {
  if (walk.length !== 10){return false}
  var north = walk.filter(function(letter){if (letter === "n"){return true}}),
    south = walk.filter(function(letter){if (letter === "s"){return true}}),
    east = walk.filter(function(letter){if (letter === "e"){return true}}),
    west = walk.filter(function(letter){if (letter === "w"){return true}});
	
    if (north.length === south.length && east.length === west.length){
      return true;
    }
    return false;
  }


isValidWalk(['n','s','n','s','n','s','n','s','n','s'])