import { useState } from "react";
import Modal from "react-modal";
import { deletePortal } from "../apiCalls";
import { useUserContext } from "../context/userContext";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba( 255, 255, 255, 0.17 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 2px )",
  },
  content: {
    top: "50%",
    left: "50%",
    width: "26rem",
    maxWidth: "90%",
    height: "fit-content",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: ".7rem",
    padding: "0",
    border: "none",
    padding: "1.2rem",
    border: "2px solid #1d4ed8",
  },
};

Modal.setAppElement(document.getElementById("modal"));

export default function CustomModal({ children, curr }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { setAllPortals } = useUserContext();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deletePortalHandler = async (e) => {
    e.preventDefault();
    await deletePortal(curr._id, setAllPortals);
    closeModal();
  };
  return (
    <div>
      <div onClick={() => openModal()}>{children}</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-full h-auto flex flex-col gap-10">
          <div className="text-2xl text-center font-medium">
            Are you sure you want to delete?
          </div>

          <div className="flex items-center gap-3 justify-center">
            <button
              className="py-2 px-6 mt-2 bg-red-500 text-white rounded-md"
              onClick={deletePortalHandler}
            >
              Yes
            </button>
            <button
              className="py-2 px-6 mt-2 bg-gray-500 text-white rounded-md"
              onClick={closeModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
