document.querySelector("#clock");

clock.innerText = "00:00";

const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // clock.innerText = `${hours < 10 ? `0${hours}` : hours};`;
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
};
setInterval(getClock, 1000);
