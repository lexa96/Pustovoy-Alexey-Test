function findUniq(arr){
 var sortedArr = arr.map(el => el.split('').filter(el => el !== ' ').sort().join() );
 var result;
 for(var i = 0 ; i < arr.length; i++){
  var el = sortedArr[i];
  var prev = sortedArr[i - 1];
  
  if(sortedArr.indexOf(el, i+1) === -1 && el !== prev){
   	result = arr[i]
  	break
  }
  
 }
  return result;
}

console.log(findUniq(['cba','bca','abc','test']))
console.log(findUniq(['test','bca','abc','cba']))
console.log(findUniq(['abc','b ca','test','cab']))