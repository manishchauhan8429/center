import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import Data from "./course";
import { Catgory } from "../../../react_dream";
const Course = ()=>{
  return(
    <>
    <Stack direction="column"  sx={{backgroundImage:"url(/banner.png)",mt:2,py:6}}>
    <Container>
     <Grid container>
       <Grid item md={7}>
          <Typography color="#F6756E" variant="h6" sx={{fontfamily:"poppins , sans serif" ,fontweight:"900"}}>What’s New</Typography>
          <Typography variant="h3" sx={{ fontfamily:"poppins,sans serif",fontWeight:"700",my:3}}>Featured Courses</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum <br /> gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
       </Grid>
     <Grid item md={5} xs={12}>
     <Stack direction="row" justifyContent="end" >
       
      </Stack>
     </Grid>
    </Grid>
    </Container>
    <Container sx={{my:9}} >
      <Grid container spacing={4}>
       {
        Data.map((item,index) =>{
         return(
          <Grid item md={4} xs={12} key={index} >
            <Card className=" p-3" sx={{ transition:"1s","&:hover": { backgroundColor: '#413655',color:"white",transition:"1s"} }}>
             <Box sx={{position:"realtive",overflow:"hidden",borderRadius:"10px"}}>
                <CardMedia
                    component="img"
                    alt={item.course}
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
                      <Stack dirction="column" sx={{my:2}}>
                        <Stack direction="row" alignItems="center"  >
                           <StarIcon sx={{fontSize:"19px",color:"orange"}}/>
                           <StarIcon sx={{fontSize:"19px",color:"orange"}}/>
                           <StarIcon sx={{fontSize:"19px",color:"orange"}}/>
                           <StarIcon sx={{fontSize:"19px",color:"#ccc"}}/>
                           <Typography sx={{fontWeight:"bold",mx:1}}>{item.plusponit}</Typography>
                        </Stack>
                        <CardActions>
                   <Catgory />
                         </CardActions>
                      </Stack>
            </Card>
          </Grid>
        );
        })
       }
      </Grid>
    </Container>
    </Stack>
    </>
  );
}
export default Course;
