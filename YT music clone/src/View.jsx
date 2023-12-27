import React, { useState } from 'react'
import axios from 'axios';
import { useEffect} from 'react';
import { Link , Outlet} from 'react-router-dom'
import './view.css'

function View(){
  const[info , setInfo] = useState([])

  
const options = {
  method: 'GET',
  url: 'https://youtube-music-api3.p.rapidapi.com/recommend',
  params: {gl: 'ID'},
  headers: {
    'X-RapidAPI-Key': '95c04eb013msh9860301fb87f830p16021ajsn064dcf058938',
    'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
  }
};

useEffect(()=>{
async function getinfo(){
try{
  const response = await axios.request(options)
  console.log(response.data)
  setInfo(response.data.results)
  
}catch(err){
  console.log(`there was an ${err} when passing this package , due to conection status`)
}
}
getinfo()
},[])

  return(
    <>
      <div className='view'>
        {
          info.map((inf) =>{
            return(
              <>
                <div className='view2'>
                {inf.videoId}


                <div className='view3'>
                <p key={inf.title}> {inf.title} </p>
                
                </div>
                </div>
                <Outlet/>
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default View;