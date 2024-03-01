import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import logoIcon from "../assets/icons/logo.svg";
import mailIcon from "../assets/icons/mail.svg";

function ModalC() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setIsSubmitting(false);
    setEmail("");
    handleClose();
  };

  return (
    <>
      <div className="d-grid gap-2 rounded-10 mt-2 fs-3">
      <button type="submit" className="btn btn-dark" onClick={handleShow}>
        Track
      </button>
      </div>
      <Modal show={show} onHide={handleClose} className="px-2">
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src={logoIcon}
              alt="logo"
              width={36}
              height={36}
              className="mb-2"
            />
            <span className="fs-3 opacity-75"> {' '}Track Product</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-3">
          <h4 className="fs-3">
            Stay updated with product pricing alerts right in your inbox!
          </h4>

          <p className="text-sm text-secondary mt-4">
            Never miss a bargain again with our timely alerts!
          </p>

          <form className="d-flex flex-column mt-4" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="text-sm font-medium text-secondary"
            >
              Email address
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <img src={mailIcon} alt="mail" width={18} height={18} />
              </span>
              <input
                required
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-dark">
              {isSubmitting ? "Submitting..." : "Track"}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalC;
