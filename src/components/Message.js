import React, { useEffect, useState } from 'react'
import { GS_BOHA, Chief_Warden } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

const Message = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 80
        })
    }, [])

    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false)
    }

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
                            <p>
                            Warm greetings to all the current and prospective students of IIT Ropar.<br/>
                            I extend a heartfelt welcome to each one of you, as you become part of the IIT Ropar family. Our institute is committed to providing a nurturing and secure environment where you can thrive academically and personally. We understand the importance of a homely atmosphere and have taken significant measures to ensure your safety and well-being within our hostel facilities. Our hostels, designed to accommodate both male and female students, are equipped with dedicated wardens and caretakers who maintain a clean, healthy, and comfortable living environment. We place a strong emphasis on discipline, and we encourage all students to abide by the hostel guidelines.<br/><br/>
                            To facilitate your stay, our hostels boast top-notch facilities. From 24-hour power supply and internet connectivity to lifts, hot and cold-water availability, clean and hygienic surroundings, well-maintained toilets, centralized mess, fully automatic washing machines, television, newspapers, and sports and gym facilities, we have strived to cater to your every need. Furthermore, our institute is dedicated to providing comprehensive support services. We offer academic assistance, medical facilities, counselling services, career guidance, and various utility facilities to ensure your personal and academic growth. Our team of professionals is always ready to lend a helping hand, so please don't hesitate to reach out whenever you need support.<br/><br/>
                            Rest assured that your safety and well-being remain our utmost priority. Our dedicated Student Affairs Section comprises wardens, caretakers, faculty advisors, and supporting staff who are committed to guiding and assisting you throughout your stay. I urge all students to familiarize themselves with the hostel guidelines, rules, and regulations, as they contribute to creating a harmonious living experience. I encourage you to actively engage in the rich campus life of IIT Ropar. Participate in student activities, clubs, and societies that align with your interests. These extracurricular opportunities provide a platform for you to connect with fellow students, develop new skills, and broaden your knowledge horizons.<br/><br/>
                            In our institute, we value respect, empathy, and inclusivity. I implore each one of you to treat your fellow students, faculty, and staff with kindness and consideration. Embrace the diversity that our institute offers, as it will enrich your understanding and foster a sense of global citizenship. Let us create an environment where every individual is respected, valued, and celebrated. <br /><br/>
                            Together, let us cultivate an environment that nurtures learning, personal development, and a strong sense of community. I extend my best wishes to each and every one of you for success, happiness, and fulfilment in all your endeavours. <br /><br />
                            Warm regards,<br/>
                            Dr. Ravi Kant, Chief Warden
                            </p>
                            
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
                            <p>
                            Warm greetings to all the current and prospective students of IIT Ropar.<br/>
                            I am delighted to welcome all of you to the esteemed institution of IIT Ropar. Our campus boasts breathtaking surroundings and is renowned for its excellence in education. As the General Secretary of the Board of Hostel Affairs, I am here to ensure that your transition into hostel life is smooth and enjoyable.<br/><br/>
                            While adjusting to hostel life may seem daunting at first, I assure you that our hostels provide a warm and inviting environment. Take the time to familiarize yourself with the exceptional facilities and services that Hostel Affairs has to offer. We are committed to providing you with all the necessary resources to support your academic and personal growth during your stay here.<br/><br/>
                            At IIT Ropar, you have the freedom to explore and expand your knowledge. Engage in meaningful interactions with your fellow students and faculty members. Embrace the opportunities for intellectual and cultural enrichment that await you within these walls. The memories you create here will stay with you for a lifetime.<br/><br/>
                            Remember, your time at IIT Ropar is a chance to make a big impact, both academically and personally. Seize every opportunity that comes your way, whether it be participating in extracurricular activities, conducting research, or pursuing your passion. Make use of the vast resources and support available to you, and let your potential shine through. <br /><br/>
                            Once again, I extend a heartfelt welcome to all of you. Embrace the journey that lies ahead, and make the most of your time at IIT Ropar. Together, let's make it big! <br /><br />
                            Warm regards,<br/>
                            Harshdeep, GS BOHA
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
