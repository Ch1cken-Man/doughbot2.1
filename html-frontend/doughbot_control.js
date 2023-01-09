/*
p5.js seems like the port managemnet I will want to use to control the arduino. though I still have to figure
out what I want it to do.


arduino
recieves: "coordoninates" one at a time
sends: the "done" message ready for the next instruction. ques instructions if unavailable while recieved.

raspberry Pi
recieves: done message/error messages
sends: coordinates in accordance with the stock and the requested order.



*/

//blink test script
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds 