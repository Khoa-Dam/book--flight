import { Link } from 'react-router-dom';
import videoHomepage from "../../assets/video.mp4"
const links = [
    { name: 'Đặt vé', href: '/' },
    { name: 'Gửi hành lý', href: '' },

]


export default function HomePage() {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-20 w-full min-h-screen flex flex-col md:flex-row ">
            <video autoPlay muted loop className='absolute w-screen h-4/5 object-cover opacity-3 top-0 left-0 bottom-0 right-0 '>
                <source src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className="absolute mx-auto mt-0.5 max-w-7xl px-6 lg:px-8">
                <div className="m-auto text-center max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">BOOK YOUR FLIGHT</h2>
                    <p className="mt-6 text-lg leading-5 text-white">
                        Đưa bạn đến bất cứ đâu
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <Link key={link.name} to={link.href} className='transition-transform duration-300 ease-in-out hover:translate-x-0.5 hover:text-[#1c89e3]'>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='cardDiv'>
                    <div className='destinationInput'>
                        <label htmlFor="city"> Search your destination:</label>
                        <div className='input flex'>
                            <input type="text" placeholder='Enter name here' />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}