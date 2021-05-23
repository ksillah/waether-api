let form = document.querySelector('#weatherDataForm')
const app_id='ec21147cf5f4da26a3d9077e042adb4a'
let query_city;
let query_zip;


const weatherData = async () => {
    let response;
    console.log(`zip ${query_zip}`)
    console.log(`id ${app_id}`)

    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${query_zip}&units=imperial&appid=${app_id}`)
    console.log(response.data)
    document.getElementById('cityName').innerHTML=''
    document.getElementById('cityName').innerHTML=query_city
    let max=response.data.main.temp_max + '\u00B0 F';
    
    document.getElementById('high').innerHTML=''
    document.getElementById('high').append(max)
    let min=response.data.main.temp_min + '\u00B0 F';
    
    document.getElementById('low').innerHTML=''
    document.getElementById('low').append(min)
    let forecast=response.data.weather[0]['main']
   
    document.getElementById('forecast').innerHTML=''
    document.getElementById('forecast').append(forecast)
    let humidity=response.data.main.humidity + '%';
    
    document.getElementById('humidity').innerHTML=''
    document.getElementById('humidity').append(humidity)


};

const capCity = (cityString) => {
    let parts=cityString.split(' ')
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1).toLowerCase();
        console.log(parts[i])
    }
    return parts.join(' ')
}


form.addEventListener('submit', (event) => {
      event.preventDefault();
      query_city = document.querySelector('#city').value;
      query_city=capCity(query_city);
      console.log(query_city)
      query_zip = document.querySelector('#zip').value;
      let result=weatherData();
      console.log(result)
})
