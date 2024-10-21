import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import videoHomepage from "../../assets/video.mp4"
import { GrLocation } from "react-icons/gr";
import Icon from '../icon';
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import AirportDropdown from "../DropDown";
const links = [
    { name: 'Đặt vé', href: '/' },
    { name: 'Gửi hành lý', href: '' },

]

export default function HomePage() {
    const [departure, setDeparture] = React.useState("");
    const [showdeparture, setShowdeparture] = React.useState(false);
    const [destination, setDestination] = React.useState("");
    const [showdestination, setShowDestination] = React.useState(false);

    const handleAirportSelect = (selectedAirport, type) => {
        if (type === "departure") {
            setDeparture(selectedAirport);
            setShowdeparture(false);
        } else if (type === "destination") {
            setDestination(selectedAirport);
            setShowDestination(false);
        }
    };
    const check = () => {
        if (departure !== "" && destination !== "") {
            if (departure === destination) {
                // Hành động khi departure và destination giống nhau
                alert("Departure và Destination không thể giống nhau!");
                // Reset một trong các giá trị nếu cần
                setDestination(""); // Hoặc setDeparture("") tùy thuộc vào yêu cầu
            }
            if (departure === "") {
                alert("Vui lòng chọn điểm cất cánh");
            }
            if (destination === "") {
                alert("Vui lòng chọn điểm hạ cánh");
            }
        }

    }

    const onInputChange = (event, type) => {
        const value = event.currentTarget.value;

        if (type === "departure") {
            setDeparture(value);
            setShowdeparture(true); // Hiển thị dropdown cho departure
        } else if (type === "destination") {
            setDestination(value);
            setShowDestination(true); // Hiển thị dropdown cho destination
        }
    };
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-20 w-full min-h-screen flex flex-col md:flex-row ">
            <video autoPlay muted loop className='absolute w-screen h-4/5 object-cover opacity-3 top-0 left-0 bottom-0 right-0 '>
                <source src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className="absolute ml-44 mt-12 max-w-full px-6 lg:px-8 flex-col items-center justify-center">
                <div className='relative'>
                    <div className="max-w-2xl lg:mx-0  ">
                        <h2 className="text-base font-bold tracking-tight text-white sm:text-3xl ">BOOK YOUR FLIGHT</h2>
                        <p className="mt-3 text-lg leading-5 text-white">
                            Đưa bạn đến bất cứ đâu
                        </p>
                    </div>
                    <div className="mx-auto mt-5 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <Link key={link.name} to={link.href} className='transition-transform duration-300 ease-in-out hover:translate-x-0.5 hover:text-[#1c89e3]'>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='relative px-8 py-8 bg-white-color rounded-xl grid grid-cols-3 gap-4'>
                        <div className='col-span-2 flex justify-center space-x-5'>
                            <div className='flex justify-center'>
                                <div className='grid grid-row-2 gap-1'>
                                    <label htmlFor='city' className='block text-text-color '>Từ:</label>
                                    <div className='relative'>
                                        <FaPlaneDeparture className='absolute top-1 -left-2' />
                                        <input className="border-b-2 border-gray-500 pl-4 focus:outline-none" type='text' placeholder='Enter here...'
                                            onFocus={() => setShowdeparture(true)}
                                            onBlur={() =>
                                                setTimeout(() => {
                                                    setShowdeparture(false);
                                                }, 150)
                                            }
                                            value={departure}
                                            onChange={(event) => onInputChange(event, "departure")}>

                                        </input>
                                        {showdeparture && <AirportDropdown value={departure} onSelect={handleAirportSelect} className='absolute' />}
                                    </div>
                                </div>
                                <div className='flex items-center w-6 h-6 relative top-1/2 mx-4 '>
                                    <Icon className="" />
                                </div>
                                <div className='grid grid-row-2 gap-1'>
                                    <label htmlFor='city' className='block text-text-color '>Đến:</label>
                                    <div className='relative'>
                                        <FaPlaneArrival className='absolute top-1 -left-2' />
                                        <input className="border-b-2 border-gray-500 pl-4 focus:outline-none" type='text' placeholder='Enter here...
                                        '
                                            onFocus={() => setShowDestination(true)}
                                            onBlur={() =>
                                                setTimeout(() => {
                                                    setShowDestination(false);
                                                },)
                                            }
                                            value={destination}
                                            onChange={(event) => onInputChange(event, "destination")}>
                                        </input>
                                        {showdestination && <AirportDropdown value={destination} onSelect={handleAirportSelect} className='absolute' />}
                                    </div>
                                </div>
                                <div className='flex items-center w-6 h-6 relative top-1/2 mx-4 '>
                                    <Icon className="" />
                                </div>
                            </div>
                        </div>

                        <div className='destinationInput'>
                            <label htmlFor='city'>Từ:</label>
                            <div className='input flex'>
                                <div className='input flex'>
                                    <input type='text' placeholder='Enter here...' />
                                    <GrLocation />
                                </div>
                            </div>
                        </div>

                        <div className='destinationInput'>
                            <label htmlFor='city'>Từ:</label>
                            <div className='input flex'>
                                <div className='input flex'>
                                    <input type='text' placeholder='Enter here...' />
                                    <GrLocation />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div >


        </div >
    )
}