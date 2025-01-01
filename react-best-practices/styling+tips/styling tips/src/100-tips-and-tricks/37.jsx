import React from "react";

const Profile = () => {
  return (
    <Modal>
      <Modal.SaveAction>
        <a className="ksdfhjk" href="/go/to/some/path">
          Save
        </a>
      </Modal.SaveAction>
      <Modal.CancelAction>
        <button>Cancel</button>
      </Modal.CancelAction>
    </Modal>
  );
};

const Modal = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });
};

const Cancel = ({ children }) => {
  return children;
};

const Save = ({ children }) => {
  return children;
};

Modal.CancelAction = Cancel;
Modal.SaveAction = Save;
