import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "@fontsource/poppins/700.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { Catgory } from "../../../react_dream";
 
const Balaji = ()=>{
  return(
    <>
    <Box sx={{backgroundImage:"url('/banner.png')",py:5}}>
      <Container>
       <Grid container    >
          <Grid item md={6} display={{xs:"none",md:"block"}} >
           <Image src="/share.png" width={570} height={500} alt="share" />
          </Grid>
          <Grid item xs={12} display={{xs:"block",md:"none"}}>
           <Image src="/share.png" width={330} height={300} alt="share" />
          </Grid>
        <Grid item md={6} sx={{pt:2 }} >
         <Typography variant="h4" sx={{ fontfamily:"poppins,sans serif",fontWeight:"700",py:3}}>
          Want to share your knowledge? Join us a Balaji</Typography>
          <Typography>High-definition video is video of higher resolution
          and quality than standard-definition. While there is no standardized
          meaning for high-definition, generally any video.</Typography>
          <Stack direction="column" spacing={1} sx={{my:2}}>
             <Typography variant="h6" className="fw-bold"><CheckCircleIcon color="error" /> Best Courses</Typography>
              <Typography variant="h6" className="fw-bold"><CheckCircleIcon color="error" /> Top rated Instructors</Typography>
              <Catgory />
         </Stack>
        </Grid>
       </Grid>
      </Container>
    </Box>
    </>
  );
}
export default Balaji;
