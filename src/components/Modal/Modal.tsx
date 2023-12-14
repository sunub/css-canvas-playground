import ReactFocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

function Modal() {
  return (
    <ReactFocusLock>
      <RemoveScroll>
        <div>Modal</div>
      </RemoveScroll>
    </ReactFocusLock>
  );
}

export default Modal;
