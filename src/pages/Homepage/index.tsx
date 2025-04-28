import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import BetCard from '../../components/BetCard';
import Chance from '../../components/Chance';
import Modal from '../../components/Modal';
import LineChart from '../../components/Chart';
// import ApexChart from "../../components/Chart/ApexChart";

import BG3 from '../../assets/images/bg/03.png';

import {
    BET_DATA,
    CHANCE_DATA,
    CHANCE_THREE
} from '../../constants/HomePage';

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* <---- Header ---> */}
            <div className="p-4 sm:flex justify-center items-end gap-6 bg-red-600">
                <div className="flex justify-center items-center gap-3">
                    <div className="bg-white w-6 h-6 rounded-full"></div>
                    <p className="m-0 text-white text-2xl font-bold">LoonieBets</p>
                </div>
                <div className="flex justify-center items-end">
                    <p className="m-0 text-gray-100 text-lg">Bet on all things Canada - Under Construction</p>
                </div>
            </div>

            {/* <---- Sub Header ---> */}
            <div className='shadow-md py-1'>
                <div className='xl:max-w-6xl lg:max-w-4xl xs:max-w-[90%] m-auto'>
                    <div className="sm:flex justify-between items-center">
                        <div className='hidden sm:block text-lg text-black font-semibold'>
                            <span>Markets</span>
                        </div>
                        <div className='flex items-center gap-8 text-md text-black'>
                            <a href="#" className='cursor-pointer'>Telegram</a>
                            <a href="#" className='cursor-pointer'>X</a>
                            <a href="#" className='cursor-pointer'>Docs</a>
                            <div className='px-3 bg-black text-white rounded-md cursor-pointer'>
                                <span>Log in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <---- Container ---> */}
            <div className='xl:max-w-6xl lg:max-w-4xl xs:max-w-[90%] m-auto'>
                <div className='w-100 mt-[80px] border-[1px] border-gray-200 rounded-md'>
                    <div className='md:block lg:flex justify-between items-center p-4 gap-4'>

                        {/* <---- Bet Cards ---> */}
                        <div className="lg:w-1/2">
                            <h1 className='text-2xl text-black font-semibold'>Who will be the next prime minister?</h1>
                            <div className="pr-2 mb-3">
                                {BET_DATA.map((item, index) => (
                                    <BetCard
                                        key={index}
                                        item={item}
                                        openModal={openModal}
                                    />
                                ))}
                            </div>
                            <div className='text-md font-semibold flex items-center cursor-pointer'>
                                <span>More</span>
                                <MdOutlineKeyboardArrowDown className='text-lg mt-1' />
                            </div>
                        </div>

                        {/* <---- Chart ---> */}
                        <div className="lg:w-1/2 text-center">
                            {/* <ApexChart /> */}
                            <LineChart />
                        </div>
                    </div>
                </div>

                {/* <---- Chance ---> */}
                <div className='w-100 my-[40px]'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:grid-cols-2">
                        {CHANCE_DATA.map((item, index) => (
                            <Chance
                                key={index}
                                item={item}
                            />
                        ))}
                        <div className="border-[1px] border-gray-200 rounded-md overflow-hidden">
                            <div className="relative h-[80px]">
                                <img src={BG3} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex justify-between items-center text-white p-4 bg-black/30">
                                    <span className='text-lg text-white font-semibold'>Stanley Cup Champion 2024</span>
                                </div>
                            </div>
                            <div className="bg-white px-2 mb-2 py-1">
                                {
                                    CHANCE_THREE.map((item, index) => (
                                        <div className='flex justify-between items-center w-full py-1' key={index}>
                                            <div className='text-sm text-gray-800 font-semibold w-1/2'>{item.text}</div>
                                            <div className='flex justify-between items-center gap-3 w-1/2'>
                                                <div className='text-sm text-black font-bold'>{item.percentage}%</div>
                                                <div className='flex items-center gap-2'>
                                                    <div className="px-2 text-sm cursor-pointer text-green-700 bg-green-200 rounded-md font-semibold text-center">
                                                        <span>Yes</span>
                                                    </div>
                                                    <div className="px-2 text-sm cursor-pointer text-red-700 bg-red-200 rounded-md font-semibold text-center">
                                                        <span>No</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="bg-white p-2 border-t-[1px] text-sm text-gray-400">
                                <span>$159 volume</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    )
}

export default HomePage
