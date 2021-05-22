let form = document.querySelector('#weatherDataForm')
const app_id='ec21147cf5f4da26a3d9077e042adb4a'
let query_city;
let query_zip;

const weatherData = async () => {
    let response;
    console.log(`zip ${query_zip}`)
    console.log(`id ${app_id}`)

    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${60637}&units=imperial&appid=${app_id}`)
    console.log(response.data)
    let max=response.data.main.temp_max;
    console.log(max)
    let min=response.data.main.temp_min;
    console.log(min)
    let forecast=response.data.weather[0]['main']
    console.log(forecast)
    let humidity=response.data.main.humidity;
    console.log(humidity)


};


form.addEventListener('submit', (event) => {
    // for(var i = table.rows.length - 1; i > 0; i--)
    // {
    //     table.deleteRow(i);
    // }
      event.preventDefault();
      query_city = document.querySelector('#city').value;
      query_zip = document.querySelector('#zip').value;
      let result=weatherData();
      console.log(result)
})


