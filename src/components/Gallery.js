import React, { useState, useEffect } from 'react'
import './gallery.css'
import { Slider1 } from '../assets'
import { festival1,festival10,festival2,festival3,festival4,festival5,festival6,festival7,festival8,festival9, samagam1,samagam2,samagam3,samagam4,gc1,gc2,gc3, mess,mess_interior, hostel_inside, raavi, sutlej, campus1, campus2, drone_hostel_view1, drone_hostel_view2, gym, rooms} from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {
    
    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 80
        })
      },[])

    const cards_array = [
        {
            id: 1,
            image_name: festival1,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 2,
            image_name: festival2,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 3,
            image_name: festival3,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 4,
            image_name: festival4,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 5,
            image_name: festival5,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 6,
            image_name: festival6,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 7,
            image_name: festival7,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 8,
            image_name: festival8,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 9,
            image_name: festival9,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 10,
            image_name: festival10,
            alt_name: "Festivals",
            data_name: "festival"
        },
        {
            id: 11,
            image_name: samagam1,
            alt_name: "Samagams",
            data_name: "samagam"
        },
        {
            id: 12,
            image_name: samagam2,
            alt_name: "Samagams",
            data_name: "samagam"
        },
        {
            id: 13,
            image_name: samagam3,
            alt_name: "Samagams",
            data_name: "samagam"
        },
        {
            id: 14,
            image_name: samagam4,
            alt_name: "Samagams",
            data_name: "samagam"
        },
        {
            id: 15,
            image_name: gc1,
            alt_name: "GC",
            data_name: "gc"
        },
        {
            id: 16,
            image_name: gc2,
            alt_name: "GC",
            data_name: "gc"
        },
        {
            id: 17,
            image_name: gc3,
            alt_name: "GC",
            data_name: "gc"
        },
        {
            id: 18,
            image_name: raavi,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 19,
            image_name: sutlej,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 20,
            image_name: gym,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 21,
            image_name: rooms,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 22,
            image_name: hostel_inside,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 23,
            image_name: drone_hostel_view1,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 24,
            image_name: drone_hostel_view2,
            alt_name: "Hostels",
            data_name: "hostel"
        },
        {
            id: 25,
            image_name: mess,
            alt_name: "Mess",
            data_name: "mess"
        },
        {
            id: 26,
            image_name: mess_interior,
            alt_name: "Mess",
            data_name: "mess"
        },
        {
            id: 26,
            image_name: campus1,
            alt_name: "Campus",
            data_name: "campus"
        },
        {
            id: 27,
            image_name: campus2,
            alt_name: "Campus",
            data_name: "campus"
        },

        

    ]

    const [items, setItems] = useState(cards_array);

    const filterItem = (categItem) => {
        if (categItem === "all") {
            setItems(cards_array);
            return;
        }

        const updatedItems = cards_array.filter((curElem) => {
            return curElem.data_name === categItem
        })

        setItems(updatedItems)
    }


    return (
        <div id="gallery" className='w-full h-auto flex flex-col py-[110px] pb-20'>
            <div className='w-full flex items-center justify-center pb-5'>
                {/* <h1 className='w-full flex items-center justify-center font-bold text-[40px] pb-4'>GALLERY</h1> */}
                <div className='w-auto flex flex-col items-center justify-center'>
                    <h1 className='w-full flex items-center justify-center font-bold text-[40px] text-white' data-aos="fade-up">GALLERY</h1>
                    <div className='bg-[#FF0000]  w-[40%] h-[10px] '></div>
                </div>
            </div>
            <div className='box w-full'>
                {/* Filter buttons */}
                <div className='flex justify-center items-center w-full px-10'>
                    <div className="filter_buttons">
                        <button className='active' data-name="all" onClick={() => filterItem("all")}>All</button>
                        <button className='active' data-name="campus" onClick={() => filterItem("campus")}>Campus</button>
                        <button className='active' data-name="hostel" onClick={() => filterItem("hostel")}>Hostels</button>
                        <button className='active' data-name="mess" onClick={() => filterItem("mess")}>Mess</button>
                        <button className='active' data-name="festival" onClick={() => filterItem("festival")}>Festivals</button>
                        <button className='active' data-name="gc" onClick={() => filterItem("gc")}>GC</button>
                        <button className='active' data-name="samagam" onClick={() => filterItem("samagam")}>Samagams</button>
                    </div>
                </div>


                {/* Image Cards */}
                <div className="filterable_cards w-full px-10 md:px-20">
                    {
                        items.map((element) => (
                            <div className='card' data-name={element.data_name}>
                                <img src={element.image_name} alt={element.alt_name} />
                                {/* <div className="card_body">
                                    <h6 className="card_title">Phone</h6>
                                    <p className="card_text">Lorem ipsum dollar...</p>
                                </div> */}
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Gallery
