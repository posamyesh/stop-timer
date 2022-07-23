
console.log("hello world");
var count = 0;
var bool = true;
var minutes = 0;
var hours = 0;
var days = 0;



function maintimer(){
    
        count++;
        document.getElementById("seconds").innerText= count;
        if(count==60){
            minutes++;
            document.getElementById("min").innerText = minutes;
            clearInterval(intervalID);
            count=0;
            timer();
        }
        if(minutes==60){
            hours++;
            document.getElementById("hours").innerText= hours;
            clearInterval(intervalID);
            minutes=0;
            document.getElementById("min").innerText = minutes;
            timer();
        }
        if(hours==24){
            days++;
            document.getElementById("days").innerText = days;
            clearInterval(intervalID);
            hours=0;
            document.getElementById("hours").innerText= hours;
            minutes=0;
            document.getElementById("min").innerText = minutes;
            timer();



        }
}
function timer(){
   intervalID = setInterval(maintimer,1000);
}
function stop(){
    clearInterval(intervalID);
}
function reset(){
    count = 0;
    minutes=0;
    hours=0;
    days=0;
    document.getElementById("seconds").innerText= count;
    document.getElementById("min").innerText = minutes;
    document.getElementById("hours").innerText= hours;
    document.getElementById("days").innerText = days;
    clearInterval(intervalID);
}
