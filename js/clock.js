const clock = document.querySelector("#clock");

function getClock() {
    const getTime = new Date();
    const hours = String(getTime.getHours()).padStart(2, "0");
    const minutes = String(getTime.getMinutes()).padStart(2, "0");
   

    clock.innerHTML = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);