import React,{useEffect, useState} from 'react'
import ProductData from "../../json/recommendation.json"
export default function SearchInput() {
    const [searchParam,setSearchParam] = useState("")
    const [filteredProducts,setFilteredProducts] = useState([])
    const filter = () => {
      if(searchParam){
        const filteredData = ProductData.filter(product=>product.name.toLowerCase().includes(searchParam.toLowerCase()))
        setFilteredProducts(filteredData)
      }
      else setFilteredProducts([])
        
    }
    useEffect(()=>{
        filter()
    },[searchParam])


  return (
<>
<input type="text" placeholder='Ürün Ara...' value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} />
     
         
                    <div className="search-input-dropdown">

         {   filteredProducts.map(product=>(
                <div className="dropdown-content">
                    <img src={product.img} alt={product.name}/>
                    <span>{product.name}</span>
                </div>
            ))}
                    </div>
     
        
    </>
  )
}
