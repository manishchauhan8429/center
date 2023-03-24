import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Pagination, Navigation} from "swiper";
import Image from 'next/image';
const Data = [
  {
    "id":1,
     "pic":"/lead-01.png"
  },
  {
    "id":2,
     "pic":"/lead-02.png"
  },
  {
    "id":3,
     "pic":"/lead-03.png"
  },
  {
    "id":4,
     "pic":"/lead-04.png"
  },
  {
    "id":5,
     "pic":"/lead-05.png"
  },
  {
    "id":6,
     "pic":"/lead-06.png"
  }
]
const Clints = ()=>{

  return(
    <>
    <Container sx={{py:5}}>
      <Box>
        <Typography align="center" color="#F66962" variant="h6" className="fw-bold">Trusted By</Typography>
        <Typography align="center" className="fw-bold my-3" variant="h4">500+ Leading Universities And Companies</Typography>
     </Box>
     <Grid container sx={{my:4}} >

            <Swiper  
                    modules={[Navigation,Pagination,Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay:3000,
                      disableOnInteraction:false,
                    }}
                    spaceBetween={20}
                    breakpoints= {{
               768:{
                   slidesPerView: 4,
                   spaceBetweenSlides: 20
                  },
                  998: {
                      slidesPerView:4,
                         spaceBetweenSlides: 20
                     },
               1024: {
                   slidesPerView:4,
                      spaceBetweenSlides: 20
                  }
                }}
                    className="mySwiper"
                     > {
                        Data.map((item,index)=>{
                          return(
                         <SwiperSlide key={index}>
                           <Grid item md={12}>
               <Stack justifyContent="center" alignItems="center" sx={{p:2}} >
                 <Image src={item.pic} alt={item.pic} width={125} height={30} />
              </Stack>
                </Grid>
                   </SwiperSlide>
                 )
               })
             }
                </Swiper>
     </Grid>
    </Container>
    </>
  );
}
export default Clints;
