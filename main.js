// This makes the heart change its color and fill

function changeShuffle(){
  let shuffleIconDot = document.getElementById("shuffleDot");
  let shuffleIcon = document.querySelector(".bi-shuffle");

if(shuffleIconDot.classList == 'invisible') {
shuffleIconDot.classList = 'visible';
shuffleIcon.style.color = "#1DB954";
shuffleIcon.style.opacity = "1";
shuffleIconDot.style.color = "#1DB954";
} 
else {
  shuffleIcon.style.color =""
  shuffleIcon.style.opacity = "0.6"
  shuffleIconDot.classList = 'invisible';
  }
}

const audio = document.querySelector('audio'),
timeline = document.querySelector('.timeline');
audio.preload = "auto"

function changeRepeat(){
  let repeatIconDot = document.getElementById("repeatDot");
  let repeatIcon = document.querySelector(".bi-arrow-repeat");

if(repeatIconDot.classList == 'invisible') {
repeatIconDot.classList = 'visible';
repeatIcon.style.color = "#1DB954";
repeatIcon.style.opacity = "1";
repeatIconDot.style.color = "#1DB954";
audio.loop = true;
} 
else {
  repeatIcon.style.color = ""
  repeatIcon.style.opacity = "0.4"
  repeatIconDot.classList = 'invisible';
  }
}


function changeHeart(){
  let heart = document.querySelector("#heart");
  
  if (heart.classList == "bi bi-heart") {
  heart.classList.replace("bi-heart", "bi-heart-fill");
  heart.style.color = "#1DB954";
  heart.style.animation = "zoomIn 1s";
  
  } else {
  heart.classList.replace("bi-heart-fill", "bi-heart")
  heart.style.color = "#ffffff";
  heart.remove()
  let heartContainer = document.querySelector("#heart-container")
  let heartNew = document.createElement("i")
  heartNew.id = "heart"
  heartNew.classList = "bi bi-heart"
  heartContainer.appendChild(heartNew)
  heartNew.style.animation = "shake 0.3s linear";
}
}

function changeHeart0(){
  let heart = document.querySelector("#heart0");
  
  if (heart.classList == "bi bi-heart") {
  heart.classList.replace("bi-heart", "bi-heart-fill");
  heart.style.color = "#1DB954";
  heart.style.animation = "zoomIn 1s";
  
  } else {
  heart.classList.replace("bi-heart-fill", "bi-heart")
  heart.style.color = "#ffffff";
  heart.remove()
  let heartContainer = document.querySelector("#heart-container0")
  let heartNew = document.createElement("i")
  heartNew.id = "heart0"
  heartNew.classList = "bi bi-heart"
  heartContainer.appendChild(heartNew)
  heartNew.style.animation = "shake 0.3s linear";
}
}

// This toggles visibility

function showPopUp(){
 let popUpPlayer = document.getElementById("pop-up-player")
 popUpPlayer.classList.toggle("pop-up-visibility")
}


// This changed the volume icon depending on the slider value


function changeVolume() {
  let volume = document.getElementById("volume-slider")
  let icon = document.getElementById("volume-icon")
  if (volume.value == 0) {
  icon.classList = "bi bi-volume-mute";
  } else if (volume.value > 0 && volume.value < 60) {
    icon.classList = "bi bi-volume-down";
  } else {
    icon.classList = "bi bi-volume-up";
  }
}




function muteAudio () {
  audio.muted = !audio.muted;
  let volume = document.getElementById("volume-slider")
  let icon = document.getElementById("volume-icon")
  icon.classList = audio.muted ? "bi bi-volume-mute" : "bi bi-volume-down";
  volume.value = audio.muted ? "0" : "50"
  volume.style.backgroundSize = audio.muted ? "0" : "50%"
  
}

 
function pressPlay0() {
  let playButton = document.getElementById("media-player-play0")
  if (playButton.classList == "bi bi-play-circle-fill") {
  playButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
  audio.play()
  } else {
  playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  audio.pause()
}
}

function pressPlay() {
  let playButton = document.getElementById("media-player-play")
  if (playButton.classList == "bi bi-play-circle-fill") {
  playButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
  audio.play()
  } else {
  playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  audio.pause()
}
}

function audioEnded () {
    let playButton = document.getElementById("media-player-play")
    playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
}

