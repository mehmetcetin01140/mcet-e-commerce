import React,{useEffect, useState} from 'react'
import ProductData from "../../json/recommendation.json"
import Link from 'next/link'
import HeaderCartIcon from '../Cart/Header-Cart-Icon'
import Login from "../LoginSignup/login"
import Offcanvas from "./Off-Canvas"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
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
<div className="search-input">

<input type="text" placeholder='Ürün Ara...' value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} />
                    <div className="search-input-dropdown">

         {   filteredProducts.map(product=>(
                  <Link href={`/product/${product.id}`} >
                <div className="dropdown-content" onClick={()=>setSearchParam("")}>
                  <a style={{textDecoration: 'none',
          color: 'inherit',}}>
                    <img src={product.img} alt={product.name}/>
                    <span>{product.name}</span>

                  </a>
                </div>
                  </Link>
            ))}
                    </div>
                    <HeaderCartIcon />
                    <div className="account">
                      <FontAwesomeIcon icon={faUser} fontSize={20}/>
          <Login/>
          </div>
                    <div className='menu'>
                    <Offcanvas/>
                    <span>Menü</span>
                    </div>
                    
</div>

     
        
    </>
  )
}
