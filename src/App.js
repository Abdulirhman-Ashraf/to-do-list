import {React,useState,useEffect} from 'react'
import  axios from 'axios'
import Form from './Components/Form'
import "./App.css"
const App = () => {
  const[data ,setData]=useState(null)
  const[cityName ,setCityName]=useState([""])
  const[loading ,setLoading]=useState(false)
  const getWeather=()=>{
    setLoading(true)
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5e950be15af49b475695991a409bc6aa`)
    .then((response)=>{
      setData(response.data.main)
      setLoading(false)
    })
    .catch((error)=>{
        console.log("error :" ,error)
    })
  }
  
  return (
    <div><Form cityName={cityName} setCityName={setCityName} getWeather={getWeather} loading={loading} data={data}/></div>
  )
}

export default App
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={5e950be15af49b475695991a409bc6aa}