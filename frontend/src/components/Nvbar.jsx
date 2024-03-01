import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import heart from "../assets/icons/black-heart.svg";
import user from "../assets/icons/user.svg";

const images = [
  { src: search, alt: "search" },
  { src: heart, alt: "heart" },
  { src: user, alt: "user" },
];

function Nvbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <h4>
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Price<span className="text-danger">Wise</span>
          </h4>
        </Navbar.Brand>
        <div className="text-align-right px-5">
          {images.map((image) => {
            return (
              <img
                alt={image.alt}
                src={image.src}
                height={30}
                width={30}
                className="mx-2"
              />
            );
          })}
        </div>
      </Container>
    </Navbar>
  );
}

export default Nvbar;
