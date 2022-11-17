consoleText('Liz Gee', 'text', 'black');

function consoleText(displayText, id, color) {
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + color)
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = displayText.substring(0, letterCount)
      window.setTimeout(function() {
        x = 1;
        target.setAttribute('style', 'color:' + color)
        letterCount += x;
        waiting = false;
      }, 2150) // Time spent at beginning of string
    } else if (letterCount === displayText.length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 3175) // Time spent at end of string
    } else if (waiting === false) {
      target.innerHTML = displayText.substring(0, letterCount)
      letterCount += x;
    }
  }, 175)  // Time for each letter
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 500) // Interval of underscore blink
}