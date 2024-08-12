import { Button } from "../Components/Button";
import arrowRight from '../assets/icons/arrowRight.svg'
import shoe8 from '../assets/bg-images/shoe8.svg'
export default function Superquality(){
    return(
        <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">


{/*  left side */}
            <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize 
             lg:max-w-lg font-bold">
                we provide you
                <span className="text-coral-red"> super</span>
                
                <span className="text-coral-red "> quality </span>Shoes
            </h2>

            <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals,quality comfort, and innovation for 
            Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
            </p>

            <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction.</p>

            <div className="mt-11">

            
            
            <Button label={"View Details"}/>
            </div>

            </div>


                {/* right side ie image part  */}
            <div className={"flex flex-1 justify-center items-center"}>
                <img src={shoe8} alt=""  width={570} height={522} className="object-fit" />
            </div>



        </section>
    )
}
