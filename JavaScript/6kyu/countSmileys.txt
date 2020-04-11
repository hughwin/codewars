//return the total number of smiling faces in the array
function countSmileys(arr) {
  var smiles = arr.filter(function(smile){
    if (/(:|;)(-|~)?(D|\))/.test(smile) === true){return smile}
  });
  return smiles.length;
}

countSmileys([':)',':(',':D',':O',':;']);