
import { ServiceCard } from '../Components/ServiceCard.jsx'
import {services }from '../Constants/index.js'
export default function Services(){
    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
            { services.map((item)=>(

                <ServiceCard {...item} />
            ))   }
        </section>
    )
}