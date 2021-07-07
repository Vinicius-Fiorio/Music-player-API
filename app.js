let buttonPlayPause = document.querySelector("#playPause");
let buttonPrevious = document.querySelector("#previousMusic");
let buttonNext = document.querySelector("#nextMusic");
let audio = document.querySelector("audio");
let disk = document.querySelector(".disk");
let currentMusicIndex = 0;
let responseLength = 0;
let response;

function updateInfo(response,index){
    document.querySelector(".backgroundImage").style.backgroundImage = `url(${response.data[index].album.cover_xl})`;
    document.body.style.backgroundColor = 'black';
    document.getElementById("imageDisk").style.backgroundImage = `url(${response.data[index].album.cover_medium})`;
    document.getElementById("music-title").innerHTML = response.data[index].title;
    document.getElementById("music-artist").innerHTML = response.data[index].artist.name;
    audio.setAttribute('src', response.data[index].preview);
    buttonPlayPause.setAttribute('class', 'fas fa-play');
    disk.style.animationPlayState = 'paused';

    response.data[index].title.length >= 15 ? document.querySelector(".information").style.marginLeft = "5vh" : document.querySelector(".information").style.marginLeft = "-5vh";
}

async function searchingMusic() {
    let searching = document.querySelector("#searching").value;
    document.querySelector("#loading").style.opacity = 1;
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searching}`;
    document.getElementById("searching").value = "";

    try {
        const promisse = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "YOUR_RAPID_API_KEY",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        });

        response = await promisse.json();
        responseLength = response.data.length;
        currentMusicIndex = 0;
        console.log(response.data)
        updateInfo(response, currentMusicIndex)
    } catch (error) {
        alert('No artist/music found.')
    } finally{
        document.querySelector("#loading").style.opacity = 0;
    }
}

buttonPlayPause.addEventListener('click', () => {
    audio.volume = 0.1;
    if(buttonPlayPause.className == 'fas fa-play'){
        audio.play();
        buttonPlayPause.setAttribute('class', 'fas fa-pause');
        disk.style.animationPlayState = 'running';
    }else{
        audio.pause();
        buttonPlayPause.setAttribute('class', 'fas fa-play');
        disk.style.animationPlayState = 'paused';
    }

    const count = setInterval(() =>{
        document.getElementById("atual-time").innerHTML = "0:"+ parseInt(audio.currentTime).toLocaleString(undefined, {minimumIntegerDigits: 2});
        document.getElementById("progress").style.width = (100*parseInt(audio.currentTime))/30 + "%";

        if(audio.ended){
            buttonPlayPause.className = 'fas fa-play';
            disk.style.animationPlayState = 'paused';
            document.getElementById("atual-time").innerHTML = "0:00";
            document.getElementById("progress").style.width = "0%";
            clearInterval(count)
        }
    }, 500);
});


function nextPreviousMusic(control){
    if(currentMusicIndex == 0 && control < 0)
        currentMusicIndex = responseLength - 1;
    else if(currentMusicIndex == (responseLength-1) && control > 0)
        currentMusicIndex = 0;
    else
        currentMusicIndex += control;

    updateInfo(response,currentMusicIndex);
}

buttonPrevious.addEventListener('click', () =>{
    nextPreviousMusic(-1);
})

buttonNext.addEventListener('click', () =>{
    nextPreviousMusic(1);
})

document.querySelector("#searching").addEventListener('keypress', event =>{
    if(event.keyCode == 13)
        searchingMusic();
}) 