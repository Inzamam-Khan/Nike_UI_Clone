import { products } from "../Constants"
import star from '../assets/icons/star.svg'
export const PopularProductCard=({rating,price,name,imgURL})=>{
    
    
    return(
    <div className="flex flex-1 sm:flex-col flex-row w-full 
     max-sm:w-full">
        
        <img src={imgURL} alt="" className="" width="280px" height="280px"/>

        <div className="mt-8 flex justify-start gap-2.5">

            <img src={star} alt="rating" width={24} height={24} className="" />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>

        </div>

        <h3 className="mt-2 text-2xl leading-normal font-semibold
        font-palanquin " >{name}</h3>
        <p className="mt-2 font-montserrat text-2xl leading-normal font-semibold text-coral-red">{price}</p>



     </div>)
}