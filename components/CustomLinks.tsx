'use client'

import Link from "next/link";
import { useState } from "react";

interface ModalProps {
    content: React.ReactNode;
    onClose?: () => void;
}

const CustomLinks: React.FC<ModalProps> = ({ content, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(true);
        onClose?.();
    };

  return (
    <div className={`fixed z-50 inset-0 overflow-y-auto ${isOpen ? `opacity-100`: `opacity-0`}`} aria-modal='true' role="dialog">
       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:bblock sm:p-0">
        {/* Modal content */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden='true' />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden='true'>
                &#8203
            </span>
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
                    {content}
                </div>
                <div className="bg-gray-50 px-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>    
       </div> 
    </div>
);
};

export default CustomLinks;
