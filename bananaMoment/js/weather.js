const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    fetch(url)
        .then((respone) => respone.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.name;
            city.innerText = data.main.temp;
        });
};
const onGeoError = () => {
    alert("Can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
