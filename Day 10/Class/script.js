const text = document.querySelector("#text");
const form = document.querySelector("form");
const output = document.querySelector("#output");
const spinner = document.querySelector("#spinner");
const cloud = document.querySelector("#cloud");

const API_KEY = "<YOUR_API_KEY_HERE>";

form.onsubmit = (e) => {
  e.preventDefault();

  // Remove code below
  if (API_KEY.startsWith('<')) {
    text.value = "Please Provide an API_KEY";
    return;
  }
  // Remove code above

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${API_KEY}`;

  spinner.classList.remove('d-none');
  cloud.classList.add('d-none');

  fetch(url).then((res) => res.json()).then((data) => {
    if (!data.main) return;

    output.parentElement.parentElement.classList.remove('d-none')

    cloud.classList.remove('d-none');
    spinner.classList.add('d-none');

    output.children[0].innerHTML = data.main.feels_like + " ℉";
    output.children[1].innerHTML = data.main.humidity + "";
    output.children[2].innerHTML = data.main.pressure + " bar";
    output.children[3].innerHTML = data.main.temp + " ℉";
  })
}
