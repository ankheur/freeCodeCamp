function convertToRoman(num) {
  var result = [];
  
  var roman = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], ["", "M", "MM", "MMM"]];
  
  num = num.toString().split('').reverse();
 
  for(var i=0; i<num.length; i++){
    
    result.push(roman[i][num[i]]);
    
  }
  
  return result.reverse().join(''); 
 
}

convertToRoman(256);
