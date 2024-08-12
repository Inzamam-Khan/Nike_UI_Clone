import footerLogo from '../assets/bg-images/footerLogo.svg'
import { footerLinks, socialMedia } from '../Constants'
import copyRight from '../assets/icons/copyrightSign.svg'

export default function Footer(){
    return(
        <footer className="max-container">

            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                    
                    {/* first box icon and info-text*/}
                <div className="flex flex-col items-start">
                    
                    <a href="/">
                        <img src={footerLogo} width={150} height={46}/>
                    </a>

                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                    Get shoes ready for the new term at your nearest Nike store. Find
                    Your perfect Size In Store. Get Rewards
                    </p>

                    <div className="flex items-center gap-5 mt-8">

                        {socialMedia.map((icon)=>(
                            <div className='flex justify-center items-center w-12 h-12 bg-coral-red rounded-full'>
                                <img src={icon.src} alt={icon.alt} width={24} height={24} /> 
                            </div>
                        ))}
                    </div>
                </div>

                                {/* second box i.e link part */}
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                     

                     {footerLinks.map((section)=>(
                        <div>
                            <h4 className='text-white font-palanquin text-2xl leading-normal font-medium mb-6'> {section.title}</h4>

                                <ul >
                                    {section.links.map((link)=>(
                                        <li className='mt-3 text-white-400 font-montserrat text-base
                                leading-normal hover:text-slate-gray cursor-pointer'>
                                            <a href="">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>

                        </div>
                     ))}
                </div>
            
            </div>

                            {/* last box footer part */}
            <div className="flex justify-between text-white-400 mt-24 
            max-sm:flex-col max-sm:items-center">
                
                <div className='flex flex-1 justify-start items-center
                gap-4 font-montserrat cursor-pointer'>
                    <img src={copyRight} alt="" className="rounded-full m-0" widht={20} height={20} />
                    <p>Copyright. All rights reserved @ 2024</p>
                </div>

                <p className="font-montserrat cursor-pointer">
                    Terms & Conditions.
                </p>



            </ div>
        </footer>
    
    )
}