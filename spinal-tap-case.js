function spinalCase(str) {
  
  var regexMaj = /\B[A-Z]/g;
  
  function toHyphen(match){
    return '-'+match;
  }
  
  return str.replace(regexMaj, toHyphen).replace(/\s/g, '-').replace(/_/g, '').toLowerCase();
  
}

spinalCase('The_Andy_Griffith_Show');
