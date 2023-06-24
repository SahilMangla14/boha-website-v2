import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
const About = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 80
        })
      },[])


    return (
        <div id="about" className='w-full  h-auto flex flex-col py-[110px] pb-20'>
            <div className='w-full flex flex-col items-center justify-center pb-4'>
                <div className='w-auto flex flex-col items-center justify-center'>
                    <h1 className='text-white w-full flex items-center justify-center font-bold text-[40px]' data-aos="fade-up">ABOUT</h1>
                    <div className='bg-[#FF0000]  w-[40%] h-[10px] '></div>
                </div>
            </div>
            <div className='flex flex-col md:px-20 h-auto'>
                <div className='text-[#EFEFEF] h-auto flex  rounded-2xl'>
                    {/* <div className='w-1/2 border border-black flex items-center justify-center'>
                        hello
                    </div> */}
                    <div className='w-full  px-4'>
                        <h3 className='w-full flex items-center justify-center py-4'>Hostel Affairs Council</h3>
                        <p className='text-lg flex flex-wrap'>
                            The Hostel Affairs Council is responsible for enhancing the living experience of the esteemed students at IIT Ropar, ensuring their comfort and well-being. With a keen focus on raising the standards of accommodation, this honourable council diligently oversees and orchestrates various aspects, ranging from infrastructure enhancements to security measures, healthcare provisions, internet connectivity, housing arrangements, housekeeping services, sustainability initiatives, and delectable eateries.
                        </p>
                        <p className='text-lg flex-wrap'>
                            Composed of eminent figures, the Hostel Affairs Council brings together the Dean SA, Chief Warden, dedicated Wardens, General Secretary of the Board of Hostel Affairs (BOHA), Mess Representatives and Hostel Representatives. This exceptional assembly of individuals embodies a shared vision to create an atmosphere that fosters growth, support, and a sense of belonging for the beloved student community.

                        </p>
                    </div>
                </div>

                <div className='text-[#EFEFEF] h-auto flex mt-20 rounded-2xl'>

                    <div className='w-full px-4'>
                        <h3 className='w-full flex items-center justify-center py-4 flex-wrap'>Hostel Life</h3>
                        <p className='text-lg flex-wrap'>
                            The Hostel Affairs Council is responsible for enhancing the living experience of the esteemed students at IIT Ropar, ensuring their comfort and well-being. With a keen focus on raising the standards of accommodation, this honourable council diligently oversees and orchestrates various aspects, ranging from infrastructure enhancements to security measures, healthcare provisions, internet connectivity, housing arrangements, housekeeping services, sustainability initiatives, and delectable eateries.
                        </p>
                        <p className='text-lg flex-wrap'>
                            Composed of eminent figures, the Hostel Affairs Council brings together the Dean SA, Chief Warden, dedicated Wardens, General Secretary of the Board of Hostel Affairs (BOHA), Mess Representatives and Hostel Representatives. This exceptional assembly of individuals embodies a shared vision to create an atmosphere that fosters growth, support, and a sense of belonging for the beloved student community.

                        </p>
                    </div>
                    {/* <div className='w-1/2 border border-black flex items-center justify-center'>
                        hello
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default About
