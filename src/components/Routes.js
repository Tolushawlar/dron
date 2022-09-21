import React from "react";
import "./Routes.css";
import routeImg from "../assets/images/hero.jpg";

export default function Routes() {
  return (
    <>
      <div className="RouteHeader">
        <p>Our Routes</p>
        <span>View All Routes</span>
      </div>
      <div className="routePic">
        <div className="secPix">
          <div className="innerPix">
            <img src={routeImg} alt="Logo" width="400px" height="400px" />;
            <p>Route 1</p>
          </div>
          <div className="innerPix">
            <img src={routeImg} alt="Logo" width="400px" height="400px" />;
            <p>Route 1</p>
          </div>
          <div className="innerPix">
            <img src={routeImg} alt="Logo" width="400px" height="400px" />;
            <p>Route 1</p>
          </div>
        </div>
      </div>
    </>
  );
}
