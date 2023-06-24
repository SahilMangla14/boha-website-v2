import React , {useEffect} from 'react'
import { samagam1, samagam2, samagam3, samagam4, gc1, gc2, gc3, festival2 } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Events = () => {
    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 80
        })
      },[])

    return (
        <div id="events" className='w-full  h-auto flex flex-col py-[110px] pb-10 text-[#dbdbdb] '>
            <div className='w-full flex items-center justify-center pb-5'>
                {/* <h1 className='w-full flex items-center justify-center font-bold text-[40px] pb-4'>EVENTS</h1> */}
                <div className='w-auto flex flex-col items-center justify-center'>
                    <h1 className='text-white w-full flex items-center justify-center font-bold text-[40px]' data-aos="fade-up">EVENTS</h1>
                    <div className='bg-[#FF0000]  w-[40%] h-[10px] '></div>
                </div>
            </div>

            <div className='flex flex-col md:px-20 h-auto'>
                {/* FESTIVALS */}
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className='w-full md:w-1/2  px-10 md:px-0'>
                        <div className='w-full flex items-center justify-center'>
                            <div className='flex basis-[400px]'>
                                <img src={festival2} alt="" className='w-[100%] h-[310px] object-cover z-[10]' />
                            </div>
                        </div>
                    </div>
                    <div className=' w-full md:w-1/2 flex flex-col pl-5 py-2'>
                        <h3 className='text-[#EFEFEF] w-full flex justify-center items-center'>FESTIVALS</h3>
                        <p className='text-[#EFEFEF] text-lg flex flex-wrap ' data-aos="fade-up">
                        At our institute, we celebrate a multitude of festivals within our premises, fostering a vibrant and inclusive atmosphere. We believe in embracing the diversity of our student community and providing a platform for cultural exchange and celebration. Through these festivities, we aim to cultivate a sense of unity and mutual respect, promoting a rich tapestry of traditions that enriches the educational experience for all.
                        </p>
                    </div>
                </div>

                {/* GENERAL CHAMPIONSHIP */}
                <div className='flex flex-col md:flex-row mt-5 items-center justify-center'>

                    <div className=' w-full md:w-1/2 flex flex-col pl-5 pr-3 py-2'>
                        <h3 className='ttext-[#EFEFEF] w-full flex justify-center items-center'>GENERAL CHAMPIONSHIP</h3>
                        <p className='text-lg flex flex-wrap ' data-aos="fade-up">
                        To promote friendly competition and camaraderie, we organize a general championship that encompasses sports, cultural activities, literary events, and technical competitions among the different hostels. This championship allows students to showcase their talents, skills, and teamwork while fostering a spirit of healthy competition and sportsmanship. 
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 px-10 md:px-0'>
                        <div className='w-full flex items-center justify-center'>
                            <div className='flex basis-[400px]'>
                                <img src={gc3} alt="" className='w-[100%] h-[310px] object-cover z-[10]' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row mt-5 items-center justify-center'>
                    <div className='w-full md:w-1/2 px-10 md:px-0'>
                        <div className='w-full flex items-center justify-center'>
                            <div className='flex basis-[400px]'>
                                <img src={samagam1} alt="" className='w-[100%] h-[310px] object-cover z-[10]' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col pl-5 pr-3 py-2'>
                        <h3 className='text-[#EFEFEF] w-full flex items-center justify-center'>SAMAGAMS</h3>
                        <p className='text-lg flex flex-wrap ' data-aos="fade-up">
                        Furthermore, we organize "Samagams" within the hostels, which are interactive events designed to engage and bring together hostel residents. These events offer a platform for students to connect, participate in various activities, and form lasting bonds with their fellow residents. Through these celebrations and events, we aim to create a vibrant and inclusive community where students can not only excel academically but also engage in a wide range of cultural, sporting, and intellectual pursuits
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
