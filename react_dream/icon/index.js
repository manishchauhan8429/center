const Icon  = ({children, outline=false, className=null})=>{
    const design = (
        <>
         <span
          className={
            outline ? 
            `${className} matrial-icons-outlined` : 
            `${className} material-icons`
            }>{children}</span>
        </>
    );
    return design;
 }
 export default Icon;