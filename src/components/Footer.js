import React from 'react'
import { IIT_ROPAR } from '../assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='h-auto'>
            <div className='min-h-[600px] sm:min-h-[300px] bg-black px-20 flex flex-col sm:flex-row py-10'>
                <div className='w-full sm:w-1/2  flex flex-col justify-center items-center text-[#A5A5A5]'>
                    <div className='h-auto'>
                        <h4>CONTACT US</h4>
                        <p>Indian Institute of Technology Ropar</p>
                        <p>Rupnagar, Punjab - 140001, India</p>
                        <p>Phone: +91 9588135485</p>
                        <p>Mail us at: gs.hostel@iitrpr.ac.in</p>
                    </div>

                </div>
                <div className='w-full sm:w-1/2 pt-5 sm:pt-0 flex flex-col justify-center items-center text-[#A5A5A5]'>
                    <div className='h-auto'>
                        <h4>QUICK LINKS</h4>
                        {/* <BrowserRouter> */}
                        <div className='flex'>
                            <div>
                            <a href="https://www.iitrpr.ac.in/" className='text-decoration-none text-inherit position-relative z-0'><p>Official Website</p></a>
                            <a href="https://www.iitrpr.ac.in/ismp/" className='text-decoration-none text-inherit position-relative z-0'><p>ISMP</p></a>
                            <a href="https://www.iitrpr.ac.in/pg-section" className='text-decoration-none text-inherit position-relative z-0'><p>PG Academics</p></a>
                            </div>
                            <div className='ml-6'>
                            <a href="https://www.iitrpr.ac.in/ug-section" className='text-decoration-none text-inherit position-relative z-0'><p>UG Academics</p></a>
                            <a href="https://www.iitrpr.ac.in/moodle/" className='text-decoration-none text-inherit position-relative z-0'><p>Moodle</p></a>
                            <a href="https://alumni.iitrpr.ac.in/" className='text-decoration-none text-inherit position-relative z-0'><p>IRIAA</p></a>
                            </div>
                        </div>
                        {/* </BrowserRouter> */}

                    </div>

                </div>
            </div>
            <div className='h-[100px]  flex items-center justify-center text-[#A5A5A5]'>
                Copyrights © 2023-24 Student-Affairs IIT Ropar
            </div>
        </div>
    )
}

export default Footer
