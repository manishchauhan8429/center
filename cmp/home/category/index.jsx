import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
 
import Image from 'next/image';
import "@fontsource/poppins/700.css";
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from "react";
import "swiper/css/pagination";
import {Autoplay,Pagination} from "swiper";
import Swipe from "./swipe.json";
import { Navigation } from "swiper";
import { Catgory } from '../../../react_dream';
const Category = ()=>{
const Data = [
    {
     "id":1,
     "pic":"/pencil-icon.svg",
     "title":"Ok",
     "desc":"Online Course"
   },
   {
    "id":2,
    "pic":"/cources-icon.svg",
    "title":"0+",
    "desc":"Expert Tutors"
  },
  {
   "id":3,
   "pic":"/certificate-icon.svg",
   "title":"Ok+",
   "desc":"Ceritified Course"
 }, {
   "id":4,
   "pic":"/gratuate-icon.svg",
   "title":"Ok+",
   "desc":"Online Students"
  }
  ]
  return(
    <>
     <Box sx={{position:"relative",top:-40}}>
        <Container>
         <Grid container spacing={3}>
         {
           Data.map((item,index) =>{
             return(
               <Grid item md={3} xs={12} key={index}  >
                  <Box  sx={{
                    backgroundColor:"white",
                    borderRadius:"20px",
                    p:2,
                    transition:"0.5s",
                    "&:hover":{mt:-2,transition:"0.5s"}}}>
                    <Stack direction="row" spacing={2}>
                    <Image src={item.pic} width="80" height="80" alt={item.pic} />
                    <Box>
                     <Typography variant="h5" sx={{fontfamily:"poppins,sans serif",fontWeight:"bold"}}>{item.title}</Typography>
                      <Typography>{item.desc}</Typography>
                      </Box>
                      </Stack>
                   </Box >
               </Grid>
             )
           })
         }
         </Grid>
         </Container>
        <Container sx={{my:6}}>
          <Grid container>
              <Grid item md={8} xs={12}>
                <Typography sx={{color:"#F99792",m:1,fontSize:"20px"}}>Favourite Course</Typography>
                <Typography variant="h3" sx={{ fontfamily:"poppins,sans serif",fontWeight:"700",my:3}}>Top Category</Typography>
                <Typography sx={{m:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum <br /> gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
              </Grid>
                <Grid item md={4} xs={12}>
              <Catgory />
                </Grid>
            </Grid>
        </Container>
         <Container>
        <Grid container>
           <Grid item md={12} xs={12} >
             <Swiper  
                     modules={[Navigation,Autoplay]}
                     slidesPerView={1}
                     loop={true}
                     autoplay={{
                       delay:2000,
                       disableOnInteraction:false,
                     }}

                     spaceBetween={20}
                     pagination={{
                      clickable: true,
                       }}

                     breakpoints= {{
                768:{
                    slidesPerView: 4,
                    spaceBetweenSlides: 20
                   },
                999: {
                    slidesPerView:4,
                    spaceBetweenSlides: 10
                   }
                 }}
                     className="mySwiper"
                      >
                     {
                       Swipe.map((item,index)=>{
                         return(
                       <SwiperSlide key={index}>
                           <Card  sx={{maxWidth:350,my:{xs:0}}} className="text-center border p-3">
                             <Image
                               component="img"
                               width={120}
                               height={120}
                               src={item.pic}
                               alt="green iguana"
                              />
                           <CardContent>
                             <Typography variant="h6" color="black" sx={{fontWeight:"900",fontFamily:"poppins,sans serif"}}>
                               {item.name}
                             </Typography>
                             <Typography variant="h6" color="black" sx={{fontWeight:"900",fontFamily:"poppins,sans serif"}}>
                               {item.title}
                             </Typography>
                             <Typography variant="body1" color="black" sx={{ fontFamily:" "}}>
                               {item.desc}
                             </Typography>
                           </CardContent>
                         </Card>
                       </SwiperSlide>)
                       })
                     }
            </Swiper>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  )
}
export default Category;
