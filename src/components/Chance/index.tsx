interface ChanceItem {
    bg: string;
    header: string;
    volume: string;
    percentage: number;
}

interface ChanceProps {
    item: ChanceItem;
}

const Chance = ({ item }: ChanceProps) => {
    return (
        <div className="border-[1px] border-gray-200 rounded-md overflow-hidden">
            <div className="relative h-[80px]">
                <img src={item.bg} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-between items-center text-white p-4 bg-black/30">
                    <span className='text-lg text-white font-semibold leading-[22px]'>{item.header}</span>
                    <div>
                        <p className='m-0 text-xl text-white font-semibold'>{item.percentage}%</p>
                        <p className='m-0 text-sm'>chance</p>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-[50px] flex justify-between px-2 gap-3 mb-2">
                <div className="py-2 px-2 w-1/2 cursor-pointer text-green-700 bg-green-200 rounded-md font-semibold text-center">
                    <span>Buy Yes</span>
                </div>
                <div className="py-2 px-2 w-1/2 cursor-pointer text-red-700 bg-red-200 rounded-md font-semibold text-center">
                    <span>Buy No</span>
                </div>
            </div>
            <div className="bg-white p-2 border-t-[1px] text-sm text-gray-400">
                <span>${item.volume} volume</span>
            </div>
        </div>
    );
};

export default Chance;
