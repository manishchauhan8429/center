import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import "@fontsource/poppins/700.css";
const Skills = ()=>{
const Data = [
  {
    "id":1,
    "pic":"/icon-1.svg",
    "desc":"Stay motivated with engaging instructors"
  },
  {
    "id":2,
    "pic":"/icon-2.svg",
    "desc":"Keep up with in the latest in cloud"
  },
  {
    "id":3,
    "pic":"/icon-3.svg",
    "desc":"Get certified with 100+ certification courses"
  },
  {
    "id":4,
    "pic":"/icon-4.svg",
    "desc":"Build skills your way, from labs to courses"
  }

]
  return(
  <>
    <Container>
       <Grid container sx={{mt:10}}  >
         <Grid item md={7} xs={12}>
           <Typography sx={{color:"#F77B75",fontWeight:"bold",fontSize:"20px"}}>What's New</Typography>
           <Typography variant="h3" sx={{ fontfamily:"poppins,sans serif",fontWeight:"700",my:3}}>Master the skills to drive your career</Typography>
           <Typography >Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</Typography>
          <Grid container spacing={4} sx={{my:1}}>
           {
             Data.map((item,index)=>{
               return(
                 <Grid item md={6} key={index} sx={{transition:"0.5s","&:hover":{mt:-1,transition:"0.5s"}}}>
                  <Card className="rounded-5 py-4 border" sx={{width:"340px"}}>
                   <Stack direction="row" justifyContent="space-around" alignItems="center" spacing="0"sx={{p:1}}>
                    <Image src={item.pic} width={50} height={50} alt={item.pic}  />
                    <Typography sx={{fontSize:"14px"}}>{item.desc}</Typography>
                   </Stack>
                 </Card>
                 </Grid>
               );
             })
           }
          </Grid>
          </Grid>
       <Grid item md={5} display={{xs:"none",md:"block"}}sx={{pt:20}}>
        <Image src="/join.png" width={500} height={500} alt="join family" />
         </Grid>
         </Grid>

    </Container>
  </>
  )
}
export default Skills;
