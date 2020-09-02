//
// HTML-keyboard/keyboard.js
//
// jshint esversion: 6
export function setKeyboard(id) {
  var newDiv, newSpan, div, table, cell;
  if( id == "" || id == null ) {
    id = "HTML-keyboard";
  }
  div = document.getElementsByClassName(id)[0];
  table = document.createElement('table');
  div.appendChild(table);
  var keys = [
    ["º", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "'", '¡', 'BACK'],
    ["TAB", 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', "[", ']', 'ENTER'],
    ["BLOQ MAYUS", 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', "´", 'Ç', ''],
    ["MAYUS", '<', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', 'MAYUS'],
    ["CONTROL", '⊞', 'ALT', 'SPACE', 'ALT GR', '⊞', 'FN', 'CONTROL']
  ];
  var ids = [
    ["220", '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', "222", '221', '8'],
    ["9", '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', "192", '171', '13'],
    ["20", '65', '83', '68', '70', '71', '72', '74', '75', '76', '192', "222", '191', '13'],
    ["16", '60', '90', '88', '67', '86', '66', '78', '77', '188', '190', '173', '16'],
    ["17", '91', '18', '32', '18', '⊞', '91', '17']
  ];
  var row1 = 0;
  for (let row = 0; row1 < 5; row++) {
    row = table.insertRow(row1);
    row.setAttribute("class", "keyPadLines");
    for (let i = 0; i < keys[row1].length; i++) {
      newDiv = document.createElement('div');
      newDiv.setAttribute("class", "keys margin " + keys[row1][i]);
      newDiv.setAttribute("id", ids[row1][i]);
      cell = row.insertCell(i);
      cell.appendChild(newDiv);
      newSpan = document.createElement("SPAN");
      newDiv.appendChild(newSpan);
      newSpan.innerHTML = keys[row1][i];
      cell.colSpan = "3";
      console.log(keys[row1].length - 1);
      if (row1 == 0 && i == keys[row1].length - 1) {
        cell.colSpan = "6";
      } //BACK
      if (row1 == 1 && i == 0) {
        cell.colSpan = "4";
      } //BACK
      if (row1 == 2 && i == 0) {
        cell.colSpan = "5";
      } //BLOCK MAYUS
      if (row1 == 3 && i == 0) {
        cell.colSpan = "3";
      } //Left Mayus
      if (row1 == 4 && i == 0) {
        cell.colSpan = "4";
      } //Left Control
      if (row1 == 3 && i == keys[row1].length - 1) {
        cell.colSpan = "8";
      } //Right Mayus
      if (row1 == 4 && i == 3) {
        cell.colSpan = "21";
      } //Space
    }
    row1 += 1;
  }
}
export function startKeyboard() {
  var pressedKey;
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
}

export function startSetKeyboard(id) {
  setKeyboard(id);
  startKeyboard();
}

export function changeKeyColor(lastKey) {
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
