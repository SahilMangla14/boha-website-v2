import React, {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { drone_hostel_view1, drone_hostel_view2, gym, hostel_inside, raavi, sutlej, rooms, mess, mess_interior } from '../assets';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hostel = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 80
        })
      },[])
    
    return (
        <div id="hostel" className='w-full  h-auto flex flex-col py-[110px] pb-20'>
            <div className='w-full flex items-center justify-center'>
                {/* <h1 className='w-full flex items-center justify-center font-bold text-[40px] pb-4'>FACILITIES</h1> */}
                <div className='w-auto flex flex-col items-center justify-center pb-4'>
                    <h1 className='text-white w-full flex items-center justify-center font-bold text-[40px]' data-aos="fade-up">FACILITIES</h1>
                    <div className='bg-[#FF0000]  w-[40%] h-[10px] '></div>
                </div>
            </div>
            <div className='flex flex-col md:px-20 h-auto'>
                <div className='h-auto flex flex-col md:flex-row rounded-2xl'>
                    <div className='w-full md:w-1/2  flex items-center justify-center px-10'>
                        <Carousel>
                            <Carousel.Item interval={3000}>
                                {/* <img
                                    className="d-block w-100 rounded-xl"
                                    src={raavi}
                                    alt="First slide"
                                /> */}
                                <div className='w-full flex items-center justify-center'>
                                    <div className='flex basis-[500px]'>
                                        <img src={raavi} alt="" className='w-[100%] h-[410px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                {/* <img
                                    className="d-block w-100 rounded-xl"
                                    src={sutlej}
                                    alt="First slide"
                                /> */}
                                <div className='w-full flex items-center justify-center'>
                                    <div className='flex basis-[500px]'>
                                        <img src={sutlej} alt="" className='w-[100%] h-[410px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                {/* <img
                                    className="d-block w-100 rounded-xl"
                                    src={hostel_inside}
                                    alt="First slide"
                                /> */}
                                <div className='w-full flex items-center justify-center'>
                                    <div className='flex basis-[500px]'>
                                        <img src={hostel_inside} alt="" className='w-[100%] h-[410px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                {/* <img
                                    className="d-block w-100 rounded-xl"
                                    src={rooms}
                                    alt="First slide"
                                /> */}
                                <div className='w-full flex items-center justify-center'>
                                    <div className='flex basis-[500px]'>
                                        <img src={rooms} alt="" className='w-[100%] h-[410px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </Carousel.Item>
                            {/* <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 rounded-xl"
                                    src={gym}
                                    alt="First slide"
                                />
                            </Carousel.Item> */}
                            {/* <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 rounded-xl"
                                    src={drone_hostel_view1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 rounded-xl"
                                    src={drone_hostel_view2}
                                    alt="First slide"
                                />
                            </Carousel.Item> */}
                        </Carousel>
                    </div>
                    <div className='text-[#EFEFEF] w-full md:w-1/2  px-4 rounded-xl'>
                        <h3 className='w-full flex items-center justify-center py-4 font-bold'>HOSTELS</h3>
                        <p className='text-lg flex flex-wrap'>
                            The Institute's main campus boasts five well-appointed hostels: Sutlej, Beas, Chenab, Raavi, and Brahmaputra Hostels. These hostels are thoughtfully designed to ensure comfortable lodging and boarding for our students. Within each hostel, you will find water coolers and RO systems, providing easy access to clean and refreshing drinking water. Additionally, a common room in each hostel offers a space for indoor recreation and games.
                        </p>
                        <p className='text-lg flex-wrap'>
                            Our hostel complex goes beyond the essentials, with shops conveniently located on-site to cater to the residents' basic needs. Furthermore, we provide a complimentary laundry facility, easing the burden of daily chores. The day-to-day management of the hostels is entrusted to a dedicated committee comprising student representatives, ensuring that your needs are effectively addressed. Each hostel is overseen by a warden, who guides and supports students in managing the affairs of their respective hostels.
                        </p>
                        <p className='text-lg flex-wrap'>
                            At IIT Ropar, we prioritize your comfort and convenience, offering a nurturing environment where your academic pursuits can thrive.
                        </p>
                    </div>
                </div>

                <div className='h-auto flex flex-col  md:flex-row mt-10 md:mt-20  rounded-2xl'>

                    <div className='text-[#EFEFEF] w-full md:w-1/2 rounded-xl px-4'>
                        <h3 className='w-full flex items-center justify-center py-4 flex-wrap font-bold'>MESS</h3>
                        <p className='text-lg flex-wrap'>
                            At our esteemed institute, we take immense pride in providing three exceptional mess facilities known as Annapurna. These messes are designed to offer a truly delightful dining experience, boasting spacious and air-conditioned dining rooms that create a comfortable and inviting ambience for our students.
                        </p>
                        <p className='text-lg flex-wrap'>
                            Hygiene and food safety are of paramount importance to us. Our kitchens are equipped with state-of-the-art facilities and are meticulously maintained to uphold the highest standards of cleanliness. Our dedicated staff members adhere to strict protocols to ensure that the food served is not only delicious but also prepared in a hygienic manner.
                        </p>
                        <p className='text-lg flex-wrap'>
                            Recognizing the diverse population of students in our hostels, we strive to offer a menu that caters to a wide range of tastes and dietary preferences. Our culinary repertoire encompasses a rich variety of both vegetarian and non-vegetarian dishes, carefully curated from different regions of the country. By doing so, we aim to provide a culinary journey that reflects the cultural diversity and culinary traditions of India, ensuring that every student finds something to satisfy their palate.

                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex items-center justify-center px-10'>
                        <Carousel>
                            <Carousel.Item interval={3000}>
                                {/* <img
                                    className="d-block w-100 rounded-xl"
                                    src={mess}
                                    alt="First slide"
                                /> */}
                                <div className='w-full flex items-center justify-center'>
                                    <div className='flex basis-[500px]'>
                                        <img src={mess} alt="" className='w-[100%] h-[410px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                {/* <img
                                    className="d-block w-100 rounded-xl"
                                    src={mess_interior}
                                    alt="First slide"
                                /> */}
                                <div className='w-full flex items-center justify-center'>
                                    <div className='flex basis-[500px]'>
                                        <img src={mess_interior} alt="" className='w-[100%] h-[410px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                {/* <div className='h-auto flex mt-20 bg-white shadow-2xl rounded-2xl'>

                    <div className='w-1/2 border border-black px-4'>
                        <h3 className='w-full flex items-center justify-center py-4 flex-wrap font-bold'>EVENTS</h3>
                        <h4 className='font-bold'>FESTIVALS</h4>
                        <p className='text-lg flex-wrap'>
                        At our institute, we celebrate a multitude of festivals within our premises, fostering a vibrant and inclusive atmosphere. We believe in embracing the diversity of our student community and providing a platform for cultural exchange and celebration.
                        </p>
                        <h4 className='font-bold'>GENERAL CHAMPIONSHIP</h4>
                        <p className='text-lg flex-wrap'>
                        To promote friendly competition and camaraderie, we organize a general championship that encompasses sports, cultural activities, literary events, and technical competitions among the different hostels. This championship serves as an opportunity for students to showcase their talents, skills, and teamwork while fostering a spirit of healthy competition and sportsmanship.
                        </p>
                        <h4 className='font-bold'>SAMAGAMS</h4>
                        <p className='text-lg flex-wrap'>
                        Furthermore, we organize "Samagams" within the hostels, which are interactive events designed to engage and bring together hostel residents. These events offer a platform for students to connect, participate in various activities, and form lasting bonds with their fellow residents.
                        </p>
                    </div>
                    <div className='w-1/2 border border-black flex items-center justify-center'>
                        HELLO
                    </div>
                </div>  */}

            </div>
        </div>
    )
}

export default Hostel
