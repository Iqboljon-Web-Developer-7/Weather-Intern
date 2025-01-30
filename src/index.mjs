import countries from "./helper/countries.js";
import { fills } from "./helper/data.js";
import getCountryCode from "./helper/getCountryCode.js";

const loginForm = document.getElementById("loginForm");
const app = document.getElementById("app");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const logoutButton = document.getElementById("logoutButton");
const mapLoadingOverlay = document.getElementById("mapLoadingOverlay");
const modeToggle = document.getElementById("modeToggle");
const modeToggle2 = document.getElementById("modeToggle2");
const temperatureButton = document.getElementById("temperature");
const windSpeedButton = document.getElementById("windSpeed");
const cloudCoverageButton = document.getElementById("cloudCoverage");

const tempsStatusContainer = document.getElementById("temps-status");
const cloudsStatusContainer = document.getElementById("clouds-status");
const windsStatusContainer = document.getElementById("winds-status");

let currentWeatherType;
let currenctShowLabelsStatus = false;

// Check if user is already logged in
const isLogged = localStorage.getItem("isLogged");

if (isLogged === "no" || !isLogged) {
  loginForm.style.display = "block";
  app.style.display = "none";
} else if (isLogged === "yes") {
  loginForm.style.display = "none";
  app.style.display = "block";
  initializeApp();
}

// Handle login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "havoyuli" && password === "havo123yuli") {
    loginForm.style.display = "none";
    app.style.display = "block";
    localStorage.setItem("isLogged", "yes");
    e.target.reset();
    initializeApp();
  } else {
    alert("Invalid username or password");
  }
});

// Handle logout
logoutButton.addEventListener("click", () => {
  localStorage.setItem("isLogged", "no");
  loginForm.style.display = "block";
  app.style.display = "none";

  const container = document.getElementById("container");
  if (container) {
    container.innerHTML = ""; // Clear the map
  }
  map = null; // Reset the map variable
});

let map;

