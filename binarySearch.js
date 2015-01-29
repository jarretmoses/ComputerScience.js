function binarySearch(array,searchVal,min,max){
  if(min > max) return false;
  var mid = Math.floor((min + max) / 2);
  var midVal = array[mid];
  if(searchVal > midVal) return binarySearch(array,searchVal, mid+1, max);
  if(searchVal < midVal) return binarySearch(array,searchVal, min, mid-1);
  
  return mid;
}

var array  = JSON.parse(process.argv[2]);
var search = process.argv[3];

console.log(binarySearch(array,search,0, array.length-1));