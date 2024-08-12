import { Button } from "../Components/Button";

export default function Subscribe(){
    return(
        <section className=" max-container flex justify-between items-center
        max-lg:flex-col gap-10" id="contact-us">


            {/* first */}
                    <h3 className="capitalize text-4xl leading-[68px] lg:max-w-2lg font-palanquin font-bold">
                        signup for latest
                        <span className="text-coral-red"> updates </span>
                        & Newsletter
                        </h3>


                    {/* second */}

                    <div className="max-sm:border-none   border border-slate-gray rounded-full lg:max-w-[40%] w-full flex 
                    items-center max-sm:flex-col p-2">

                        <input type="text" placeholder="Subsribe" className="input"/>

                        <div className="flex max-sm:justify-center max-sm:mt-2 items-center max-sm:w-full">
                            <Button label="Signup"/>
                        </div>
                    </div>



        </section>
    )
}