function initializeApp() {
  const apiKey = "5d029d9cc6f74696ba7145539252701";

  async function fetchWeatherData(country) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`
      );
      if (response.ok) {
        return await response.json();
      } else {
        console.error(
          `Error fetching data for ${country}: ${response.statusText}`
        );
        return null;
      }
    } catch (error) {
      console.error(`Error fetching data for ${country}: ${error}`);
      return null;
    }
  }

  async function fetchAllWeatherData() {
    const tempData = JSON.parse(localStorage.getItem("tempData"));
    const timestamp = localStorage.getItem("tempDataTimestamp");

    // Refetch is required if data was created 4+ hours ago
    const isDataStale =
      !timestamp || Date.now() - parseInt(timestamp, 10) > 4 * 60 * 60 * 1000;

    mapLoadingOverlay.style.display = "flex";
    toggleButtons(true);

    let weatherData;

    if (tempData && !isDataStale) {
      weatherData = tempData;
    } else {
      const weatherPromises = countries.map((country) =>
        fetchWeatherData(country)
      );
      weatherData = await Promise.all(weatherPromises);
      localStorage.setItem("tempData", JSON.stringify(weatherData));
      localStorage.setItem("tempDataTimestamp", Date.now().toString());
    }

    mapLoadingOverlay.style.display = "none";
    toggleButtons(false);

    return weatherData.reduce((acc, data, index) => {
      if (data) {
        acc[countries[index]] = data;
      }
      return acc;
    }, {});
  }

  async function updateMap(type, showLabels = currenctShowLabelsStatus) {
    currenctShowLabelsStatus = showLabels;

    currentWeatherType = type;
    const weatherData = await fetchAllWeatherData();
    const mapData = {};
    for (const country in weatherData) {
      const countryCode = getCountryCode(country);
      if (countryCode) {
        mapData[countryCode] = {
          fillKey: getFillKey(weatherData[country], type),
          value:
            weatherData[country]?.current[type] ?? `No data for ${country}`,
        };
      }
    }

    // Remove existing map if it exists
    if (map) {
      /*global d3*/ /*eslint no-undef: "error"*/
      d3.select("#container").selectAll("*").remove();
    }

    // Create a new map with or without labels
    /*global Datamap*/ /*eslint no-undef: "error"*/
    map = new Datamap({
      element: document.getElementById("container"),
      fills,
      data: mapData,
      geographyConfig: {
        popupTemplate: function (geo, data) {
          return `<div class="hoverinfo">${geo.properties.name}: ${data.value}</div>`;
        },
        label: currenctShowLabelsStatus,
      },
    });

    if (showLabels) {
      map.labels({
        labelColor: "#38b000",
        fontSize: 8,
      });
    }
  }

  function getFillKey(weatherData, type) {
    if (type === "temp_c") {
      updateDisplayStatus(1);

      const temp = weatherData.current.temp_c;
      switch (true) {
        case temp <= -30:
          return "EXTREME_COLD";
        case temp <= -20:
          return "VERY_COLD";
        case temp <= -10:
          return "COLD";
        case temp <= 0:
          return "FREEZING_POINT";
        case temp <= 10:
          return "COOL";
        case temp <= 20:
          return "MILD";
        case temp <= 30:
          return "WARM";
        case temp <= 40:
          return "HOT";
        default:
          return "EXTREME_HEAT";
      }
    } else if (type === "wind_kph") {
      updateDisplayStatus(2);

      const wind = weatherData.current.wind_kph;
      switch (true) {
        case wind <= 10:
          return "LOW_WIND";
        case wind <= 20:
          return "MEDIUM_WIND";
        case wind <= 40:
          return "HIGH_WIND";
        case wind <= 60:
          return "VERY_HIGH_WIND";
        default:
          return "EXTREME_WIND";
      }
    } else if (type === "cloud") {
      updateDisplayStatus(3);

      const cloud = weatherData.current.cloud;
      switch (true) {
        case cloud <= 10:
          return "LOW_CLOUD";
        case cloud <= 30:
          return "MEDIUM_CLOUD";
        case cloud <= 60:
          return "HIGH_CLOUD";
        case cloud <= 90:
          return "VERY_HIGH_CLOUD";
        default:
          return "EXTREME_CLOUD";
      }
    } else {
      return "UNKNOWN_TYPE";
    }
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("isDark", "yes");
    } else {
      localStorage.setItem("isDark", "no");
    }
  }

  (() => {
    const isDark = localStorage.getItem("isDark");
    if (isDark == "yes") {
      document.body.classList.add("dark-mode");
      modeToggle.checked = true;
    }
  })();

  function toggleButtons(disable) {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.disabled = disable;
      button.classList.toggle("loading", disable);
    });
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  modeToggle.addEventListener("change", toggleDarkMode);
  temperatureButton.addEventListener("click", () => updateMap("temp_c"));
  windSpeedButton.addEventListener("click", () => updateMap("wind_kph"));
  cloudCoverageButton.addEventListener("click", () => updateMap("cloud"));

  document.body.classList.add("fadeIn");
  updateMap("temp_c");

  function toggleLabels(e) {
    const showLabels = e.target.checked;
    // Assuming `currentType` holds the current data type like 'temp_c'
    updateMap(currentWeatherType, showLabels);
  }

  // If modeToggle2 should also control labels
  modeToggle2.addEventListener("change", toggleLabels);
}

function updateDisplayStatus(number) {
  tempsStatusContainer.style.display = "none";
  windsStatusContainer.style.display = "none";
  cloudsStatusContainer.style.display = "none";

  switch (number) {
    case 1:
      tempsStatusContainer.style.display = "flex";
      break;
    case 2:
      windsStatusContainer.style.display = "flex";
      break;
    case 3:
      cloudsStatusContainer.style.display = "flex";
      break;
    default:
      console.log("Invalid number. Please pass 1, 2, or 3.");
  }
}
