/*
IRGeekSauce
*/

var IDLE_TIMEOUT = 600; //10 minutes. Change to whatever you want.
var idleSecondsCounter = 0;
document.onclick = function() {
    idleSecondsCounter = 0;
};
document.onmousemove = function() {
    idleSecondsCounter = 0;
};
document.onkeypress = function() {
    idleSecondsCounter = 0;
};
window.setInterval(CheckIdleTime, 1000); //check idle time every second 

function CheckIdleTime() { //function to check for idle time

    idleSecondsCounter++; //increment counter

	/*
	class name should be changed to its appropriate name
        */
	var element = document.getElementsByClassName("<your class name here"); //change to appropriate class
	if(element)
	    element.innerHTML = (IDLE_TIMEOUT - idleSecondsCounter) + "";
	
    if(idleSecondsCounter >= IDLE_TIMEOUT) {
		alert("You were inactive for " + idleSecondsCounter/60 + " minute.\nReturning to login."); //show user message
	    document.location.href = "<your logout page (e.g. logout.php)>"; //This should be edited to whatever your logout page is. 
  }
