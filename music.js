let btn = document.querySelector("#plps");
let rng = document.querySelector("#songrange")
let aud = document.querySelector("#rain");
let progbar = document.querySelector("#progressbar");
let prev = document.querySelector("#back");
let forw = document.querySelector("#forward");
let img = document.querySelector("#imageid");
let songname = document.querySelector("#sname");

let curr = 0;
const songs = [{Name:"O-Maahi",sou:"O-Maahi.mp3",ims:"O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg"},{Name:"Aasan Nahin Yahan",sou:"Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3",ims:"maxresdefault.jpg"}];

aud.src = songs[curr].sou;
img.src = songs[curr].ims;
songname.innerText = songs[curr].Name;
btn.addEventListener('click',()=>{
    if(btn.className == "fa-solid fa-pause"){
        btn.className = "fa-solid fa-play";
        aud.pause();
    }
    else if(btn.className == "fa-solid fa-play"){
        btn.className = "fa-solid fa-pause";
        aud.play();
    }
    
})
aud.addEventListener('timeupdate',()=>{
   rng.value = ((aud.currentTime)/(aud.duration))*100;
})

let clickX;
progbar.addEventListener('click', (e)=>{
    const rect = rng.getBoundingClientRect();
    clickX =  e.clientX - rect.left;
    aud.currentTime = (clickX/rect.width)*aud.duration;
    console.log( aud.currentTime);
})
prev.addEventListener('click',()=>{
    aud.pause();
    if(curr ==0){
        curr = songs.length-1;
    }
    else{
        curr--;
    }
    img.src = songs[curr].ims;
    songname.innerText = songs[curr].Name;
    aud.src = songs[curr].sou;
    aud.currentTime = 0;
    aud.play();
})
forw.addEventListener('click',()=>{
    aud.pause();
    curr = (curr+1)%(songs.length);
    img.src = songs[curr].ims;
    songname.innerText = songs[curr].Name;
    aud.src = songs[curr].sou;
    aud.currentTime = 0;
    aud.play();
})