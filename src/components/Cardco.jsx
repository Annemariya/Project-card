import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'

const Cardco = () => {
    var [output,setOutput]=useState([])
    useEffect(()=>{
    //    URL of API of jsonplaceholders
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setOutput(response.data)
        })
        .catch(()=>{console.log(error)})   
     },[])
    
  return (
    <>
     <Grid container spacing={2}>
          {output.map((val,i)=>{
            return(
              <>
              <Grid item xs={12} md={4}>
              <Card sx={{color:"bisque" ,outlineColor:"aqua"}} >
              <CardContent>
            <Typography style={{color:"GrayText", fontFamily:"-moz-initial",fontSize:"15px",textAlign:"center"}}>
              UserId:{val.userId}
            </Typography>
            <Typography style={{color:"Green", fontFamily:"-moz-initial",fontSize:"15px",textAlign:"center"}}>
              Id:{val.id}
            </Typography><br/>
            <Typography style={{color:"chocolate", fontFamily:"cursive",fontSize:"15px",textAlign:"center"}}>
            {val.title}</Typography><br/>
            <Typography style={{color:"blueviolet", fontFamily:"cursive",fontSize:"10px",textAlign:"center"}}>
            {val.body}</Typography>
            </CardContent>
            </Card>
            </Grid>
            </>
            )
          })}
       
     
       </Grid>
    </>
  )
}

export default Cardco
