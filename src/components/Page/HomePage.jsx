import React from "react";
import { Link } from 'react-router-dom';
import videoHomepage from "../../assets/video.mp4"
import { GrLocation } from "react-icons/gr";
import Icon from '../icon';
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import AirportDropdown from "../DropDown";
const links = [
    { name: 'Đặt vé', href: '/' },
    { name: 'Gửi hành lý', href: '' },

]

export default function HomePage() {
    const [value, setValue] = React.useState("");
    const [show, setShow] = React.useState(false);

    const handleAirportSelect = (selectedAirport) => {
        setValue(selectedAirport); // Cập nhật giá trị khi người dùng chọn từ dropdown
        setShow(false); // Ẩn dropdown khi đã chọn
    };

    const onInputChange = (event) => {
        const value = event.currentTarget.value;
        setValue(value);
        setShow(true); // Hiển thị dropdown khi người dùng nhập
    };

    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-20 w-full min-h-screen flex flex-col md:flex-row ">
            <video autoPlay muted loop className='absolute w-screen h-4/5 object-cover opacity-3 top-0 left-0 bottom-0 right-0 '>
                <source src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className="absolute ml-44 mt-14 max-w-7xl px-6 lg:px-8 flex-col items-center justify-center">
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
                                        <GiAirplaneDeparture className='absolute top-1 -left-2' />
                                        <input className="border-b-2 border-gray-500 pl-4 focus:outline-none" type='text' placeholder='Enter here...'
                                            onFocus={() => setShow(true)}
                                            onBlur={() =>
                                                setTimeout(() => {
                                                    setShow(false);
                                                }, 150)
                                            }
                                            value={value}
                                            onChange={onInputChange}>

                                        </input>
                                        {show && <AirportDropdown value={value} onSelect={handleAirportSelect} />}
                                    </div>
                                </div>
                                <div className='flex items-center w-6 h-6 relative top-1/2 mx-4 '>
                                    <Icon className="" />
                                </div>
                                <div className='grid grid-row-2 gap-1'>
                                    <label htmlFor='city' className='block text-text-color '>Đến:</label>
                                    <div className='relative'>
                                        <GiAirplaneArrival className='absolute top-1 -left-2' />
                                        <input className="border-b-2 border-gray-500 pl-4 focus:outline-none" type='text' placeholder='Enter here...' />
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

            </div>


        </div>
    )
}