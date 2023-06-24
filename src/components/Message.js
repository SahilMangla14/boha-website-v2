import React, {useEffect} from 'react'
import { GS_BOHA, Chief_Warden } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

const Message = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 80
        })
      },[])

    return (
        <div id="message" className='w-full h-auto flex flex-col py-[110px] pb-10 '>
            <div className='w-full flex items-center justify-center pb-5'>
                {/* <h1 className='w-full flex items-center justify-center font-bold text-[40px] pb-4'>MESSAGE</h1> */}
                <div className='w-auto flex flex-col items-center justify-center'>
                    <h1 className='text-white w-full flex items-center justify-center font-bold text-[40px]' data-aos="fade-up">MESSAGE</h1>
                    <div className='bg-[#FF0000]  w-[40%] h-[10px] '></div>
                </div>
            </div>

            <div className='flex flex-col md:px-20 h-auto'>
                {/* MESSAGE FROM CHIEF WARDEN */}
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className='w-full md:w-1/3 '>
                        {/* <img src={Chief_Warden} alt="" className=''/> */}
                        <div className='w-full flex items-center justify-center'>
                            <div className='w-full flex basis-[250px]'>
                                <img src={Chief_Warden} alt="" className='h-[250px] w-[100%]  object-cover rounded-full z-[10]' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 flex flex-col pl-5 pr-3 py-2'>
                        <h3 className='w-full flex items-center justify-center text-white'>Message From Chief Warden</h3>
                        <p className='text-lg flex flex-wrap text-[#EFEFEF]'>
                            With great joy, I extend a warm welcome to all of you at one of India's esteemed institutions, blessed with a picturesque campus. Though adjusting to hostel life might initially seem challenging, you'll soon discover its inviting and cozy nature. Explore the exceptional facilities and services offered by Hostel Affairs. Embrace the freedom to expand your knowledge, nurture personal growth, and forge lifelong memories in our captivating surroundings. Once again, a heartfelt welcome to IIT Ropar!
                        </p>
                    </div>
                </div>

                {/* MESSAGE FROM GS BOHA */}
                <div className='flex flex-col md:flex-row mt-5 items-center justify-center'>
                    <div className='w-full md:w-1/3'>
                        {/* <img src={GS_BOHA} alt="" className='' /> */}
                        <div className='w-full flex items-center justify-center'>
                            <div className='flex basis-[250px]'>
                                <img src={GS_BOHA} alt="" className='h-[250px] w-[100%]  object-cover rounded-full z-[10]' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 flex flex-col pl-5 pr-3 py-2'>
                        <h3 className='w-full flex items-center justify-center md:flex-none text-white'>Message From GS BOHA</h3>
                        <p className='text-lg flex flex-wrap text-[#EFEFEF]'>
                            With great joy, I extend a warm welcome to all of you at one of India's esteemed institutions, blessed with a picturesque campus. Though adjusting to hostel life might initially seem challenging, you'll soon discover its inviting and cozy nature. Explore the exceptional facilities and services offered by Hostel Affairs. Embrace the freedom to expand your knowledge, nurture personal growth, and forge lifelong memories in our captivating surroundings. Once again, a heartfelt welcome to IIT Ropar!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
