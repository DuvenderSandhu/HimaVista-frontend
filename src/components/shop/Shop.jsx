import { useEffect, useState } from "react"
import CardLayout from "../Card"
import ProductPage from "./ProductPage"


function Shop(){
    const [finalData,setFinalData]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>setFinalData(data))
    },[])
    return (
//         <div className="flex gap-16 flex-wrap">
//             {console.log(finalData)}
//             {finalData.map((e)=>{
//                 return <CardLayout Imageurl={e.image} title={e.title} desc={e.description}/>
// })}
//         </div>
        <ProductPage/>
    )
}

export default Shop