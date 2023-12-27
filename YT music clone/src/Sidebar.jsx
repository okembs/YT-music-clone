import React, { useState } from 'react';
import { FiUserPlus } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import './Sidebar.css'

const word = 'sign in with personnalised info '

const alp = [
    {
        id: 1 ,
        name: 'favourites',
        logo: <FiHeart/>
    },
    {
        id:2,
        name: 'explore',
        logo: <FiHeadphones/>
    },
    {
     id:4 ,
     name: 'user',
     logo: <FiUserPlus/>
    }
]

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-tie'>

{
    alp.map(al =>{
        return <p> {al.name} {al.logo}  </p>
    })
}


<div className='data'>
<button> sign in </button>
<p> {word} </p>
        </div>
        </div>

        
    </div>
  )
}

export default Sidebar