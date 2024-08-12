
import star from '../assets/icons/star.svg'

export const ReviewCard=({customerName,imgURL,rating,feedback})=>{
    return(
       <div className=" flex flex-2 flex-col  justify-center  items-center shadow-3xl rounded-3xl p-5">


            <img src={imgURL} alt="" width={80} height={80} className="rounded-full object-cover"/>
            <p className='text-center info-text mt-6 max-w-sm '>{feedback}</p>

         
         
            <div className='flex gap-4 mt-3 items-center justify-center'>
                
                <div className='flex gap-2 text-xl font-montserrat text-slate-gray'>
                <img src={star} alt=""  width={20} className="object-contain"/>
                ({rating})

                </div>

                <div className='text-3xl font-palanquin font-bold'>{customerName}</div>
            </div> 

       </div>
    )
}