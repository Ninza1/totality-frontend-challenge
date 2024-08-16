import React from "react";

export const Cart_card = ({obj, cancle}) => {
  return (
    <div className="bg-white d-flex flex-wrap gap-3 p-2 my-3">
      <div className="">
        <img src={obj.img} alt="" />
      </div>
      <div className="col-sm-8">
        <h4>{obj.title}</h4>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae
          veritatis
        </p>
        <div className="d-flex gap-3">
            <p className="mb-0">Rs.{obj.price}</p>
          <p className="mb-0">
            <i className="bi bi-geo-alt me-2"></i>
            {obj.location}
          </p>
          <button name={obj.id} onClick={cancle} className="border-0 bg-primary text-white rounded">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};
