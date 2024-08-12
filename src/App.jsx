import {
  Services,Hero,SuperQuality,SpecialOffers,
  Footer,CustomerReviews,Subscribe
} from './Sections'
import Navbar from './Components/Navbar'
import { PopularProducts } from './Sections/PopularProducts'

function App() {
  

  return (
    <div className="relative">
     <Navbar/> 

      <section className="xl:padding wide:padding-r padding-b">
        <Hero/>

      </section>

      <section className="padding">
       <PopularProducts/>
      </section>

      <section className="padding">
       <SuperQuality/>
      </section>

      <section className="padding-x py-10">
        <Services/>
      </section>

      <section className="padding">
        <SpecialOffers/>
      </section>
      
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
      
    </div>
  
  )
}

export default App
