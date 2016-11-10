function spinalCase(str) {
  
  var regexMaj = /\B[A-Z]/g; //match les majuscules précédés d'une lettre
  
  function toHyphen(match){ //sépare les mots commençant par une majuscule
    return '-'+match;
  }
  
  return str.replace(regexMaj, toHyphen).replace(/\s/g, '-').replace(/_/g, '').toLowerCase();
  
}

spinalCase('theCode_Is-working Properly');
