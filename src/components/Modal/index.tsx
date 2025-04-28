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
                    className="bg-white rounded-lg p-6 w-80 md:w-96 relative"
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">Welcome</h2>
                        <button
                            className="text-black text-xl absolute top-0 right-2"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <p className="mt-4">USDC on ETH L1 Only</p>
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
