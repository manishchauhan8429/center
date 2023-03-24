 import Style from "./style.module.css";
const button = ({children , onClick = null,onMouseOver=null, className=null }) =>{
    const design =(
      <>
     <button className={`${className}` } onClick={onClick} onMouseOver={onMouseOver} >{children}</button>
      </>
    );
    return design;
}
export default button;