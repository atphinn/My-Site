
function repeatStringNumTimes(str, num) {
  // repeat after me
  var text = ""
  var i = 0;
  while (i < num) {
     text += str
    i++;
  }
  return text
}

repeatStringNumTimes("abc", 3);
