import { useContext, useEffect, useState } from "react"
import Footer from "./Footer"
import SearchResultHeader from "./SearchResultHeader"
import { useParams } from "react-router-dom";
import { Context } from "../utils/ContextApi";
import { fetchDataFromApi } from "../utils/Api";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchImgItem from "./SearchImgItem";
import Pagination from "./Pagination";

const SearchResult = () => {
  const [result, setResult] = useState();
  const {query,startIndex} = useParams()
  const {imageSearch} = useContext(Context);

  const [showMenu,setShowMenu ] = useState(true);

  const showMenuHandler=()=>{
    console.log(window.scrollY);
    if(window.scrollY>200){
      setShowMenu(false);      
    }else {
      setShowMenu(true);
    }
  }


 

  useEffect(()=>{
      fetchSearchResult();
  },[query,startIndex,imageSearch])


  useEffect(()=>{
    window.addEventListener('scroll',showMenuHandler)
    return ()=>{
      window.removeEventListener('scroll',showMenuHandler)
    }
  },[])
  

  const fetchSearchResult = ()=>{
    let payload = {q:query,start:startIndex};
    if(imageSearch) {
      payload.searchType = "image"
    }
    fetchDataFromApi(payload).then((res)=>{
      console.log(res);
      setResult(res);
    })
  }
  if(!result ) return;
  const {items, queries, searchInformation} = result;
  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader showMenu={showMenu}/>
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
          <div className="flex text-sm text-[#70757a] mb-3">
            {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}
          </div>
          {!imageSearch ? (<>
            {items.map((item,idx)=>(
              <SearchedItemTemplate key={idx} data = {item}/>
            ))}
          </>):(
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items.map((item,idx)=>(
              <SearchImgItem key={idx} data={item}/>
            ))}
            </div>
          )}
          <Pagination queries={queries}/>
      </main>
      <Footer/>
    </div>
  )
}

export default SearchResult