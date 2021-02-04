document.getElementById("searchBtn").addEventListener("click", function () {
  const serarhinput = document.getElementById("searchboxinput").value;
  // API CALL

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${serarhinput}&units=metric&appid=a8f06a734feb4b67110708eb7eb90129`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imgs = document.getElementById("image").src;
      document.getElementById(
        "image"
      ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerText = data.main.temp;
      document.getElementById("leads").innerText = data.weather[0].main;
    });
});
