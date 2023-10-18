import "./index.css"

const OverView=(props)=>{
    const{month, range,active}=props.overView
    const boxColor= active?  "non-active" :"active-color"

    return(
        <li className="range-list-container">
            <div className={`list-range ${boxColor}`} style={{height: `${range}`}} ></div>
            <p className="month">{month}</p>
        </li>
    )
}
export default OverView