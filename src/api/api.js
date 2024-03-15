const apiKey = 'b484102eee1f5ae468b45e16e1ef7bc7';

const getWeather= async (city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res)=> res.json())
    .then((json)=>{
        return json;
    })
}
export default getWeather;