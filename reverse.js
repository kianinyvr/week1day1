function reverse(s) {
  var word = '';
  for (var i = s.length - 1; i >= 0; i--)
    word += s[i];
  return word;
}

var a = process.argv.slice(2);

a.forEach(function(entry){

  console.log(reverse(entry));
});





