module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openElement = []; 
  let closeElement = [];
  
  bracketsConfig.forEach(function(few) {
     openElement.push(few[0]);
     closeElement.push(few[1]);
  });
 for (let i = 0; i < str.length; i++) {
     let open = openElement.indexOf(str[i]);
     let close = closeElement.indexOf(str[i]);
     if (open !== -1) {
       if(close !== -1 ) {
          if(str[i] !== stack[stack.length -1]) {
            stack.push(str[i]);
            }  else {
            stack.pop();
         }
         continue;
       }
       stack.push(str[i]);
       continue;
    }
    if(close !== -1) {
        let lastSymb = stack.pop();
        let indxcOpen = openElement.indexOf(lastSymb);
        let indxClose = close;
        if ( indxcOpen !== indxClose) {
          return false;
        }
    }
  }
  if( stack.length !== 0) {
    return false;
  }
  return true;
}

