import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Days array for date display
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// Get the character element and initialize the character state
let chara = document.getElementById("chara");
let charano = 0; // Keeps track of the character state

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
  myLabel.text = `${hours}:${mins}`;

  // Update the date text
  let thedate = util.zeroPad(today.getDate());
  let theday = days[today.getDay()];
  date.text = `${theday} ${thedate}`;
};

// Event listener for debugging touch interaction
chara.addEventListener("mousedown", () => {
  if (charano === 0) {
    charano = 1;
    chara.href = "characters/announcer.jpeg"; // Change character image
    chara.width = 95; // Set width
    chara.height = 135; // Set height
    chara.x = 120; 
    chara.y = 160; 

  } else {
    if (charano === 1) {
      charano = 2;
      chara.href = "characters/blocky.png"; // Change character image
      chara.width = 130; // Set width
      chara.height = 130; // Set height
      chara.x = 105; 
      chara.y = 160; 
  
    } else {
      if (charano === 2) {
        charano = 3;
        chara.href = "characters/pin.png"; // Change character image
        chara.width = 120; // Set width
        chara.height = 170; // Set height
        chara.x = 110; 
        chara.y = 150; 
    
      } else {
        if (charano === 3) {
          charano = 4;
          chara.href = "characters/spongy.png"; // Change character image
          chara.width = 190; // Set width
          chara.height = 130; // Set height
          chara.x = 80; 
          chara.y = 160; 
      
        } else {
          charano = 0;
          chara.href = "characters/four.png"; // Reset to the original image
          chara.width = 160; // Set width
          chara.height = 165; // Set height
          chara.x = 80; 
          chara.y = 150; 
        }
      }
    }
  
  }
});
