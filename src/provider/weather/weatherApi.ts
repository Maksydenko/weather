const API_KEY = "b325a710045095ee58c4b40ab240b272";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (location: string) => {
  const response = await fetch(
    `${API_URL}?q=${location}&&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return result;
};
