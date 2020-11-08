//checks the user input for a valid URL
function checkForURL(URLstring) {
    
  
 /* try {
      new URL(URLstring);
    } catch (_) {
      return false;  
    }
  
    return true;
  }*/

  var regex = URLstring.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/);

     if(regex == null){
         return false;
      } 
      else{
        return true;
      }
}

export { checkForURL }