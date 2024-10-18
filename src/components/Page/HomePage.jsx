import { Link } from 'react-router-dom';
import videoHomepage from "../../assets/video.mp4"
const links = [
    { name: 'Đặt vé', href: '/book_ticket' },
    { name: 'Gửi hành lý', href: '' },

]


export default function HomePage() {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-20 w-full min-h-screen flex flex-col md:flex-row ">
            <video autoPlay muted loop>
                <source src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">BOOK YOUR FLIGHT</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Đưa bạn đến bất cứ đâu
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <Link key={link.name} to={link.href} className='transition-transform duration-300 ease-in-out hover:translate-x-0.5 hover:text-violet-500'>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </Link>
                        ))}
                    </div>
                    {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl> */}
                </div>
            </div>

            <div className="mx-auto float-right">

            </div>
        </div>
    )
}