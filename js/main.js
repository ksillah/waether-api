let form = document.querySelector('#weatherDataForm')
const app_id='4ec21147cf5f4da26a3d9077e042adb4a'
let query_city;
let query_zip;

const weatherData = async () => {
    let response;
    console.log(`zip ${query_zip}`)
    console.log(`id ${app_id}`)

    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=60637&appid=ec21147cf5f4da26a3d9077e042adb4a`)
    
    return response;
};


form.addEventListener('submit', (event) => {
    // for(var i = table.rows.length - 1; i > 0; i--)
    // {
    //     table.deleteRow(i);
    // }
      event.preventDefault();
      query_city = document.querySelector('#city').value;
      query_zip = document.querySelector('#zip').value;
      let data=weatherData();
      console.log(data)
})


