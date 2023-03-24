import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from 'next/image';
import "@fontsource/poppins/900.css";
import {useSpring,animated} from "react-spring";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import StarIcon from '@mui/icons-material/Star';
import Style from "./Style.module.css"; 
import { useState, useEffect } from "react";
const Hero = ()=>{
const Laal = red[500];
const [value,setValue] = useState(null);
const [seconds, setSeconds] = useState(0);
let interval = "";
useEffect(() => {
interval = setInterval(() => {
   setSeconds(seconds=>seconds + 1);
  }, 1000);
 return () => clearInterval(interval);
 }, [seconds]);
const btn = ()=>{
 return (
    clearInterval(interval)
    )
 }
 const {number} = useSpring({
  loop:false,
  delay:2000,
  from:{number:0},
  number:2925,
  config:{
    duration:5000
  }
});
  return(
    <>
    <Box sx={{backgroundImage:"url(/banner.png)"}} >
       <Container sx={{py:15}}>
         <Stack direction="column" onScroll={btn}>
           <Grid container >

             <Grid item md={7}>
             <Stack direction="column" spacing={3}>
               <Typography variant="subtitle1">The Leader in Online Learning</Typography>
               <Box>
                  <Typography variant="h2" sx={{fontFamily: "poppins",fontWeight:"900"}}>Engaging &</Typography>
                  <Typography variant="h2" sx={{fontFamily: "poppins",fontWeight:"900"}}>Accessible Online</Typography>
                  <Typography variant="h2" sx={{fontFamily: "poppins",fontWeight:"900"}}>Courses For All</Typography>
               </Box>
               <Typography variant="subtitle1">Own your future learning new skills onlin</Typography>
               <Stack direction="row" alignItems="center" className="border rounded-5 bg-light"    >
                <Box className="input-group m-2 w-50"  >
                 <input type="search" className={`form-control ${Style.s_icon}`} placeholder="&#xf002; username" style={{border: "none", backgroundColor:"#F9F8FA"}} / >
                </Box>
                 <select className="p-2 w-sm-25 w-75 rounded-5" style={{backgroundColor:"#FFDEDA",outline:"none",border:"none"}} >
                      <option   value="0">Category</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                 </select>
                <IconButton  aria-label="search" sx={{color:"white",ml:3,backgroundColor:"#FC7F50",marginRight:"10px  "}}>
                 <ArrowForwardRoundedIcon />
                </IconButton>
               </Stack>
               <Typography variant="caption" sx={{fontSize:"20px",fontWeight:"bold"}}>Trusted by over 15K Users<br />worldwide since 2022</Typography>
                <Stack direction="row" className="d-flex align-items-center">
                  <animated.h1 className={`${Style.txt}`} >{number.to(counter=>Math.floor(counter ))}</animated.h1>
                  <Typography  className={`${Style.txt}`}> + 4.4</Typography>
                  <StarIcon sx={{color:"#FFB54A",m:1}} />
                  <StarIcon sx={{color:"#FFB54A",m:1}} />
                  <StarIcon sx={{color:"#FFB54A",m:1}}/>
                  <StarIcon sx={{color:"#FFB54A",m:1}}/>
                </Stack>
             </Stack>
             </Grid>
             <Grid item md={5} display={{xs:"none",md:"block"}} className="text-center">
              <Image src="/object.png" width={500} height={500} alt="object"/>
             </Grid>
             <Grid item  xs={12} display={{xs:"block",md:"none"}}  className="text-center mt-4">
              <Image src="/object.png" width={300} height={300} alt="object"/>
             </Grid>
           </Grid>
         </Stack>
       </Container>
    </Box>

    </>
  )
}
export default Hero;
