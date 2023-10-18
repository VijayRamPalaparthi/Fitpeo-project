import "./index.css"
import {BsArrowDownShort,BsArrowUpShort} from "react-icons/bs"
const DetailsItem=(props)=>{
    const{id,amount,value,text,tag}=props.item
    const rangeColor=value>10 ? "safe" : "dangerous";
    const rangeIcon=value>10 ? <BsArrowUpShort size={20} color="#42c07a"/> : <BsArrowDownShort size={20} color="#d52260"/>
    return(
        <li className="list-card-container">
            <div className={`icon-container no-${id}`}>
                {tag}
            </div>
            <div className="each-detail-container">
                <p className="type">{text}</p>
                <p className="amount">${amount}K</p>
                <p className="range">{rangeIcon}<span className={rangeColor}>{value}%</span>this month</p>
            </div>
        </li>
    )
}

export default DetailsItem