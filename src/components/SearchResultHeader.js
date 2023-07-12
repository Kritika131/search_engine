import React, { useContext, useEffect, useState } from 'react'
import Logo from "../assets/logo.png"
import SearchInput from './SearchInput'
import ProfileIcon from './ProfileIcon'
import { menu } from '../utils/Constants'
import { Context } from '../utils/ContextApi'
import { Link } from 'react-router-dom'

const SearchResultHeader = ({showMenu}) => {
  const [selectedMenu,setSelectedMenu] = useState("All");
  const {setImageSearch} = useContext(Context);

  

  const clickHandler=(menu)=>{
    let isImages = menu.name==="Images";
    setSelectedMenu(menu.name);
    setImageSearch(isImages ? true :false);
  };

  

  useEffect(()=>{
    return ()=> setImageSearch(false);
},[])



   return (
      <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
        <div className="flex items-centet justify-between w-full">
          <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} className="hidden md:block w-[92px] mr-10" alt="" />
          </Link>
            <SearchInput from="searchResult"/>
          </div>
          <div className="hidden md:block">
            <ProfileIcon/>
          </div>
        </div>
         {showMenu &&
          <div className="flex ml-[-12px] mt-3">
            {menu.map((menu,idx)=>(
              
              <span key={idx} className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${selectedMenu=== menu.name ? "text-[#1a73e8] ": ""}`} onClick={()=>clickHandler(menu)}>
                    <span className="hidden md:block mr-2">
                        {menu.icon}
                    </span>
                    <span className="text-sm">{menu.name}</span>
                    {selectedMenu===menu.name && (
                      <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]"/>
                    )}
              </span>
            ))}
          </div>
         
         }
      </div>
  )
}

export default SearchResultHeader