let boxes=  document.getElementsByClassName("box");


function getRandColor(){
    let val1= 0 +Math.floor(Math.random() * (255-0));
    let val2=0 +Math.floor(Math.random() * (255-0));
    let val3 =0 +Math.floor(Math.random() * (255-0));
    return `rgb(${val1}, ${val2}, ${val3})`;
}

// boxes ka array banana 
Array.from(boxes).forEach(e=>{
    console.log(e);
    

    
})

// setInterval(function () {
//     Array.from(boxes).forEach((e) => {
//         e.style.backgroundColor = getRandColor();
//     });
// }, 500);





// it is impotant concept to generates random number between two number
let a =0;
let b = 255; // so here we are going to genarate random number between 0 to 255

let random = a + Math.random() *(b-a);
console.log(random);  // this concept we will use in above code to get random color


// for start and stop button code
function play_pause(){
    if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
    } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
    }
}

let startBtn =document.getElementById("start-btn");
startBtn.addEventListener("click",()=>{
   a = setInterval(function () {
        Array.from(boxes).forEach((e) => {
            e.style.backgroundColor = getRandColor();
        });
    }, 400);

    audioPlayer.play();
    
   
    
    
})


let stopBtn =document.getElementById("stop-btn");
stopBtn.addEventListener("click",()=>{
    clearInterval(a);
    audioPlayer.pause();
    
    
})

let closeLight=document.getElementById("close-light");

closeLight.addEventListener("click",()=>{

    let boxs =document.getElementsByClassName("box");
    

   clearInterval(a);
   for(var i =0;i<boxs.length;i++){
    boxs[i].style.backgroundColor="black";
   }
   audioPlayer.pause();
})

// code for audio 
var audioPlayer = document.getElementById('audioPlayer');
var playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});
