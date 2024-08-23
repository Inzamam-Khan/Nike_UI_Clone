import headerLogo from '../assets/icons/headerLogo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navBarLinks } from '../Constants'


import { useState } from 'react'

export default function () {
    const [isOpen, setIsOpen] = useState(false)


    return (<>

        <nav className='fixed z-20 px-8 py-8  w-full bgChange flex justify-between items-center ' >


            <a href="/">
                <img src={headerLogo} width={130} height={29} alt='logo' />
            </a>

            <ul className='hidden flex-1 justify-center items-center
                     gap-16  md:flex '>

                {
                    navBarLinks.map((item) => (
                        <li key={item.label} >
                            <a href={item.href} className='font-montserrat
                                    hover:text-coral-red  leading-normal text-lg text-slate-gray'>
                                {item.label}

                            </a>
                        </li>

                    ))
                }

            </ul>


            <div className='block md:hidden   cursor-pointer ' onClick={() => setIsOpen(!isOpen)}>


                {isOpen ? (
                    <svg  xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                ) : (
                    <img src={hamburger} width={25} height={25} className='cursor-pointer' />
                )}




            </div>







        </nav>

 <div className={`fixed z-50 top-[6rem] transform ease-in-out transition-all duration-500 
            ${isOpen? `translate-x-0`:`translate-x-[100rem]`}  w-full bg-black`}>
                    
        
            <ul className='p-5 text-white  flex flex-col items-center'>
                        {navBarLinks.map((item,index)=>(
                                <li key={index} className="capitalize cursor-pointer font-montserrat py-4  mt-4 text-xl hover:text-coral-red">
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                    
                                </li>
                        ))}
            </ul>
            
            

         </div>
        

    </>


    )
}


