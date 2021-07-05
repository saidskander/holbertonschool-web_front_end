// Verify if JQuery is loaded or not.
document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof jQuery == 'undefined') {
    // ** inside this **
    console.log('jQuery has not been loaded correctly');
  } else {
    console.log('jQuery has been loaded correctly');
  }
})
