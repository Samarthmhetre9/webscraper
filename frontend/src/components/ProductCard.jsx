import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ product }) {
  return (
      <div className="px-1 py-2">
        <Card.Img
          className="img-fluid col d-flex justify-content-center bg-transperant px-4 py-2"
          variant="top"
          src={product?.image_url}
          alt={product?.title}
          style={{ maxHeight: "250px" , maxWidth:"250px"}}
        />
      <Card.Body className="my-3">
        <Card.Title>{product?.title.slice(0,25).concat("...")}</Card.Title>
        <div className="fs-6 fw-bold font-weight-bold my-2 d-flex">
          <span className="mx-2 opacity-50">{product?.domain}</span>
          <span className="mx-5">{''}</span>
          <span className="mx-3">${product?.price}</span>
        </div>
        <a href={`product/${product?.p_id}`}>
        <Button className="btn btn-danger mb-3">Show product</Button>
        </a>
      </Card.Body>
    </div>
  );
}

export default ProductCard;
