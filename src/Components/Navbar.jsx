import headerLogo from '../assets/icons/headerLogo.svg'
import hamburger from '../assets/icons/hamburger.svg'

import { navBarLinks } from '../Constants'
export default function(){
    return(
        <header className='px-8 py-8  z-10 w-full bgChange'>

                <nav className='flex justify-between items-center max-container' >
                    <a href="/">
                    <img src={headerLogo} width={130} height={29} alt='logo'/> 
                    </a>
                    
                    <ul className='hidden flex-1 justify-center items-center
                     gap-16  md:flex '>

                        {
                            navBarLinks.map((item)=>(
                                <li key={item.label} >
                                    <a href={item.href} className='font-montserrat
                                    hover:text-coral-red  leading-normal text-lg text-slate-gray'>
                                        {item.label}

                                    </a>
                                </li>

                            ))
                        }

                    </ul>


                    <div className='block md:hidden'>
                        <img src={hamburger} width={35} height={25} className='cursor-pointer'/>
                    </div>


                </nav>

        </header>
    )
}

