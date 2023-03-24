import {Nbr,Button} from "../../../react_dream";
import Style from "./style.module.css";
const Navbar = ()=>{ 
  const menus = {
    brand : "Manishgf chauha",
    pic : "/logo.svg",
    link: [
            {
              label:"Home",
              href:"/"
            },
            {
              label:"INSTRUCTOR",
              href:"/"
            },
            {
              label:"STUDENT",
              href:"/"
            },
            {
              label:"PAGE",
              href:"/"
            },
            {
              label:"BLOG",
              href:"/"
            }
          ]
  }
  const toolbars = [
      {
        label : <Button size="sm" className={`${Style.btn}  `}>SIGN IN</Button>,
        href : "/"
      },
      {
        label : <Button size="sm" className={`${Style.btn2}`}>SIGN UP</Button>,
        href : "/"
      }
  ]
  const design = (  
    <>
        <Nbr 
        variant="three"
        menu={menus}
        toolbar={toolbars}
        sticky={true}
        />
    </>
    );
  return design;
}
export default Navbar;
