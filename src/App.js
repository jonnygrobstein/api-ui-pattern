import './App.css';
import DisneySlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Header from './components/header';
import React, { useEffect, useState } from 'react'

export default function App() {

  const url = 'https://api.disneyapi.dev/characters'
  const [disneyData, setDisneyData] = useState([])

useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setDisneyData(data.data))
    .catch(err => console.log('oops something went wrong', err))
},[]);

  console.log(disneyData)

  return(
    <div>
      <Header />
      <DisneySlider slides={disneyData} />;
    </div>
  )
}

