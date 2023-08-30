// current time
function updateClock() {

    // hours condition
    let hours = new Date().getHours();
    let hrs = document.getElementById('hrs');
    hrs.innerText = (hours = hours < 10 ? "0" + hours : hours);
    hrs.innerText = (hours = hours > 12 ? hours - 12 : hours);

    // minutes condition
    let minutes = new Date().getMinutes();
    let mins = document.getElementById('mins');
    mins.innerText = (minutes = minutes < 10 ? "0" + minutes : minutes);

    // seconds condition
    let seconds = new Date().getSeconds();
    let secs = document.getElementById('secs');
    secs.innerText = (seconds = seconds < 10 ? "0" + seconds : seconds);

    // ampm condition
    let ampm = document.getElementById("siden");
    ampm.innerText = (hours <= 11 ? 'AM' : 'PM');

    // running clock condition
    setTimeout(() => {
        updateClock()
    }, 1000);

}
// call function
updateClock()


// greeting......
const hours = new Date().getHours();
let greeting = document.getElementById('line1');

if(hours>=12 && hours<16){
    greeting.innerHTML = 'GOOD AFTERNOON!!'
}
if(hours>=16 && hours<20){
    greeting.innerHTML = 'GOOD EVENING!!'
}
if(hours>=20 && hours<22){
    greeting.innerHTML = 'GOOD NIGHT!!'
}

let wake_up = document.getElementById("wake_up");
let lunch = document.getElementById("lunch_time");
let nap = document.getElementById("nap_time");
let sleep = document.getElementById("sleep_time");

let box2 = document.getElementsByClassName('box2');

btn.addEventListener("click",function(){
  let setalarm = document.getElementById('setalarm');
  let image = document.getElementById('image');
  let hours = new Date().getHours();
  let mainpicture = document.getElementsByClassName("mainpicture");


  let button = document.getElementById('alarm');
  console.log(button,"alarm");
  
//   button.addEventListener("mouseout", function(){
//       this.innerText = "Set Alarm"
//   })



btn.addEventListener("mouseover", function(){
    // console.log("mouse hover");
    this.innerText = "Party time";
})
btn.addEventListener("mouseout", function(){
    this.innerText = "Set Alarm"
})

// routine change
document.getElementById("lb1").innerHTML = (parseInt(wake_up.value) === hours ? "GRAB SOME HEALTHY BREAKFAST!!!" : (parseInt(lunch.value) === hours ? "LET'S HAVE SOME LUNCH!!" : (parseInt(nap.value) === hours ? "STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!" : (parseInt(sleep.value) === hours ? "CLOSE YOUR EYES AND GO TO SLEEP" : "!!!SET THE TIME!!!"))))



// image change
mainpicture = (parseInt(wake_up.value) === hours ? image.src = "./Component 30 – 1.svg" : (parseInt(lunch.value) === hours ? image.src = "./lunch1.jpg" : (parseInt(nap.value) === hours ? image.src = "./evening.jpg" : (parseInt(sleep.value) === hours ? image.src = "./sleep_time.jpg" : image.src = "./sleep_time.jpg"))))

 
let timing = document.getElementsByClassName('timing');

timing[0].innerText = wake_up.options[wake_up.selectedIndex].text;
timing[1].innerText = lunch.options[lunch.selectedIndex].text;
timing[2].innerText = nap.options[nap.selectedIndex].text;
timing[3].innerText = sleep.options[sleep.selectedIndex].text;

console.log(timing[0])
console.log(timing[1])
console.log(timing[2])
console.log(timing[3])
})


