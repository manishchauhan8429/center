import { Stack,Button } from "@mui/material";
const Catgory = () =>{
    const design = (
        <>
         <Stack direction="row" justifyContent="end" >
                    <Button className="rounded-5" sx={{
                      color:"#9C27B7",
                      border:"2px solid #9C27B7",
                      width:"150px",height:"50px",
                      fontSize:"16px",
                      transition:"1s",
                      "&:hover": {
                                  backgroundColor: '#9C27B7',
                                  color:'white',
                                  transition:'1s'
                                  }}}>All Category
                     </Button>
                   </Stack>
        </>
    );
    return design;
}
export default Catgory;