import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Image from 'next/image';
import GroupIcon from '@mui/icons-material/Group';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useEffect,useState} from "react";
import Style from "./style.module.css";
import Data from './blog';
const Blog = ()=>{
let interval = "";
const [seconds, setSeconds] = useState(0);
  useEffect(() => {
  interval = setInterval(() => {
     setSeconds(seconds=>seconds + 1);
   }, 1000);
   return () => clearInterval(interval);
   }, [seconds]);
const Service = [
  {
    "id":1,
    "pic":"/icon-09.svg"
  },
  {
    "id":2,
    "pic":"/icon-10.svg"
  },
  {
    "id":3,
    "pic":"/icon-12.svg"
  },
  {
    "id":4,
    "pic":"/icon-13.svg"
  },
  {
    "id":5,
    "pic":"/icon-14.svg"
  },
  {
    "id":6,
    "pic":"/icon-15.svg"
  },
  {
    "id":7,
    "pic":"/icon-16.svg"
  },
  {
    "id":8,
    "pic":"/icon-17.svg"
  },
  {
    "id":9,
    "pic":"/icon-18.svg"
  },
  {
    "id":10,
    "pic":"/icon-20.svg"
  }
]
  return(
  <Box sx={{backgroundImage:"url('/banner.png')",mt:10,pb:4}}>
   <Container>
     <Grid container>
       <Grid item md={12} sx={{my:6}}>
         <Typography variant="h4" className="fw-bold my-3" align="center" >Latest Blogs</Typography>
         <Typography align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum</Typography>
         <Typography align="center">gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
       </Grid>
     </Grid>
     <Grid container>
       <Swiper
               modules={[ Pagination]}
               slidesPerView={1}
               spaceBetween={20}
               pagination={{
                clickable: true,
                 }}
        
              
               breakpoints= {{
          768:{
              slidesPerView: 3,
              spaceBetweenSlides: 20
             },
          999: {
              slidesPerView:4,
              spaceBetweenSlides: 10
             }
           }}
            >
       <Grid item md={12} sx={12}>
         {
          Data.map((item,index)=>{
           return(
            <SwiperSlide key={index}>
               <Card className="text-center" sx={{borderRadius:"10px",my:2}}>
                  <Box sx={{position:"realtive",overflow:"hidden",borderRadius:"10px 0px 0px  0px"}}>
                  <CardMedia
                   component="img"
                   height="300"
                   image={item.pic}
                   alt={item.pic}
                       sx={{transition:"transform .5s","&:hover":{transform:'scale(1.1)'}}}
                   />
                   </Box>
                   <Typography gutterBottom variant="h6" className="fw-bold" sx={{fontSize:"16px",mx:"10px",mt:2}}component="div">{item.title}</Typography>
                   <Typography  sx={{fontSize:"17px",my:1}}  >{item.department}</Typography>
                   <Typography sx={{mb:4,fontSize:"15px"}} ><CalendarMonthIcon color="error" sx={{mr:2}} />{item.duration}</Typography>
               </Card>
            </SwiperSlide>
           );
         })
       }
       </Grid>
      </Swiper>
     </Grid>
     <Grid container  spacing={1} sx={{background:"linear-gradient(to right,#B6CDF9,#E5F5FE)",my:5,borderRadius:"25px"}} className="border p-4 ">
     <Grid item md={4} >
     <Stack direction="row" spacing={2}>
      <Stack justifyContent="center" alignItems="center" width={120} height={100}  sx={{borderRadius:"18px",backgroundColor:"white"}}>
      <Image src="/icon-07.svg" width={70} height={70} alt="icon" />
      </Stack>
      <Box>
      <Typography className={`fw-bold ${Style.txt}`} >
           {seconds}{seconds.toLocaleString('en-US') == 5 ?  clearInterval(interval) : null} </Typography>
          <Typography   variant="h6" className={`fw-bold ${Style.txt}`}>STUDENTS<br className={` ${Style.brk}`}/> ENROLLED</Typography>
      </Box>
      </Stack>
     </Grid>  
     <Grid item md={4}   >
     <Stack direction="row" spacing={2}>
      <Stack justifyContent="center" alignItems="center" width={120} height={100} sx={{borderRadius:"18px",backgroundColor:"white"}}>
       <Image src="/icon-08.svg" width={70} height={70} alt="icon" />
      </Stack>
      <Box  >
      <Typography  className={`fw-bold ${Style.txt}`}>0 </Typography>
      <Typography   variant="h6" className={`fw-bold ${Style.txt}`} >TOTAL <br className={` ${Style.brk}`}/> COURSES</Typography>
      </Box>
      </Stack>
     </Grid>
     <Grid item md={4}>
     <Stack direction="row" spacing={2}>
      <Stack justifyContent="center" alignItems="center" width={120} height={100} sx={{borderRadius:"18px",backgroundColor:"white"}}>
       <Image src="/icon-09.svg" width={70} height={70} alt="icon" />
      </Stack>
      <Box>
      <Typography  className={`fw-bold ${Style.txt}`}>0 </Typography>
      <Typography   variant="h6" className={`fw-bold ${Style.txt}`}>COUNTRIES</Typography>
      </Box>
      </Stack>
     </Grid>
     </Grid>
     <Stack alignItems="center" justifyContent="center">
       <Typography variant="h4" className="fw-bold">Unlimited access to 360+ courses</Typography>
       <Typography variant="h5" className="fw-bold">and 1,600+ hands-on labs</Typography>
     </Stack>
     <Grid container justifyContent="center" spacing={2} sx={{my:5}}   className="my-4">
     {
       Service.map((item,index)=>{
          return(
             <Grid item key={index} md={1}   >
               <Stack justifyContent="center" alignItems="center" width={60} height={60} transition="1s" sx={{transition:"1s",backgroundColor:"#fff",border:"1px solid #ccc",borderRadius:"10px","&:hover":{mt:-2,transition:"1s"}}}>
                <Image src={item.pic} width={40} height={40} alt={item.pic} />
               </Stack>
             </Grid>
          )
       })
     }
     </Grid>
   </Container>
  </Box>
  );
}
export default Blog;
