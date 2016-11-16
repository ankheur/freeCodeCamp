function steamrollArray(arr) {
  
  var result = [];
  
  function flattenArray(entry){
    if(!Array.isArray(entry)){
      
      result.push(entry);
      
    }else{
     
      for(var i=0;i<entry.length;i++){
       
        flattenArray(entry[i]);
        
      }
    }
    return result;
  }
  
  
  return flattenArray(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);
