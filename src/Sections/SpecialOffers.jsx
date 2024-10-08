import offer from '../assets/bg-images/offer.svg'
import { Button } from '../Components/Button'
import arrowRight from '../assets/icons/arrowRight.svg'
export default function SpecialOffers(){
    return(
    <section className="flex max-xl:flex-col-reverse justify-center flex-wrap item-center
    gap-10 max-container"
    >

{/* left side i.e imgae part */}
        <div className="flex-1">
            <img src={offer} alt="offers" className="object-contain w-full"
            width={773}  height={687}/> 
        </div>



                {/* right side content part */}
        <div className="flex flex-1 flex-col">


        <h2 className="font-palanquin text-4xl capitalize 
             lg:max-w-lg font-bold">
               <span className='text-coral-red'>Special </span>offer
            </h2>

            <p className="mt-4 lg:max-w-lg info-text"> Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
            </p>

            <p className="mt-6  info-text">
            Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
          </p>

            <div className="mt-11 flex flex-wrap gap-4">

            
            
            <Button label={"shop Now"} iconURL={arrowRight}/>
            <Button label={"Learn More"} backgroundColor="bg-white"
            borderColor="border-slate-gray" textColor="text-slate-gray" />
            </div>

            </div>

        
        
        
        
        </section>
    )
}