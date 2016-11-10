function translatePigLatin(str) {
  
  var voyelles = ["a", "e", "i", "o", "u", "y"];
  str = str.toLowerCase().split('');
  
  if(voyelles.indexOf(str[0]) !== -1){
    
    str = str.join('');
    str = str + "way"; 
    
  }else{
    var i=0;
    var first = [];
    
    while(voyelles.indexOf(str[i]) < 0){
      
      first.push(str[i]);
      i++;      
      
    }
    
    str.splice(0,i);
    
    str = str.join('') + first.join('') + "ay";
    
  }
  
  return str;
}

translatePigLatin("glove");
