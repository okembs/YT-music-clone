import React from 'react';
import axios from 'axios';
import './body.css';
import { useEffect , useState } from 'react';
import {Spin} from 'antd'
import Lang from './lang.json'



function Body(){
  const[info , setInfo] = useState([]) // for the array of the translation stuff
  const[inputText , setInputText] = useState('') // for the inputText and textarea 
  const[languageList , setLanguageList] = useState('wetin dey shele')
  const[oke , setOke] = useState('');
  const[backendData , setBackendData] = useState([])
 

  
  


  // for the api
  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', 'en');
  encodedParams.set('target_language', languageList);  // r the language you want to convert it to 
  encodedParams.set('text', inputText); // for the text 
  
  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '95c04eb013msh9860301fb87f830p16021ajsn064dcf058938',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams,
  };



  // for the button onclick 

  const Translate =  async() =>{

    try{
 const response = await axios.request(options);
 console.log(response.data)
 setInfo(response.data)
  const over = info.data.translatedText;  // for the translated text  
  setOke(over) // the function at was called for the translation text 
  console.log(over) // for the function too 
 


    }catch(err){
   console.log(`there was an ${err} when passing this package `)
   
    }

 
  }

  // writing code for connecting the api and adding the backend
  // linking the frontedn and backedn together using the useEffect
  useEffect(()=>{
   const fetchdata =async()=>{
    try{
      const response = await axios.get('/');
      console.log(response.data)
      setBackendData(response.data)

    }catch(err){
      console.log(err)
    }
 
  }
   fetchdata()

  
    console.log(backendData)
  },[])

  


  return(

    <>
    <div className='div1'>
  
 <textarea onChange={e => setInputText(e.target.value)} placeholder='write down the text' /> <br/>

 
 <select value={languageList} onChange={e => setLanguageList(e.target.value)} >
 {
  Object.keys(Lang).map((item , index)=>{
    const fav = Lang[item];
    return(
      <>
        <option key={index + 118} value={item}> {fav.name} </option>
      </>
    )
  })
 }
 </select>
   <button onClick={Translate} disabled={inputText === ""}  >  translate </button>
 
 <div className='div3'>
<p>    {oke ? wait : oke}  </p>
</div>
</div>
<h1> {backendData} </h1>
    </>
  )
 
 
}
export default Body;