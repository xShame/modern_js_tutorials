// update as of 10/18/2022
class Forecast {
  constructor() {
    this.key = "6NUWH07aCbX9JjyaG2gBzYS9DDu8NLll";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getCondition(cityDets.Key);
    return { cityDets, weather };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async getCondition(cityKey) {
    const query = `${cityKey}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}

// before the updates on 10/18/2022
// const key = "6NUWH07aCbX9JjyaG2gBzYS9DDu8NLll";

// Condition of the City Information
// const getCondition = async (cityKey) => {
//   //   console.log(cityKey);
//   const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
//   const query = `?apikey=${key}`;
//   //   console.log(base);
//   const response = await fetch(base + query);
//   //   console.log(response);
//   const data = await response.json();

//   //   console.log(data);
//   return data[0];
// };

// City Information
// const getCity = async (city) => {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${city}`;

//   const response = await fetch(base + query);
//   //   if (response.status !== 200) {
//   //     throw new Error("API is not valid....");
//   //   }
//   const data = await response.json();
//   return data[0];
//   //   return data;
// };

// getCity("Quezon City")
//   .then((data) => {
//     // console.log(getCondition(data.Key));
//     // console.log(data);
//     return getCondition(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
// });
