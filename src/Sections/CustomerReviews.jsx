import { ReviewCard } from "../Components/ReviewCard"
import { reviews } from "../Constants"

export const CustomerReviews=()=>{
    return(
        <section className="max-container"
        >
            <h3 className="capitalize font-palanquin text-center text-4xl font-bold">what our <span className="text-coral-red"> customers
                </span> say?
            </h3>

            <p className="m-auto mt-2 max-w-lg text-center info-text"> Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
            </p>


            <div className="mt-24 flex justify-evenly flex-wrap
            items-center max-lg:flex-col gap-14">
                {reviews.map((item)=>(
                    <ReviewCard {...item} />

                ))}
            </div>
        </section>
    
    ) 
}
