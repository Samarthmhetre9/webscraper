import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import arrow_right from "../assets/icons/arrow-right.svg";
import ProductCard from '../components/ProductCard';

const data = []

const StartPage = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-danger">
                Smart Shopping Starts Here:
                <img
                  src={arrow_right}
                  alt="arrow-right"
                  width={16}
                  height={16}
                />
              </p>
              <h1 className="font-weight-bold">
                Unleash the Power of
                <span className="text-danger"> PriceWise</span>
              </h1>
              <p className="mt-6">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
              </p>
              <a href="/search" className='text-decoration-none'>
              <button className='btn btn-danger'>
                Get Started
              </button>
              </a>
            </div>
            <div className="col-md-6 bg-light my-5 rounded-3">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="trending-section">
        <div className="container">
          <h2 className="section-text my-5">Trending</h2>
          <div className="row">
            {data ? data.map((product, index) => (
              <div key={index} className="col-md-4">
                  <ProductCard key={product._id}  product={product}/>
              </div>
            )) : <div>Loading...</div> }
          </div>
        </div>
      </section>
    </>
  )
}

export default StartPage;
