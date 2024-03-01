import React from "react";

const PriceInfoCard = ({ title, iconSrc, value }) => {
  return (
    <div className="shadow rounded-3 flex-1 d-flex flex-column bg-light px-2 py-2 my-2 mx-2">
      <p className="fs-5 fw-bold text-black mx-1">{title}</p>

      <div className="d-flex">
        <img src={iconSrc} alt={title} width={26} height={26} />

        <p className="text-2xl font-weight-bold mx-2 fs-5">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
