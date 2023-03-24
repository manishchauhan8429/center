import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image"
const Feadback = ()=>{
  return(
    <>
     <Box sx={{ backgroundImage:"url('/user-love.jpg')",backgroundSize:"cover", height:{xs:"280px",md:"500px"},backgroundPosition:"center"}}>
      <Container>
       <Box  sx={{py:10}}>
        <Typography color="#fff" align="center"  sx={{fontSize:{md:"30px",xs:"17px"} }}>Check out these real reviews</Typography>
        <Typography color="#fff" align="center"   className="fw-bold" sx={{ fontSize:{md:"40px",xs:"20px"} }}>Users-love-us Don't take it from us.</Typography>
       </Box>
      </Container>
      </Box>
      <Box sx={{ borderRadius:"40px", border:"10px solid #CCC ",width:{md:"750px",xs:"300px"}, height:{md:"440px",xs:"300px"},position:"relative",top:{xs:"-120px",md:"-280px"}}} className="m-auto overflow-hedden  ">
        <Box sx={{position:"absolute",top:-35,zIndex:"100",display:{xs:"none",md:"block"}}}>
          <Image src="/qute.png" width={124} height={90} alt="qute" />
        </Box>
        <Box sx={{position:"absolute", zIndex:"100",display:{xs:"block",md:"none"},top:{xs:"-18px",md:"28px"}}}>
          <Image src="/qute.png" width={50} height={40} alt="qute" />
        </Box>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack>
       </SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>

          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
       <SwiperSlide>
         <Stack
           direction="column"
           spacing={2}
            alignItems="center"
           className="rounded-5 m-auto"
           align="center"
           sx={{
                pt:{sx:"none",md:"50px"},
                px:4,
                background:"linear-gradient(to top , #FFFFFF, #59524F)",
                height:"420px",height:{xs:"275px",md:"420px"}}}>
            <Box sx={{ position:"absolute",right:"25px",top:{xs:"15px",md:"30px"},right:{xs:"18px",md:"25"}}}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
               <Image src="/qute-01.png" alit="qute0" width={40} height={30} />
              </Box>
              <Box sx={{display:{xs:"block",md:"none"}}}>
               <Image src="/qute-01.png" alit="qute0" width={25} height={20} />
              </Box>
            </Box>
             <Typography sx={{fontSize:{md:"15px"}}}>
               Lorem Ipsum is not simply random text. It has roots in a piece
               of classical Latin literature<Typography sx={{display:{xs:"none",md:"block"}}}> from 45 BC, making it over 2000. years old. Richard McClintock, a Latin professor at Hampden-Sydney
               College in Virginia,
              </Typography></Typography>
          <Box>
             <Box sx={{display:{xs:"none",md:"block"}}}>
            <Image src="/user1.jpg" alt="username" width={100} height={100} className="rounded-circle mb-3" />
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
           <Image src="/user1.jpg" alt="username" width={50} height={50} className="rounded-circle mb-3" />
           </Box>
            <Typography color="black" variant="h6" className="fw-bold">David lee</Typography>
            <Typography color="#626567">Founder of Awesomeux Technology</Typography>
         </Box>
          </Stack></SwiperSlide>
     </Swiper>
     </Box>
     <Container sx={{mt:{xs:"-80px",md:"-230px"}}}>
     <Grid container spacing={2} >
       <Grid item md={6} >
         <Box sx={{backgroundColor:"#FFDEDA",  borderRadius:"30px",pl:2,pt:2}}>
              <Grid container>
              <Grid item md={6} xs={12} align="center" sx={{px:{xs:3,md:0}}}   >
               <Typography variant="h6" className="fw-bold my-2 text-start">Become An Instructor</Typography>
               <Typography align="justify">Top instructors from around the world</Typography>
               <Typography align="justify">teach millions of students on</Typography>
               <Typography align="justify"> Mentoring.</Typography>
              </Grid>
               <Grid item md={6}>
                <Image src="/become-02.png" width={280} height={200} alt="become_01" />
               </Grid>
               </Grid>
         </Box>
       </Grid>
       <Grid item md={6}>
       <Box sx={{backgroundColor:"#FFE88F",  borderRadius:"30px",pl:2,pt:2}}>
            <Grid container>
            <Grid item md={7} xs={12} align="center" sx={{px:{xs:3,md:0}}}   >
             <Typography variant="h6" className="fw-bold my-2 text-start">Transform Access To Education</Typography>
             <Typography align="justify">Top instructors from around the world</Typography>
             <Typography align="justify">teach millions of students on</Typography>
             <Typography align="justify"> Mentoring.</Typography>
            </Grid>
             <Grid item md={5}>
              <Image src="/become-01.png" width={250} height={200} alt="become_01" />
             </Grid>
             </Grid>
       </Box>
       </Grid>
     </Grid>
     </Container>


    </>
  )
}
export default Feadback;
