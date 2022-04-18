var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var btnPlayMusic = document.querySelector(".btn-bg-music .fa-play-circle-o");
var btnPauseMusic = document.querySelector(".btn-bg-music .fa-pause-circle-o");
var mySong = document.querySelector("#song");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text) {
    return serverURL + "?text=" + text
};

function errorHandler(error) {
    console.log("error occured : ", error);
    alert("Looks like the Server's Acting Up!\nWe'll be back up and running in no time... :)")
};

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

function songPlay() {
    btnPlayMusic.style.display = "none";
    btnPauseMusic.style.display = "block";
    mySong.play();
}

function songPause() {
    btnPlayMusic.style.display = "block";
    btnPauseMusic.style.display = "none";
    mySong.pause();
}

btnTranslate.addEventListener("click", clickHandler)
btnPlayMusic.addEventListener("click", songPlay)
btnPauseMusic.addEventListener("click", songPause)