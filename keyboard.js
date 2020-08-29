document.body.addEventListener('keydown', function(event) {
  var keynum;
  console.log("onkeydown");
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
  //  lastKey = lastKey.toLowerCase();
  document.getElementById(lastKey).style.backgroundColor = "#828282";

  setTimeout(function() {
    document.getElementById(lastKey).style.backgroundColor = "#aaaaaa";
  }, 100);
}
