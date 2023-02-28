import React from "react";
import "./home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
function home() {
  return (
    <div className="main">
      <div className="navbar">
        <a href="#" className="btn-all">
          <strong>All</strong>
        </a>
        <a href="#" className="btn-2">
          <strong>Manpower Supply</strong>
        </a>
        <a href="#" className="btn-3">
          <strong>Mobile App / Websites</strong>
        </a>
        <a href="#" className="btn-4">
          <strong>UI/UX Design</strong>
        </a>
      </div>
      <div className="container">
        <div className="services__container">
          <div className="image">
            <img
              src="https://tekup.vn/wp-content/uploads/2022/09/image-1.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="items">
              <h6 className="title">
                <strong>TOI 3D Customize E-commerce</strong>
              </h6>
              <div className="icons">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="services__container">
          <div className="image">
            <img
              src="https://tekup.vn/wp-content/uploads/2022/09/image.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="items">
              <h6 className="title">
                <strong>E-learning – Internal training platform</strong>
              </h6>
              <div className="icons">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="services__container">
          <div className="image">
            <img
              src="https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="items">
              <h6 className="title">
                <strong>Summer 21 Cosmetic E-commerce Platform</strong>
              </h6>
              <div className="icons">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="services__container">
          <div className="image">
            <img
              src="https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="items">
              <h6 className="title">
                <strong>
                  Kiva – Ambition to digital transformation in the brokerage
                  assiduity
                </strong>
              </h6>
              <div className="icons">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="services__container">
          <div className="image">
            <img
              src="https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="items">
              <h6 className="title">
                <strong>Boxgo – Professional Warehouse Management</strong>
              </h6>
              <div className="icons">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
