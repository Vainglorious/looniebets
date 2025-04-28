import React, { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Modal Overlay */}
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex justify-center items-center">
                <div
                    ref={modalRef}
                    className="bg-white rounded-lg p-6 w-[60%] max-w-2xl relative"
                    >
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">Welcome to Loonie Bets</h2>
                        <button
                            className="text-black text-xl absolute top-0 right-2"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <p className="mt-4">Sorry our Blockchain servers are currently down...</p>
                    <p className="mt-4">Pollievre here: 0xF5adA39dA12AC611eAd2361Eb4c87B6A8F84739B</p>
                    <p className="mt-4">Mark Carney here: 0x342a6E47DaFcEdca1F2388B9F24EecF0dDf8530e</p>
                    <p className="mt-4">USDC on ETH L1 Only</p>

                    <p className="mt-4">Or if you are blockchain noob; etransfer your bookie.</p>

                    <p className="mt-4">Market closes at 7pm MST</p>

                    <div className="mt-4 flex justify-end gap-4">
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-md"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
