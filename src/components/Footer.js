import React from 'react'
import { IIT_ROPAR } from '../assets'
const Footer = () => {
    return (
        <div className='h-auto'>
            <div className='min-h-[600px] sm:min-h-[300px] bg-black px-20 flex flex-col sm:flex-row py-10'>
                <div className='w-full sm:w-1/2  flex flex-col justify-center items-center text-[#AAAAAA]'>
                    <div className='h-auto'>
                        <h4>CONTACT US</h4>
                        <p>Indian Institute of Technology Ropar</p>
                        <p>Rupnagar, Punjab - 140001, India</p>
                        <p>Phone: +91 92052 09274</p>
                        <p>Mail us at: president.sc@iitrpr.ac.in</p>
                    </div>

                </div>
                <div className='w-full sm:w-1/2 pt-5 sm:pt-0 flex flex-col justify-center items-center text-[#AAAAAA]'>
                    <div className='h-auto'>
                        <h4>QUICK LINKS</h4>
                        <div className='flex'>
                            <div>
                                <p>Official Website</p>
                                <p>ISMP</p>
                                <p>PG Academics</p>
                            </div>
                            <div className='ml-6'>
                                <p>UG Academics</p>
                                <p>Moodle</p>
                                <p>IRIAA</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className='h-[100px]  flex items-center justify-center text-[#AAAAAA]'>
                Copyrights © 2023-24 Student-Affairs IIT Ropar
            </div>
        </div>
    )
}

export default Footer