audio.onended = audioEnded;

function secondsToHMS(s) {
    let m = Math.floor(s/60); // Minutes
    s -= m*60;
    return m +":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}


function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
  let range = document.querySelector("#rangevalue")
  range.innerHTML = secondsToHMS(Math.floor(audio.currentTime));
}

audio.ontimeupdate = changeTimelinePosition;


audio.onloadedmetadata = function() {
  let durationDiv = document.getElementById("duration");
  durationDiv.innerText = secondsToHMS(Math.floor(audio.duration));
};

let volumeSlider = document.getElementById("volume-slider")

function setVolume() {
  volumeSlider.addEventListener("change", function(){
  audio.volume = volumeSlider.value / 100;
  })
  // Set the volume according to the
  // percentage of the volume slider set
}

setVolume()
function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);



// READ BELOW!!!
// At the moment following code attached to heart-container shows proper toast 1 
// when heart is turing to filled but not on the first click


// This enables the first toast on the page load

function fullHeartPop(){
let heart = document.querySelector("#heart");
let element = document.querySelector(".toasted")
let myToast = new bootstrap.Toast(element);
heart.addEventListener("click", function(){
        ;
});
let toast1 = document.getElementById("liveToast");
toast1.classList.toggle("toasted")
let toast2 = document.getElementById("liveToast2");
toast2.classList.toggle("toasted")

}

document.querySelector("#heart").addEventListener("click", function(){
let heart = document.querySelector("#heart");
let element = document.querySelector(".toasted")
let myToast = new bootstrap.Toast(element);
myToast.show()
let toast1 = document.getElementById("liveToast");
toast1.classList.toggle("toasted")
let toast2 = document.getElementById("liveToast2");
toast2.classList.toggle("toasted")
})

/*
document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelector(".bi-heart");
    var element = document.getElementById("liveToast");

    btn.addEventListener("click", function(){        
        var myToast = bootstrap.Toast.getOrCreateInstance(element);
        // {_element: div#myToast.toast.fade.show, _config: {…}, _timeout: null, _hasMouseInteraction: false, _hasKeyboardInteraction: false}
    });
});

More about toasts:
https://getbootstrap.com/docs/5.1/components/toasts/#hide
https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-toasts.php
*/





/*
function changePop(){
  let heart = document.querySelector("#heart");
  if (heart.classList == "bi bi-heart") {
document.addEventListener("DOMContentLoaded", function(){
let element = document.getElementById("liveToast");
let myToast = new bootstrap.Toast(element);
heart.addEventListener("click", function(){
        myToast.show();
    });
  })
 } else {
document.addEventListener("DOMContentLoaded", function(){
let element2 = document.getElementById("liveToast2");
let myToast2 = new bootstrap.Toast(element2);
heart.addEventListener("click", function(){
        myToast2.show();
        });
})
}
}
/*

/*
There problem here is that I am trying to attach an event to DOM content that does not exist
var iconFill = document.querySelector(".bi-heart-fill")
let element2 = document.getElementById("liveToast2");
let myToast2 = new bootstrap.Toast(element2);
iconFill.addEventListener("click", function(){
        myToast2.show();
        });

})
*/





// This enables the speaker popover
var exampleEl = document.getElementById('speaker')
var popover = new bootstrap.Popover(exampleEl)

document.addEventListener("DOMContentLoaded", function(){
    var element = document.getElementById("speaker");
    var popover = new bootstrap.Popover(element, {
        content: '<div class="text-center"><h4>Connect to a device <span><a href="https://developer.spotify.com/legal/third-party-licenses/#embedded-sdk-third-party-licenses" target="none"><i class="bi bi-question-circle"></i></a></span></h4><img src="/media/popup.png" id="img-popup" /><div>Play and control Spotify on all <br> your devices.</div><div>Start Spotify on another device <br> and it will magically appear here.</div><a href="https://developer.spotify.com/legal/third-party-licenses/#embedded-sdk-third-party-licenses" target="none"><img src="/media/button.png" id="img-button"/></a></div>',
        html: true
    });
});



// This updates the slider
const rangeInputs = document.querySelectorAll('input[type="range"]')
function handleInputChange2(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange2)
})


const musicTrack = document.querySelector('#music-track')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

audio.ontimeupdate = handleInputChange(musicTrack);