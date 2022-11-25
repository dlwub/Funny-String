function funnyString(s) {
  // Write your code here
  let len = s.length;
  for(let i = 1; i <= Math.ceil(len/2); i++){    
    if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1))!==Math.abs(s.charCodeAt(len - i) - s.charCodeAt(len-(i+1))))
    {
        return 'Not Funny'
    }    
  }
  return 'Funny'
}