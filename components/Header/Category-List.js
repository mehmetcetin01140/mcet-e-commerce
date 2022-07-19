import React,{useState} from 'react'
import Image from 'next/image'
export default function CategoryList() {
    const List = [{name:"Moda",url:"/moda.png"},{name:"Teknoloji",url:"/teknoloji.png"},{name:"Yaşam",url:"/yasam.png"},{name:"Bebek",url:"/annebebek.png"},{name:"Kozmetik",url:"/kozmetik.png"},{name:"Saat",url:"/saat.png"},{name:"Spor",url:"/spor.png"},{name:"Kitap",url:"/kitap.png"},{name:"Lastik",url:"/lastik.png"}]
    const listLoop = () =>{
        return(

        <ul className='category-list'>

          {  List.map(listItem=>(
                <li>
                   <Image
      src={listItem.url}
      width={"30px"}
      height={"30px"}
    />
                   <span> {listItem.name}</span>
                </li>
            ))}
        </ul>
        )
    }
  return (
    <div>
        {listLoop()}
    </div>
  )
}
