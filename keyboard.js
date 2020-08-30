//
// HTML-keyboard/keyboard.js
//
// jshint esversion: 6


document.body.addEventListener('keydown', function(event) {
  var keynum;
  if (window.event) { // IE
    keynum = event.keyCode;
  } else if (event.which) { // Netscape/Firefox/Opera
    keynum = event.which;
  }
  //use something like charCodeAt to get the number.
  pressedKey = String.fromCharCode(keynum);
  pressedKey = pressedKey.charCodeAt();
  return changeKeyColor(pressedKey);
});


function changeKeyColor(lastKey) {
  var keyelement = document.getElementById(lastKey);
  var keystyle = getComputedStyle(keyelement);
  var keyselectionstyle = getComputedStyle(keyelement, '::selection');
  var backColor = keystyle.backgroundColor; //the RGB value for background: e.g. rgb(12,34,56)
  // console.log(backColor);
  var blinkColor = keyselectionstyle.backgroundColor; //the RGB value for blink: e.g. rgb(12,34,56)
  //console.log(blinkColor);

  document.getElementById(lastKey).style.backgroundColor = blinkColor; // blink

  setTimeout(function() {
    document.getElementById(lastKey).style.backgroundColor = backColor; // default, std. bg
  }, 100);
}
