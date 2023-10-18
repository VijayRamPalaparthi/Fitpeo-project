import "./index.css"
import {BiChevronRight} from "react-icons/bi"

const DashboardItem=(props)=>{
const{icon,content}=props
return(
    <li className='tabs-container'>
    <div className='tab'>
    {icon}
    <p className='tab-heading'>{content}</p>
    </div>
    <BiChevronRight size={25} color="#8d91b0" />
  </li> 
)
}

export default DashboardItem