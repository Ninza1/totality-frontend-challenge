"use client";
import { useRef, useState } from "react";
import { Card } from "../Component/Card";
import { pro_dat } from "./data";
import Style from "./page.module.css";
import { Cart_card } from "../Component/Cart_card";

export default function Home() {
  const [data, setdata] = useState(pro_dat);
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(false);
  const filter = useRef({
    location: "",
    no_bedroom: "",
  });

  const filter_now = (e) => {
    e.preventDefault();
    let field = e.target;
    filter.current = {
      ...filter.current,
      [field.name]: field.value,
      min: document.querySelector("#min").value || 0,
      max: document.querySelector("#max").value || 9999999,
    };
    let arr = pro_dat;
    if (filter.current.location !== "") {
      arr = pro_dat.filter(
        (property) => property.location === filter.current.location
      );
    }
    if (filter.current.no_bedroom !== "") {
      arr = arr.filter(
        (property) => property.no_bedroom === Number(filter.current.no_bedroom)
      );
    }
    if (filter.current.min !== "") {
      arr = arr.filter(
        (property) =>
          property.price >= Number(filter.current.min) &&
          property.price <= Number(filter.current.max)
      );
    }
    setdata(arr);
  };

  const book_now = (e) => {
    let id = e.target.name;
    let obj = data.filter((property) => property.id === Number(id));
    setCart([...cart, ...obj]);
  };

  const cancle = (e) => {
    let id = e.target.name;
    let obj = cart.filter((property) => property.id !== Number(id));
    setCart([...obj]);
  };
  return (
    <>
      <nav className="px-sm-5 px-2 py-2 bg-primary text-white d-flex justify-content-between align-items-center">
        <span className="fw-semibold fs-sm-3 fs-6">Totality-Frontend-Challenge</span>
        <button
          onClick={() => setToggle(!toggle)}
          className="bg-transparent fs-3 border-0 text-white"
        >
          <i className="bi bi-bag"></i>
        </button>
      </nav>

      <div
        className={Style.cart + " p-3 col-lg-6 col-md-8 bg-light"}
        style={{ right: toggle ? "0" : "-120vw" }}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className="fs-4 bg-transparent border-0 text-primary"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        {cart.map((obj, index) => (
          <Cart_card obj={obj} cancle={cancle} />
        ))}
      </div>
      <section className="container">
        <h1 className="text-primary text-center fs-sm-2 fs-4 py-4">
          Get Your Required Property Now!
        </h1>
        <div className={Style.fillter_box + " d-flex flex-wrap justify-content-sm-around gap-lg-5 gap-sm-3 gap-2 align-items-end"}>
          <select
            name="location"
            className="border-0  border-bottom border-secondary bg-white px-2"
            id=""
            onChange={filter_now}
          >
            <option value="">Select location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Noida">Noida</option>
          </select>
          <input
            type="number"
            className="border-0 border-bottom border-secondary px-2"
            placeholder="No. of badrooms"
            name="no_bedroom"
            onChange={filter_now}
          />
          <div className="d-flex flex-wrap flex-sm-nowrap">
            <p className="mb-0 me-2 col-12 col-sm-auto">Select Price Range</p>
            <div>
              <input
                type="number"
                className="border-0 border-bottom border-secondary px-1 me-2"
                placeholder="min"
                id="min"
              />
              to
              <input
                type="number"
                className="border-0 border-bottom border-secondary px-1 ms-2"
                placeholder="max"
                id="max"
              />
            </div>
            <button
              name="Price"
              onClick={filter_now}
              className="px-2 mx-2 bg-primary border-0 text-white rounded fw-semibold"
            >
              Go
            </button>
          </div>
        </div>
      </section>
      <section className="container mt-4">
        {data.map((obj, index) => (
          <Card obj={obj} key={index} book={book_now} />
        ))}
      </section>
    </>
  );
}
