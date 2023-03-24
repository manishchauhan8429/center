import Link from "next/link";
import { useEffect , useState } from "react";
import { IconButton,Expand } from "..";
import Style from "./style.module.css";
const sample ={
    fixed : "position-fixed mt-0 ml-0 w-full animate__animated animate__slideInDown",
    sticky : "",
    fixedWidth: "sm:w-4/5 mx-auto",
    dark: { nav: "bg-slate-900 sm:px-4",
        a: "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-slate-800 hover:text-white"
        },
    light: { nav: "bg-secondary sm:px-4",
            a: "text-black py-4 sm:py-6 px-8 sm:px-10 hover:bg-gray-50"
            },
    primary: { nav:"bg-indigo-600 sm:px-4",
               a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-indigo-500"
            },
    secondary :{ nav:"d-flex flex-row px-sm-4 py-sm-0 d-flex justify-content-around ",
                a : "text-primary font-weight-bolder py-0 py-sm-0 px-5 hover-overlay px-sm-4 d-flex justify-content-start justify-content-sm-between align-items-center text-decoration-none   my-sm-0"},
    variant :{
        one :"flex flex-col sm:flex-row sm:items-center sm:justify-start gap-12",
        two:"flex flex-col sm:flex-row sm:items-center sm:justify-end gap-12",
        three:"flex flex-col sm:flex-row sm:items-center sm:justify-between",
        four :"flex flex-col sm:flex-row sm:items-center sm:justify-around",
        five :"flex flex-col sm:flex-row sm:items-center sm:justify-evenly"
    }
}
const Navbar = (
    {children ,
    fullWidth=false,
    theme="secondary", 
    variant=null,
    sticky=null,
    fixed=null,
    toolbar=null,
    menu }) =>{
    const [stickyControl ,setStickyControl] = useState(sticky);
    const [show,setShow] = useState(false);
    useEffect(()=>
    {
        if(sticky !== null)
        {
            window.onscroll = () =>
            {
                if(window.scrollY > 300)
                    {
                         return setStickyControl(true);
                    }
                else{
                        return setStickyControl(false);
                    }
            }
        }
    },[stickyControl]);
const Menus = ({item})=>{
    const m = (
            <>
                <div  className=" ">
                <Link href={item.href} className={`${sample[theme].a} ${Style.menu_tab}`} role="presentation">{item.label}</Link>
                </div>
            </>
         );
    return m; 
}
const design = (
    <>
         <nav className={`
        ${sample[theme].nav} 
        ${fixed ? sample.fixed : null}
        ${stickyControl ? sample.fixed : null} 
        d-flex flex-row w-100 navbar navbar-expand-lg navbar-light bg-light sticky-top py-0  
        `} >
             <div className={`
                ${sample.variant[variant]} 
                ${fullWidth ? null : sample.fixedWidth}
                d-flex flex-row justify-content-between align-items-center w-100 py-0`}>
                <div className="d-flex justify-content-between   align-items-center py-0">
                    <Link href="/" className={sample[theme].a}>
                        <img src={menu.pic} width="150px" height="70px" alt="logo" />
                    </Link>
                </div>
                <IconButton onClick={()=>setShow(!show)} className={`${Style.menu_btn} d-block d-sm-none bg-light text-dark `}  size="sm">menu</IconButton>

                <div className="d-none d-sm-flex flex-column flex-sm-row  " >
                    {
                        menu.link.map((item,index)=>
                        {
                            return <Menus key={index} item={item}/> 
                         })
                    }
                </div>
                    {
                        toolbar ? 
                        <div className="d-none d-sm-flex d-flex justify-content-between align-items-center ">
                          { toolbar.map((item,index)=>
                            {
                                return <div key={index}>{item.label}</div>
                            }) 
                          }
                        </div> 
                        : null 
                    }
            </div>
        </nav>
        <Expand state={show} className= {`${Style.mobile} ${show ? "animate__animated animate__fadeInDown" : null } d-block d-sm-none  position-fixed  bg-light shadow rounded text-dark border w-100 `}   >
            <div className="d-flex flex-column flex-sm-row my-1 " >
                {
                    menu.link.map((item,index)=>
                    {
                        return <Menus key={index} item={item}/> 
                    })
                }
            </div>
                {
                    toolbar ? 
                        <div className="d-flex flex-row m-5">
                            { toolbar.map((item,index)=>
                                {
                                return <div key={index}  >{item.label}</div>
                                }) 
                            }
                        </div> 
                    : null 
                }
        </Expand>
 
    </>
    );
    return design;
}
export default Navbar;