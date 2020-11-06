//checks the user input for a valid URL
function checkForURL(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }
  
    return true;
  }

export { checkForURL }