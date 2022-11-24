function funnyString(s) {
  // Write your code here
  // Reverse s and save it
  // Create to arrays arr1 and arr2
  // Push the ascii values of characters in s and s_reverse to arr1 and arr2
  //Compute the absolute difference of the consecutive ascii values in arr1 and arr2
  
  let s_reverse = s.split('').reverse().join('')  
  let arr1 = findAscii(s);
  let arr2 = findAscii(s_reverse); 
    
  let arr3 = calculateDiff(arr1)
  let arr4 = calculateDiff(arr2)
  console.log(arr3, arr4)  
  for(let i = 0; i < arr3.length; i++){
      if(arr3[i]!==arr4[i]){
          return 'Not Funny'
      }
  }
  return 'Funny'
  
  function findAscii(t){
      let len = t.length, arr = [];
      for(let i=0;  i < len; i++){
          arr.push(t.charCodeAt(i))
      }
      return arr
  }
  
  function calculateDiff(t){
      let len = t.length, arr=[];
      for(let i = 1; i < len; i++){
          arr.push(Math.abs(t[i] - t[i-1]))
      }
      return arr
  }
}