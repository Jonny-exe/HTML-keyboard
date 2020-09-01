//
// HTML-keyboard/keyboard.js
//
// jshint esversion: 6
function setKeyboard() {
  var div, row, table, cell;
  div = document.getElementsByClassName('HTML-keyboard')[0];
  table = document.createElement('table');
  div.appendChild(table);
  row = table.insertRow(0);
  row.setAttribute("class", "keyPadLines");
  var rowKeys1 = ["º",'1','2','3','4','5','6','7','8','9','0',"'",'¡','BACK'];
  for (let i = 0; i < rowKeys1.length; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "220");
    newDiv.setAttribute("class", "keys margin " + rowKeys1[i]);
    cell = row.insertCell(i);
    cell.appendChild(newDiv);
    newSpan = document.createElement("SPAN");
    newDiv.appendChild(newSpan);
    newSpan.innerHTML = rowKeys1[i];
    cell.colSpan = "3";
  }
  row = table.insertRow(1);
  row.setAttribute("class", "keyPadLines");
  var rowKeys2 = ["TAB",'Q','W','E','R','T','Y','U','I','O','P',"[",']','ENTER'];
  for (let i = 0; i < rowKeys2.length; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "220");
    newDiv.setAttribute("class", "keys margin " + rowKeys2[i]);
    cell = row.insertCell(i);
    cell.appendChild(newDiv);
    newSpan = document.createElement("SPAN");
    newDiv.appendChild(newSpan);
    newSpan.innerHTML = rowKeys2[i];
    cell.colSpan = "3";
    if( rowKeys2[i] == 'TAB') {cell.colSpan = "4";}
  }
  row = table.insertRow(2);
  row.setAttribute("class", "keyPadLines");
  var rowKeys3 = ["BLOQ MAYUS",'A','S','D','F','G','H','J','K','L','Ñ',"´",'Ç',''];
  for (let i = 0; i < rowKeys3.length; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "220");
    newDiv.setAttribute("class", "keys margin " + rowKeys3[i]);
    cell = row.insertCell(i);
    cell.appendChild(newDiv);
    newSpan = document.createElement("SPAN");
    newDiv.appendChild(newSpan);
    newSpan.innerHTML = rowKeys3[i];
    cell.colSpan = "3";
    if( rowKeys3[i] == 'BLOQ MAYUS') {cell.colSpan = "5";}
  }
  row = table.insertRow(3);
  row.setAttribute("class", "keyPadLines");
  var rowKeys4 = ["MAYUS",'<','Z','X','C','V','B','N','M',',','.','-','MAYUS'];
  for (let i = 0; i < rowKeys4.length; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "220");
    newDiv.setAttribute("class", "keys margin " + rowKeys4[i]);
    cell = row.insertCell(i);
    cell.appendChild(newDiv);
    newSpan = document.createElement("SPAN");
    newDiv.appendChild(newSpan);
    newSpan.innerHTML = rowKeys4[i];
    cell.colSpan = "3";
    if(i == 0) {cell.colSpan = "4";}//Left Mayus
    if(i == rowKeys4.length - 1) {cell.colSpan = "8";}//Right Mayus
  }
  row = table.insertRow(4);
  row.setAttribute("class", "keyPadLines");
  var rowKeys5 = ["CONTROL",'⊞','ALT','SPACE','ALT GR','⊞','FN','CONTROL'];
  for (let i = 0; i < rowKeys5.length; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("id", "220");
    newDiv.setAttribute("class", "keys margin " + rowKeys5[i]);
    cell = row.insertCell(i);
    cell.appendChild(newDiv);
    newSpan = document.createElement("SPAN");
    newDiv.appendChild(newSpan);
    newSpan.innerHTML = rowKeys5[i];
    cell.colSpan = "3";
    if(rowKeys5[i] == 'SPACE') {cell.colSpan = "21";}
    if(i == 0) {cell.colSpan = "4";}//Left Control
    if(i == rowKeys5.length - 1) {cell.colSpan = "4";}//Right Control

  }
}
setKeyboard();
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
