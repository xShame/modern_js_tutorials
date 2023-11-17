const detail = document.querySelector(".detail");
const form = document.querySelector(".change-location");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const card = document.querySelector(".card");
const forecast = new Forecast();

const updateUI = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;
  console.log(data);
  // destructure properties
  const { cityDets, weather } = data;

  // update details template
  detail.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${Math.round(weather.Temperature.Metric.Value)}</span>
        <span>&deg;C</span>
    </div>
  `;

  // remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  // update the night/day & icon image
  const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  // ternary operator
  let timeSrc = weather.IsDayTime ? "./img/day.svg" : "./img/night.svg";
  // let timeSrc = null;
  // if (weather.IsDayTime) {
  //   timeSrc = "./img/day.svg";
  // } else {
  //   timeSrc = "./img/night.svg";
  // }
  time.setAttribute("src", timeSrc);
  // if (weather.IsDayTime) {
  //   time.setAttribute("src", "./img/daytime.jpg");
  // } else {
  //   time.setAttribute("src", "./img/nightime.jpg");
  // }
};

// update as of 10/18/2022
// const updateCity = async (city) => {
//   //   console.log(city);
//   const cityDets = await getCity(city);
//   const weather = await getCondition(cityDets.Key);

//   return { cityDets, weather };
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   get city value
  const city = form.city.value.toLowerCase().trim();
  form.reset();
  // update as of 10/18/2022
  forecast
    .updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));

  // set localstorage
  localStorage.setItem("city", city);

  // before update of 10/18/2022
  // updateCity(city)
  //   // .then((data) => console.log(data))
  //   .then((data) => {
  //     updateUI(data);
  //     // console.log(data);
  //     // detail.children[0].textContent = city;
  //     // detail.children[1].textContent = data.weather.WeatherText;
  //     // detail.children[2].children[1].textContent = `${Math.round(
  //     //   data.weather.Temperature.Metric.Value
  //     // )}`;
  //     // if (data.weather.IsDayTime) {
  //     //   time.setAttribute("src", "./img/daytime.jpg");
  //     // } else {
  //     //   time.setAttribute("src", "./img/nightime.jpg");
  //     // }
  //   })
  //   .catch((err) => console.log(err));

  // // set localstorage
  // localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// localStorage.removeItem("city");
