import { Icon } from "../";
const button = ({children , onClick = null,onMouseOver=null, className=null }) =>{
    const design =(
      <>
      {/* button <button className={sample[theme]+" "+className} onClick={onClick} onMouseOver={onMouseOver} >{children}</button> */}
      <button className={  className } onClick={onClick} onMouseOver={onMouseOver} ><Icon>{children}</Icon></button>
      </>
    );
    return design;
}
export default button;