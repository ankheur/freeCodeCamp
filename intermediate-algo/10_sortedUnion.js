function uniteUnique(arr) {
  
 arr = [...arguments].reduce(function(a,b){return a.concat(b);}); 
  
  var result = [];
  
  for (var i=0; i<arr.length; i++){
    
    if(result.indexOf(arr[i]) === -1){
      result.push(arr[i]);
    }
    
  }
  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
