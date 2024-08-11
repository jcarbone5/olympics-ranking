import { ReactNode } from "react";

//Icons
import Close from "@/assets/icons/close";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-xl h-96 p-6 bg-white rounded-lg mx-6 md:mx-0 overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <Close className="w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
};
