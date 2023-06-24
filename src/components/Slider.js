import Carousel from 'react-bootstrap/Carousel';
import { campus1, festival9, festival6, Slider4, IIT_ROPAR, gc3, festival2, festival4, samagam4, raavi } from '../assets';
function Slider() {
    return (
        <div className='h-[80%]  w-full'>
            <Carousel className='h-full w-full object-cover overflow-hidden'>
                {/* <Carousel.Item interval={2000}>
                    <img
                        className="h-[100%] w-[100%] object-cover"
                        src={campus1}
                        alt="First slide"
                        
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="h-[100%] w-[100%] object-cover"
                        src={festival9}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="h-[100%] w-[100%] object-cover"
                        src={festival6}
                        alt="Third slide"
                    />
                </Carousel.Item> */}

                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={raavi} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={festival9} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={festival6} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={gc3} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={festival2} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={festival4} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-full flex items-center justify-center'>
                        <div className=''>
                            <img src={samagam4} alt="" className='w-[100vw] h-[100vh] border object-cover z-[10]' />
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>

    );
}

export default Slider;