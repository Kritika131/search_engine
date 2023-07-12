import React, { useEffect, useState } from 'react'
import { pagination } from '../utils/Constants'
import { useNavigate, useParams } from 'react-router-dom';
import Logo from "../assets/logo.png"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Pagination = ({queries}) => {
  const {query} = useParams();
  const [page,setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();

  useEffect(()=>{
    setPage(pagination[0].startIndex)

  },[query])

  const paginationHandler = (startIndex) =>{
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`)
  }
  return (
    <div className="flex flex-col items-center py-14 max-w-[700px]">
      <div className="relative text-[#4285f4]">
        {queries.previousPage && (
          <div className="absolute left-[-30px] md:left-[-40px] top-[10px]" onClick={()=>paginationHandler(queries.previousPage[0].startIndex)}>
            <FiChevronLeft size={20} className="cursor-pointer" />
            <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">Prev</div>
          </div>
        )}
          <img src={Logo} className='  w-[110px] md:w-[130px] mx-10' alt="" />
          {queries.nextPage && (
          <div className="absolute right-[-30px] md:right-[-40px] top-[10px]" onClick={()=>paginationHandler(queries.nextPage[0].startIndex)}>
            <FiChevronRight size={20} className="cursor-pointer" />
            <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">Next</div>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-[#42f5f4] text-sm">
        {pagination.map((p)=>(
          <span className={`cursor-pointer ${page===p.startIndex ? "text-black":""}`} key={p.page} onClick={()=>paginationHandler(p.startIndex)}>
            {p.page}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Pagination