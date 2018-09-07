
function horloge(){
    const fullDate= new Date();
    let heures = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let secs = fullDate.getSeconds();
if (heures < 10){
    heures = "0" + heures;
}
if (minutes < 10){
    minutes = "0" + minutes;
}
if (secs < 10){
   secs = "0" + secs;
}
    document.getElementById('hour').innerHTML = heures;
    document.getElementById("minute").innerHTML =":" + minutes;
    document.getElementById("seconde").innerHTML = ":" + secs; 

   
}

setInterval(horloge, 1000);
