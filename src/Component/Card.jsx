import React from 'react'
import Style from "../app/page.module.css"

export const Card = ({obj, book}) => {
  return (
    <div className={Style.card+" bg-light p-2 rounded d-flex flex-wrap flex-lg-nowrap gap-lg-5 my-4"}>
            <div className="col-md-3 col-12 me-3 me-lg-0">
              <img src={obj.img} alt="" />
            </div>
            <div className='col-lg-6 col-md-8 col-12'>
              <h2>{obj.title}</h2>
              <p className="text-secondary">{obj.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur itaque ab officiis magnam, voluptatem architecto commodi provident perspiciatis porro doloremque dolorem maxime velit quo.</p>
              <div className="d-flex gap-5">
                <p className="text-secondary">
                  <strong>Bedrooms:-</strong> {obj.no_bedroom}
                </p>
                <div className="text-secondary">
                  <i className="bi bi-geo-alt me-2"></i>
                  {obj.location}
                </div>
              </div>
              
            </div>
            <div className="col-12 align-items-center gap-4 d-flex d-lg-block col-lg-2 " >
                <div>
                  <span className="">Price</span>
                  <p className="fs-1 lh-1 fw-semibold mb-0  text-primary">{obj.price}rs</p>
                  <p className="fst-italic opacity-50">Included all tex*</p>
                </div>
                <button name={obj.id} onClick={book} className="bg-primary mt-lg-5 w-lg-100 text-white fw-semibold px-4 py-2 border-0 rounded">
                  Book Now
                </button>
              </div>
          </div>
  )
}
