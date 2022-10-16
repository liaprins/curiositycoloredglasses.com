
/* TEMPORARILY COMMENTING OUT FOR VIDEOING A .GIF OF RESPONSIVITY FOR PORTFOLIO */
/*
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
         document.getElementById('interactive');
         document.getElementById('loadbg').style.visibility="hidden";
  }
}
*/

/* USE THIS ONE vvv FOR TESTING; IT HAS BUILT-IN TIME SLOT TO SHOW THE LOADER UPON REFRESH */
/*
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loadbg').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },10000);
  }
}
*/

/* DOM readyState property returns one of five values:
uninitialized - Has not started loading yet
loading - Is loading
loaded - Has been loaded
interactive - Has loaded enough and the user can interact with it
complete - Fully loaded */


document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loadbg').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },0);
  }
}