import React from 'react';
import { useState } from 'react';
import "./Hero.css";

export default function Hero() {

    const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Customers", path: "javascript:void(0)" },
      { title: "Careers", path: "javascript:void(0)" },
      { title: "Guides", path: "javascript:void(0)" },
      { title: "Partners", path: "javascript:void(0)" }
  ]
  
    return (
        <>
            <section className="hero-primary">
                <div className="hero-details">
                    <h1>
                        Create Your TMB Planing in Three Easy Steps<br/>
                         <span> <h6>Select Destination, Route and Accomodation Cirteria</h6></span>
                    </h1>
                   
                </div>
                <div className="hero-btns">
                    <a href="javascript:void(0)" className="btn-primary">
                        Start Planning
                    </a>
                </div>
            </section>
        </>
    )
}
