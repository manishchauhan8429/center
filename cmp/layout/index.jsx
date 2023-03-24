import Navbar from "./navbar";
import Footer from './footer';
import Box from "@mui/material/Box";
const Layout = ({children})=>{
  return(
    <>
     <Navbar />
      {children}
     <Footer />
    </>
  );
}
export default Layout;
