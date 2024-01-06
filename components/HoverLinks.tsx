'use client'

import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { menuBarLinks } from "@/constants";
import { title } from "process";

interface HoverLinksProps {
  isOpen: boolean;
  closeModal: () => void;
}

const HoverLinks:React.FC<HoverLinksProps> = ({ isOpen, closeModal }) => {

  const [items, setItems] = useState([]);
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-300'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5' onMouseLeave={closeModal}>
                <h2>Items would be here</h2>
                {menuBarLinks.map((link) => (
                  <div key={link.title}>
                    <h2>{link.title}</h2>
                  </div>
                ))}
                </Dialog.Panel>
              </Transition>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
};

export default HoverLinks;
