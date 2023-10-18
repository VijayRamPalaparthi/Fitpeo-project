import './App.css';
import DashboardItem from "./Components/DashboardItem"
import DetailsItem from "./Components/DetailsItem"
import OverView from "./Components/Overview"
import ProductItem from "./Components/ProductItem"

import {PiGearSixBold} from "react-icons/pi"
import {TbSquareKey} from "react-icons/tb"
import {IoIosContact} from "react-icons/io"
import {RiWallet3Line} from "react-icons/ri"
import {LuBadgePercent} from "react-icons/lu"
import {MdOutlineLiveHelp} from "react-icons/md"
import {HiOutlineCube} from "react-icons/hi"
import{BiChevronDown} from "react-icons/bi"
import {BiSearch} from "react-icons/bi"
import {AiOutlineDollarCircle} from "react-icons/ai"
import {BsFileText} from "react-icons/bs"
import {BiShoppingBag} from "react-icons/bi"

const ListItems=[
  {list: <HiOutlineCube size={25} color='#8d91b0'/>, content:"Product"},
{list:<IoIosContact size={25} color='#8d91b0'/>,content:"Cutomer"},
{list: <RiWallet3Line size={25} color='#8d91b0'/>, content:"Income"},
{list: <LuBadgePercent size={25} color='#8d91b0'/>, content:"Promote"},
{list: <MdOutlineLiveHelp size={25} color='#8d91b0'/>, content:"Help"}
]

const detailsList=[
  {id:1, tag:<AiOutlineDollarCircle size={50} color='#00a13b'/>,text:"Earning", amount:198, value:37.8 },
  {id:2, tag:<BsFileText size={50} color='#a207ff'/> , text:"Orders", amount:2.4, value:2},
  {id:3, tag:<RiWallet3Line size={50} color='#1161c2'/>, text:"Balance", amount: 2.4, value:2},
  {id:4, tag:<BiShoppingBag size={50} color='#e2324d'/>, text:"Total sales", amount:89, value:11},
]

const overViewList=[
  {month:"Jan", range:"110px", active:false},
  {month:"Feb", range:"80px", active:false},
  {month:"Mar", range:"160px", active:false},
  {month:"Apr", range:"110px", active:false},
  {month:"May", range:"130px", active:false},
  {month:"Jun", range:"60px", active:false},
  {month:"Jul", range:"130px", active:false},
  {month:"Aug", range:"160px", active:true},
  {month:"Sep", range:"150px", active:false},
  {month:"Oct", range:"110px", active:false},
  {month:"Nov", range:"90px", active:false},
  {month:"Dec", range:"110px", active:false},
]

const productList=[
  {id:1,img:"flower.jpg", about:"Abstract 3D", desc:"lorem ipsum solor sit amet, consectetur adipiscing elit", stock:32, price:45.99, sales:20},
  {id:2,img:"windows11.jpeg", about:"Abstract 3D", desc:"lorem ipsum solor sit amet, consectetur adipiscing elit", stock:32, price:45.99, sales:20}
]

function App() {
  return (
   <div className='bg-container'>
    <div className='dashboard-container'>
      <div className='dashboard-head'>
        <PiGearSixBold size={30} color='white'/>
        <h1 className='dash-heading'> Dashboard </h1>
      </div>
      <ul className='dashboard-list-container'>
        <li className='selected-tab'>
          <TbSquareKey size={25} color='white'/>
          <p className='dash-list-heading'>Dashboard</p>
        </li>
        {ListItems.map(each => 
          <DashboardItem icon={each.list} content={each.content} key={each.content} />
          )}
        <li className='grow'></li>  
        <li className='profie-container'>
          <img src='profile.jpg' alt="profile" className='p-image'/>
          <div className='profile'>
            <p className='name'> Evano </p>
            <p className='role'> Project Manager </p>
          </div>
          <BiChevronDown size={20} color='#7f84a3'/>

        </li>  
      </ul>


    
    </div>
    <div className='body-container'>
      <div className='top-section'>
        <h1 className='heading'>Hello Shahrukh </h1>
        <div className='input-container'>
          <BiSearch size={21} color='#8c8c8c'/>
          <input className='input' placeholder='search' type="text"/>
        </div>
      </div>
      <ul className='details-item-container'>
      {detailsList.map(each =>
        <DetailsItem item={each} iconItem={each.tag} key={each.id}/>
        )}
      </ul>
      <div className='middle-section'>
        <div className='over-view-container'>
          <div className='over-view-head'>
            <div>
            <h1 className='ov-heading'>Overview</h1>
            <p className='type-size'>Monthly Earning</p>
            </div>
            <div className='bg'>
              <p className='type-size'>Quartetly </p>
              <BiChevronDown size={20} color='#99999a'/>
            </div>
            
          </div>
          <ul className='overview-range-container'>
            {overViewList.map(each =>
              <OverView overView={each} key={each.month}/>)}
          </ul>
        </div>
          <div className='customer-card'>
              <div className='customer'>
                <h1 className='ov-heading'> Cusomers </h1>
                <p className='type-size'> Cusomers that buy product</p>
              </div>
              <img src='range_image.png' alt="analytics" className='a-image'/>
          </div>
      </div>
      <div className='product-cell-container'>
        <div className='p-head'>
          <h1 className='ov-heading'>Product Shell</h1>
          <div className='p-right'>
            <div className='input-container2'>
              <BiSearch size={15} color='#8c8c8c'/>
              <input className='input-2' placeholder='search' type="text"/>
            </div>
            <div className='days-container'>
              <p className='days'>Last 30 days</p>
              <BiChevronDown size={20} color='#7f84a3'/>

            </div>
          </div>
        </div>
        <div className='p-heading-col'>
          <p className='p1 name'>Product Name</p>
          <p className='p1 stack'>Stack</p>
          <p className='p1 price'> Price </p>
          <p className='p1 sales'>Total Sales</p>
        </div>
        <hr className='hr'/>
        <ul className='product-list-container'>
        {productList.map(each =>
          <ProductItem item={each} key={each.id}/>
          )}  
        </ul>      
      </div>
    </div>
   </div>
  )
}

export default App;
