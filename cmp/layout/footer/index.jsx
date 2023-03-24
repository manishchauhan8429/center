import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
const Footer = ()=>{
  return(
     <>
     <Container sx={{py:5}}>
     <Grid container spacing={3}>
       <Grid item md={4}>
        <Stack direction="column">
         <Image src="/logo.svg" width={150} height={60} alt="logo" />
         <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</Typography>
        </Stack>
       </Grid>
       <Grid item md={2} xs={12}>
         <Stack direction="column" spacing={2}>
          <Typography variant="h6" className="fw-bold">For Instructor</Typography>
            <Typography sx={{fontSize:"14px"}}>Profile</Typography>
              <Typography sx={{fontSize:"14px"}}>Login</Typography>
                <Typography sx={{fontSize:"14px"}}>Register</Typography>
                  <Typography sx={{fontSize:"14px"}}>Instructor</Typography>
                  <Typography sx={{fontSize:"14px"}}>Dashboard</Typography>
        </Stack>
       </Grid>
       <Grid item md={2} xs={12}>
       <Stack direction="column" spacing={2}>
        <Typography variant="h6" className="fw-bold">For Student</Typography>
          <Typography sx={{fontSize:"14px"}}>Profile</Typography>
            <Typography sx={{fontSize:"14px"}}>Login</Typography>
              <Typography sx={{fontSize:"14px"}}>Register</Typography>
                <Typography sx={{fontSize:"14px"}}>Instructor</Typography>
                <Typography sx={{fontSize:"14px"}}>Dashboard</Typography>
      </Stack>
       </Grid>
       <Grid item md={4} xs={12}>
         <Stack direction="column" spacing={1}>
          <Typography variant="h6" className="fw-bold">News Letter</Typography>
            <TextField
            label="enter your email address"
            type="search"
            height="20px"
            variant="filled"
            sx={{backgroundColor:'white'}}
          />
             <Stack direction="row" spacing={2}>
              <Image src="/icon-20.svg" width={30} height={30} alt="icon-20" />
                <Typography sx={{fontSize:"12px"}}>3556 Beech Street,San Francisco,<br />California, CA 94108</Typography>
             </Stack>
             <Stack direction="row" spacing={2}>
                <Image src="/icon-19.svg" width={30} height={30} alt="icon-20" />
                <Typography sx={{fontSize:"12px"}}>dreamslms@example.com</Typography>
             </Stack>
             <Stack direction="row" spacing={2}>
                <Image src="/icon-21.svg" width={30} height={30} alt="icon-20" />
                <Typography sx={{fontSize:"12px"}}>+19 123-456-7890</Typography>
             </Stack>
        </Stack>
       </Grid>
     </Grid>
     </Container>
     </>
  )
}
export default Footer;
