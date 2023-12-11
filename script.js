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
    e.style.backgroundColor= getRandColor();

    
})

setInterval(function () {
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getRandColor();
    });
}, 500);





// it is impotant concept to generates random number between two number
let a =0;
let b = 255; // so here we are going to genarate random number between 0 to 255

let random = a + Math.random() *(b-a);
console.log(random);  // this concept we will use in above code to get random color
  