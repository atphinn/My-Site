function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str.slice(0, num) + "...";
  }else if (num <= 3) {
    return str.slice(0, num) + "...";
  }else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);


var test = "Peter Piper picked a peck of pickled peppers";



function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num -3)) + "...";
  }else if (str.length > num && num <=3) {
    return str.slice(0, num) + "...";
  }else {
    return str;
  }
}
