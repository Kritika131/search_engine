import axios from "axios"

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key:'AIzaSyBi7yDnr8cqS1R7qou4MBkm76TIF1ZkFL0',
    cx:'621e9f6f343f44e5f'
}




export const fetchDataFromApi =async(payload)=>{
    const {data} = await axios.get(BASE_URL,{
        params:{...params,...payload}
    })

    return data;
}