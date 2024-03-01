import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logoIcon from "../assets/icons/logo.svg";
import mailIcon from "../assets/icons/mail.svg";


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setIsSubmitting(false);
    setEmail('');
    handleClose();
  };


  return (
    <>
      <Button variant="primary" className='btn btn-dark rounded-3 w-full fs-3' onClick={handleShow}>
        Track
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                <img 
                  src={logoIcon}
                  alt="logo"
                  width={28}
                  height={28}
                />
          <Modal.Title>Stay updated with product pricing alerts right in your inbox!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="text-sm text-secondary mt-2">
              Never miss a bargain again with our timely alerts!
            </p>

            <form className="d-flex flex-column mt-5" onSubmit={handleSubmit}>
              <label htmlFor="email" className="text-sm font-medium text-secondary">
                Email address
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <img 
                    src={mailIcon}
                    alt='mail'
                    width={18}
                    height={18}
                  />
                </span>
                <input 
                  required
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className='form-control'
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {isSubmitting ? 'Submitting...' : 'Track'}
              </button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;