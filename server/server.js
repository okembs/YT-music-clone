const express = require('express');
const app = express()
const port = 3000

const tl = ['kilo' , 'jericho', 'tomato' , 'maggi']

app.get('/' , (req , res)=>{
    res.json(tl)
    res.send('what is your name ')
    
})

app.listen(port, ()=>{
    console.log(`it is listening on ${port}`)
})