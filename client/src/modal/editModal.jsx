import { useState } from "react";
import Modal from "react-modal";
import { useUserContext } from "../context/userContext";
import { updatePortal } from "../apiCalls";

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
  const { setAllPortals } = useUserContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    version: curr.version,
    title: curr.title,
    desc: curr.desc,
  });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updatePortalHandler = async (e) => {
    e.preventDefault();
    await updatePortal(curr._id, formData, setAllPortals);
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
        <div className="w-full h-auto gap-10">
          <form className="flex flex-col w-full max-w-md gap-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="version"
                className="text-gray-500 font-medium text-md"
              >
                Version
              </label>
              <input
                id="version"
                type="text"
                placeholder="Model Id"
                name="version"
                value={formData.version}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="border border-gray-400 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="title"
                className="text-gray-500 font-medium text-md"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Model Id"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="border border-gray-400 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="desc"
                className="text-gray-500 font-medium text-md"
              >
                Description
              </label>
              <textarea
                id="desc"
                placeholder="Model Id"
                name="desc"
                value={formData.desc}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="border border-gray-400 p-1 rounded-md resize-none h-32"
              ></textarea>
            </div>

            <button
              className="p-2 mt-2 bg-blue-800 text-white rounded-md w-full"
              onClick={updatePortalHandler}
            >
              Update Portal
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
