import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "@fontsource/poppins/500.css";
import GroupIcon from '@mui/icons-material/Group';
import Data from "./trand";
import Marquee from "react-fast-marquee";
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Catgory } from "../../../react_dream";
const Trand = ()=>{
const options = {
    speed: 70,
    pauseOnHover: true,
    gradiant: true,
    gradientWidth: 0
}
const allCard = [
  {
    "id":1,
    "pic":"/user7.jpg",
    "name":"David Lee",
    "expert":"Web Developers"
  },
  {
  "id":2,
  "pic":"/user8.jpg",
  "name":"Daziy Millar",
  "expert":"PHP Expert"
},
{
"id":3,
"pic":"/user9.jpg",
"name":"Partiza Monisa",
"expert":"Web Developers"
},
{
"id":4,
"pic":"/user10.jpg",
"name":"Skyler Whites",
"expert":"UI Desiger"
},
{
  "id":5,
  "pic":"/user7.jpg",
  "name":"David Lee",
  "expert":"Web Developers"
},
{
"id":6,
"pic":"/user8.jpg",
"name":"Daziy Millar",
"expert":"PHP Expert"
},
{
"id":7,
"pic":"/user9.jpg",
"name":"Partiza Monisa",
"expert":"Web Developers"
},
{
"id":8,
"pic":"/user10.jpg",
"name":"Skyler Whites",
"expert":"UI Desiger"
}
]
  return(
  <>
    <Stack direction="row"sx={{backgroundImage:"url(/banner.png)"}}>
      <Container sx={{my:0}} >
      <Grid container sx={{my:10}}  >
        <Grid item md={7} xs={12}   >
            <Typography sx={{color:"#F77B75",fontWeight:"bold",fontSize:"20px"}}>What's New</Typography>
            <Typography variant="h4" sx={{fontWeight:"700",fontFamily:"poppins",my:2}}>TRENDING COURSES</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
        </Grid>
        <Grid item md={5}>
         <Catgory />
        </Grid>
      </Grid>
      <Grid container>
         <Marquee {...options}>
            {
          Data.map((item,index) =>{
           return(
            <Grid item md={3}  sx={{mx:2.5}}key={index} >
              <Card className=" p-3" sx={{ "&:hover": { backgroundColor: '#413655',color:"white",transition:"1s"},width:"350px" }}>
               <Box sx={{position:"realtive",overflow:"hidden",borderRadius:"10px",width:"320px"}}>
                  <CardMedia
                      component="img"
                      alt="green iguana"
                      height={250}
                      image={item.course}
                      sx={{transition:"transform .5s","&:hover":{transform:'scale(1.1)'}}}
                  />
              </Box>
              <Stack direction="row" justifyContent="center"alignItems="center" sx={{position:"relative",top:"-50px",left:"160px",width:"150px",height:"40px",zIndex:5,borderRadius:"15px",backgroundColor:"white",p:.5}}>
                <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#F9938E"}}>{item.price}</Typography  ><strike style={{fontWeight:"bold",marginLeft:"10px",color:"#CCCCCC"}}>$99.00</strike>
              </Stack>
              <Stack direction='row' spacing={1} sx={{mt:-2}} alignItems="center" justifyContent="space-between">
              <Stack direction="row" spacing={1}>
                   <Image src={item.pic} alt={item.pic} width={70} height={70} className="rounded-circle" />
                   <Box>
                     <Typography  variant="h6" component="div">{item.owner}</Typography>
                     <Typography  variant="caption" component="div">Instructor</Typography>
                   </Box>
                </Stack>
                   <IconButton color="error" aria-label="upload picture" component="label">
                    <FavoriteBorderIcon />
                   </IconButton>
                </Stack>
                    <Typography sx={{fontWeight:"bold",my:2}}>{item.decs}</Typography>
                  <Stack direction="row" justifyContent="space-between">
                     <Typography><IconButton color="error"><MenuBookIcon /></IconButton>{item.lesson}</Typography>
                     <Typography><IconButton color="error"><AccessTimeIcon /></IconButton>{item.duration}</Typography>
                  </Stack>
                      <Divider sx={{my:1,background: 'black' }}/>
                      <Stack dirction="column" sx={{my:0}}>
                        <Stack direction="row" alignItems="center"  >
                           <StarIcon sx={{fontSize:"19px",color:"orange"}}/>
                           <StarIcon sx={{fontSize:"19px",color:"orange"}}/>
                           <StarIcon sx={{fontSize:"19px",color:"orange"}}/>
                           <StarIcon sx={{fontSize:"19px",color:"#ccc"}}/>
                           <Typography sx={{fontWeight:"bold",mx:1}}>{item.plusponit}</Typography>
                        </Stack>
                        <CardActions>
                          <Button className="rounded-5" sx={{
                            color:"#917CF6",
                            border:"2px solid #917CF6",
                            width:"130px",height:"40px",
                            fontSize:"13px",
                            "&:hover": {
                                        backgroundColor: '#917CF6',
                                        color:'white',
                                        transition:'1s'
                              }}}>BUY NOW
                          </Button>
                        </CardActions>
                      </Stack>
            </Card>
            </Grid>
          );
          })
         }
        </Marquee>
      </Grid>
      <Grid container sx={{my:{xs:5,my:9}}}>
          <Grid item md={12}>
            <Typography variant="h4" align="center" sx={{fontFamily:"poppins,sans serif",fontWeight:"500",m:2}}>Featured Instructor</Typography>
            <Typography align="center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum <br /> gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
          </Grid>
      </Grid>
      <Grid container>
        <Swiper 
                modules={[Navigation,Pagination]}
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
                className="mySwiper"
                 >
        <Grid item md={12} sx={12}>
          {
           allCard.map((item,index)=>{
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
                    <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                    <Typography variant="subtitlle1" >{item.expert}</Typography>
                    <Typography sx={{mb:4,fontSize:"15px"}} ><GroupIcon color="error" sx={{mr:2}} /> 50 Students</Typography>
                </Card>
             </SwiperSlide>
            );
          })
        }
        </Grid>
       </Swiper>
      </Grid>
      </Container>
    </Stack>
  </>
  );
}
export default Trand;
