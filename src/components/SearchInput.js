
import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import {IoMdClose} from "react-icons/io"
import Voice from "../assets/voice.png"
import Camera from "../assets/c-tt.png"
import { useNavigate, useParams } from "react-router-dom"


const SearchInput = () => {

  const {query} = useParams();
  const [searchQuery,setQuery] = useState(query || "")
  const navigate = useNavigate();

  const searchQueryHandler =(e)=>{
       if(e.key==="Enter" && searchQuery.length>0){
           navigate(`/${searchQuery}/${1}`);
       }
  }
  return (
      <div id="searchbox" className="h-[46px] w-full md:w-[584px]  flex items-center gap-3 px-5 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-cs1 hover:border-0 focus-within:shadow-cs1 focus-within:border-0  ">
        <AiOutlineSearch size={18} color="#9aa0a6"/>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} autoFocus className="grow outline-0 text-black/[0.4]"/>

        <div className="flex items-center gap-3 ">
        {query && (
          <IoMdClose size={20} color="#70757a" className="cursor-pointer" onClick={()=>setQuery("")}/>
        )}
          <img src={Voice} className="h-5 w-4 cursor-pointer" alt="" />
          <img src={Camera} className="h-4 w-5 cursor-pointer " alt="" />
        </div>

      </div>
    )
}

export default SearchInput