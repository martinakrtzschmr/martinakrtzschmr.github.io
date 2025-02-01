import { Dialog } from '@headlessui/react';

const Modal = ({
  isOpen,
  setIsOpen,
  completeButtonRef,
}: {
  isOpen: boolean;
  setIsOpen: Function;
  completeButtonRef: React.MutableRefObject<null>;
}) => {
  return (
    <Dialog
      className="flex fixed inset-0 z-10 overflow-y-auto"
      initialFocus={completeButtonRef}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-center min-h-screen w-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-120 p-8 mx-auto">
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog description</Dialog.Description>
          <button
            ref={completeButtonRef}
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
