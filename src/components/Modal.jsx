import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function({children, buttonCaption}, ref) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })

  return createPortal((
      <dialog ref={dialog} id="modal" className="backdrop:bg-stone-900/90 rounded-md shadow-md p-4">
        {children}
        <form method="dialog" className="flex justify-end mt-5">
          <Button>
            {buttonCaption || 'Close'}
          </Button>
        </form>
      </dialog>
    ), document.getElementById('modal-root')
  )
});

export default Modal;