import React, {useState} from 'react';
import './style.css';
import Menu  from './menuapi.js';
import Menucard from './Menucard.js';


const Restaurent = () => {
    const [menuData,setMenuData]=useState(Menu);

    const filterItem=(category)=>{
      const updatedList=Menu.filter((curelem)=>{
        return curelem.category===category;
      })
      setMenuData(updatedList);
    };
    
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' 
        onClick={()=>filterItem("breakfast")}>breakfast</button>

        <button className='btn-group__item' 
        onClick={()=>filterItem("lunch")}>lunch</button>

        <button className='btn-group__item'
        onClick={()=>filterItem("dinner")}>dinner</button>
        <button className='btn-group__item' 
        onClick={()=>filterItem("dessert")}>dessert</button>
        <button className='btn-group__item'
        onClick={()=>setMenuData(Menu)}>All</button>

      </div>
    </nav>
    <Menucard menuData={menuData} />
    </>
  )
}

export default Restaurent
