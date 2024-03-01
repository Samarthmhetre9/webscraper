import heartIcon from "../assets/icons/red-heart.svg";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import shareIcon from "../assets/icons/share.svg";
import starIcon from "../assets/icons/star.svg";
import commentIcon from "../assets/icons/comment.svg";
import priceTagIcon from "../assets/icons/price-tag.svg";
import chartIcon from "../assets/icons/chart.svg";
import arrowUpIcon from "../assets/icons/arrow-up.svg";
import arrowDownIcon from "../assets/icons/arrow-down.svg";
import bag from "../assets/icons/bag.svg";
import PriceInfoCard from "../components/PriceInfoCard";
import ModalC from "../components/Modal";
import { useState , useEffect } from "react";
import {useParams} from "react-router-dom";

const ProductDetails = () => {

  const [product ,setProduct] = useState([]);
  const [error , setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products/${id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setProduct(jsonData);
        console.log(jsonData)
        
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row mx-5">
        <div className="col my-2 px-5 py-5">
          <img
            src={product.image_url}
            alt={product.title}
            width={400}
            height={475}
            className="img-fluid col d-flex justify-content-center bg-transperant px-2 py-1"
          />
        </div>

        <div className="col my-5">
          <div className="justify-content-between align-items-start gap-3 pb-3">
            <div>
              <h3 className="fs-4 fw-bold my-3">{product.title}</h3>
              <a
                href={product.source_url}
                target="_blank"
                className="text-black text-decoration-none"
                rel="noreferrer"
              >
                Visit Product
              </a>
            </div>

            <div className="d-flex mt-3">
              <div className="d-flex align-items-center bg-light rounded-3 px-2">
                <img src={heartIcon} alt="heart" width={25} height={25} />
                <p className="font-weight-bold fs-5 text-danger my-1">
                  {product.reviewsCount}
                </p>
              </div>

              <div className="p-2 bg-light rounded mx-3">
                <img src={bookmarkIcon} alt="bookmark" width={26} height={26} />
              </div>

              <div className="p-2 bg-light rounded mx-2">
                <img src={shareIcon} alt="share" width={26} height={26} />
              </div>
            </div>
          </div>

          <hr />

          <div className="d-flex align-items-center flex-wrap gap-5">
            <div className="d-flex flex-column gap-2">
              <p className="text-secondary fs-2 fw-bold">
                {product.currency} {product.price}
              </p>
              <p className="text-black opacity-50 fs-3">
                <del>{product.currency} {product.old_price}</del>
              </p>
            </div>

            <div className="d-flex flex-column">
              <div className="d-flex">
                <div className="d-flex align-items-center gap-1 bg-light px-1 rounded-3">
                  <img src={starIcon} alt="star" width={25} height={25}/>
                  <p className="text-primary fs-5 fw-semibold my-1">
                    {product.stars || "25"}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-1 bg-light px-1 rounded-3 mx-4">
                  <img src={commentIcon} alt="comment" width={22} height={22} />
                  <p className="text-secondary fs-5 fw-semibold my-2">
                    {product.reviewsCount} Reviews
                  </p>
                </div>
              </div>

              <p className="text-black opacity-50 fs-6 my-4">
                <span className="text-success fw-semibold">93% </span> of buyers
                have recommended this.
              </p>
            </div>
          </div>

          <hr />

          <div className="my-7 d-flex flex-column">
            <div className="d-flex row">
              <div className="col">
              <PriceInfoCard
                title="Current Price"
                iconSrc={priceTagIcon}
                value={`${product?.currency} ${product?.price}`}
              />
              <PriceInfoCard
                title="Average Price"
                iconSrc={chartIcon}
                value={`${product?.currency} ${product.price}`}
              />
              </div>
              <div className="col">
              <PriceInfoCard
                title="Highest Price"
                iconSrc={arrowUpIcon}
                value={`${product?.currency} ${product.old_price}`}
              />
              <PriceInfoCard
                title="Lowest Price"
                iconSrc={arrowDownIcon}
                value={`${product?.currency} ${product.price}`}
              />
              </div>
            </div>
          </div>

          <ModalC productId={product.p_id} />
        </div>
      </div>

      <div className="d-flex flex-column mx-5">
        <div className="d-flex flex-column my-4">
          <h3 className="text-secondary fs-3 fw-bold">Product Description</h3>

          <div className="d-flex flex-column my-2">
            {product.description}
          </div>
        </div>
      </div>
      <div className="my-5 vh-25 d-flex justify-content-center align-items-center">
      <button className="btn btn-dark px-3">
          <img src={bag} alt="check" width={28} height={28} className="mb-1" />
          <a href="/" className="text-white fs-5 text-decoration-none">
            Buy Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
