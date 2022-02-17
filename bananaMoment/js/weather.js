const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    fetch(url)
        .then((respone) => respone.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            temp.innerText = `${data.main.temp}  C`;
        });
};
const onGeoError = () => {
    alert("Can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
