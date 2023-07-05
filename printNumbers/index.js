

(function prinNumber(){
    console.log(arguments[0]);
    if( arguments[0]<=9) prinNumber(arguments[0]+1);
  })(-10)