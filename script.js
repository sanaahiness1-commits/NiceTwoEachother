/* =========================================================
   HAMBURGER MENU FUNCTION
   - Opens and closes the side menu
   - Works on index.html and archive.html
========================================================= */


function toggleMenu() {


  // Finds the hamburger button and adds/removes "open"
  // This creates the X animation

  document
    .querySelector(".hamburger")
    .classList
    .toggle("open");



  // Finds the side menu and slides it in/out

  document
    .getElementById("menu")
    .classList
    .toggle("open");



  // Shows/hides the dark background overlay

  document
    .getElementById("overlay")
    .classList
    .toggle("open");


}









/* =========================================================
   AUDIO PLAYER CONTROLS
   - Only runs on pages that have an audio player
   - Controls the play/pause button
========================================================= */



// Finds the audio player

const audio = document.getElementById("audioStream");


// Finds the play button

const btn = document.getElementById("playBtn");





// Checks if audio is currently playing

let isPlaying = false;






/*
   IMPORTANT:
   Archive page does not have an audio player,
   so we check if these elements exist first.

   This prevents errors.
*/


if (audio && btn) {



  // When user clicks play button

  btn.addEventListener("click", function() {



    // If audio is currently stopped

    if (!isPlaying) {



      // Start audio

      audio.play();



      // Change icon to pause symbol

      btn.textContent = "❚❚";



    }





    // If audio is currently playing

    else {



      // Pause audio

      audio.pause();



      // Change icon back to play symbol

      btn.textContent = "▶";


    }





    // Flip the playing status

    isPlaying = !isPlaying;



  });


}