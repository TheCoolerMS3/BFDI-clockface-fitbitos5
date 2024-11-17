import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Days array for date display
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// Get the character element and initialize the character state
let chara = document.getElementById("chara");
let charano = 0; // Keeps track of the character state

// Get the background element and initialize the background state
let background = document.getElementById("background");
let overlay = document.getElementById("overlay");
let bgno = 0; // Keeps track of the background state

// Get text elements
const myLabel = document.getElementById("myLabel");
const date = document.getElementById("date");

// Update the clock every minute
clock.granularity = "minutes";

// Clock tick event to update time and date
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();

  // 12h or 24h format based on user settings
  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12; // 12h format
  } else {
    hours = util.zeroPad(hours); // 24h format with zero padding
  }

  let mins = util.zeroPad(today.getMinutes());
  let thedate = util.zeroPad(today.getDate());
  let theday = days[today.getDay()];
  myLabel.text = `${hours}:${mins} - ${theday} ${thedate}`;

};

// Event listener for debugging touch interaction
chara.addEventListener("mousedown", () => {
  if (charano === 0) {
    charano = 1;
    chara.href = "characters/announcer.jpeg"; // Change character image
    chara.width = 95; // Set width
    chara.height = 135; // Set height
    chara.x = 120; 
    chara.y = 155; 

  } else if (charano === 1) {
    charano = 2;
    chara.href = "characters/blocky.png"; // Change character image
    chara.width = 130; // Set width
    chara.height = 130; // Set height
    chara.x = 105; 
    chara.y = 160; 

  } else if (charano === 2) {
    charano = 3;
    chara.href = "characters/pin.png"; // Change character image
    chara.width = 120; // Set width
    chara.height = 170; // Set height
    chara.x = 110; 
    chara.y = 120; 

  } else if (charano === 3) {
    charano = 4;
    chara.href = "characters/spongy.png"; // Change character image
    chara.width = 190; // Set width
    chara.height = 130; // Set height
    chara.x = 75; 
    chara.y = 160; 

  } 
else if (charano === 4) {
    charano = 5;
    chara.href = "characters/david.png"; // Change character image
    chara.width = 75; // Set width
    chara.height = 140; // Set height
    chara.x = 130; 
    chara.y = 150; 

  } else if (charano === 5) {
    charano = 6;
    chara.href = "characters/flower.png"; // Change character image
    chara.width = 110; // Set width
    chara.height = 170; // Set height
    chara.x = 110; 
    chara.y = 120; 

  } else if (charano === 6) {
    charano = 7;
    chara.href = "characters/freesmart_van.png"; // Change character image
    chara.width = 200; // Set width
    chara.height = 80; // Set height
    chara.x = 70; 
    chara.y = 210; 

  }
else if (charano === 7) {
    charano = 8;
    chara.href = "characters/loser.png"; // Change character image
    chara.width = 150; // Set width
    chara.height = 160; // Set height
    chara.x = 80; 
    chara.y = 135; 

  } else if (charano === 8) {
    charano = 9;
    chara.href = "characters/pin_idfb.png"; // Change character image
    chara.width = 120; // Set width
    chara.height = 180; // Set height
    chara.x = 110; 
    chara.y = 110; 

  }  else if (charano === 9) {
    charano = 10;
    chara.href = "characters/tlc.png"; // Change character image
    chara.width = 190; // Set width
    chara.height = 130; // Set height
    chara.x = 75; 
    chara.y = 160;  

  }  else if (charano === 10) {
    charano = 11;
    chara.href = "characters/tv.png"; // Change character image
    chara.width = 160; // Set width
    chara.height = 160; // Set height
    chara.x = 90; 
    chara.y = 130;  

  } else if (charano === 11) {
    charano = 12;
    chara.href = "characters/two.png"; // Change character image
    chara.width = 160; // Set width
    chara.height = 165; // Set height
    chara.x = 80; 
    chara.y = 125;  

  } else if (charano === 12) {
    charano = 13;
    chara.href = "characters/winner.png"; // Change character image
    chara.width = 100; // Set width
    chara.height = 180; // Set height
    chara.x = 120; 
    chara.y = 120;  

  } else if (charano === 13) {
    charano = 14;
    chara.href = "characters/x.png"; // Change character image
    chara.width = 190; // Set width
    chara.height = 130; // Set height
    chara.x = 75; 
    chara.y = 160;  

  } 

else {
    charano = 0;
    chara.href = "characters/four.png"; // Reset to the original image
    chara.width = 160; // Set width
    chara.height = 175; // Set height
    chara.x = 80; 
    chara.y = 120; 
  }
});

// Event listener for debugging touch interaction
background.addEventListener("mousedown", () => {
  if (bgno === 0) {
    bgno = 1;
    background.href = "locations/yoyleland.png"; // Change bg image

  } else if (bgno === 1) {
    bgno = 2;
    background.href = "locations/brb.png"; // Change bg image
    overlay.href = "overlays/overlay_brb.png"; // change overlay
    overlay.width=336
    overlay.height=336

  } else {
    bgno = 0;
    background.href = "locations/goiky.jpeg"; // Reset to the original image
  }
});

// Event listener for debugging touch interaction
overlay.addEventListener("mousedown", () => {

    bgno = 0;
    background.href = "locations/goiky.jpeg"; // Reset to the original image
    overlay.href = "overlays/overlay.png"; // change overlay
    overlay.width=1
    overlay.height=1

});

