import { Button } from "../Components/Button";
import { shoes, statistics } from "../Constants";
import arrowRight from '../assets/icons/arrowRight.svg'

import bigShoe1 from '../assets/bg-images/bigShoe1.png'
import {ShoeCard} from '../Components/ShoeCard.jsx'
import { useState } from "react";

export default function Hero(){

    const [bigShoe,setBigShoe]=useState(bigShoe1)
    return(
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen
        gap-10 max-container  p-2">


                {/* left side  */}
            <div className="
            relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

            <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>

            <h1 className=" mt-10 font-palanquin text-8xl  max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                <br />
                <span className="text-coral-red mt-3 inline-block ">Nike </span>Shoes
            </h1>

            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals,quality comfort, and innovation for 
                your active life.
            </p>

            <Button label={"Shop Now"} iconURL={arrowRight}/>

            <div className="flex justify-start
            items-start flex-wrap w-full mt-20 gap-16">

{statistics.map((item)=>(
    <div key={item.label}>
        <p className="text-4xl font-palanquin font-bold ">{item.value}</p>

        <p className="leading-7 font-montserrat text-slate-gray ">{item.label}</p>
    </div>

))}


            </div>



            </div>


            {/* right side  */}

            <div className="relative flex-1 flex justify-center
                xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center items-center">
         
                <img src={bigShoe} alt="shoe collection" width={610} height={500}  className="object-contain relative z-10 " />



                {/* thumbnail section */}

                <div className="flex sm:gap-6 gap-4 absolute
                 bottom-[-5%] max-sm:px-6 ">


                    {shoes.map((shoe)=>(
                        
                        <div key={shoe.thumbnail}>
                            
                            <ShoeCard imageURL={shoe} 
                            changeBigShoeImage={(item)=>{setBigShoe(item)}} 
                                bigShoeImage={bigShoe}/>

                        </div>
                    ))}
                </div>




            </div>




        </section>
   )
}