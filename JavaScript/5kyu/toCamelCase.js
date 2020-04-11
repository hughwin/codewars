function toCamelCase(str){
  return str.replace(/(?:\-|\_)(.)/g, function(match){
    return match.toUpperCase();
  }).replace(/\-|\_/g, "");

}
toCamelCase("the-stealth_warrior")