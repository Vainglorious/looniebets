interface BetItem {
    avatar: string;
    name: string;
    volume: string;
    percentage: number;
}

interface BetCardProps {
    item: BetItem;
    openModal: Function
}

const BetCard = ({ item, openModal }: BetCardProps) => {
    return (
        <div className="sm:flex justify-between items-center mt-4">
            <div className="flex items-center justify-between gap-4">
                <div className="flex gap-4 items-center">
                    <div>
                        <img src={item.avatar} className="w-10 h-10 rounded-md" />
                    </div>
                    <div>
                        <p className="m-0 text-lg text-black font-semibold">{item.name}</p>
                        <p className="m-0 text-sm text-gray-600">${item.volume} vol</p>
                    </div>
                </div>
                <div className="block md:hidden text-2xl text-black font-semibold">
                    <span>{item.percentage}%</span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-3 sm:mt-0 gap-4">
                <div className="hidden md:block text-2xl text-black font-semibold">
                    <span>{item.percentage}%</span>
                </div>
                <div
                    className="py-1 px-2 cursor-pointer text-green-700 bg-green-200 rounded-md font-semibold"
                    onClick={() => openModal('green')}
                >
                    <span>Buy Yes</span>
                </div>
                <div
                    className="py-1 px-2 cursor-pointer text-red-700 bg-red-200 rounded-md font-semibold"
                    onClick={() => openModal('red')}
                >
                    <span>Buy No</span>
                </div>
            </div>
        </div>
    );
};

export default BetCard;
