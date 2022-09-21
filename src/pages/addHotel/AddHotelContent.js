import { useStyletron } from "baseui";
import React from "react";
import { Table } from "baseui/table-semantic";
import Filter from "baseui/icon/filter";
import { LabelSmall, ParagraphMedium } from "baseui/typography";

import { data, tableTitles } from "../../assets/constant";
import { useState } from "react";
import "./AddHotelContent.css";

export default function UserForm() {
  const [hotelInfo, sethotelInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    url: "",
    lat: "",
    long: "",
  });

  return (
    <div className="form-container">
      <form>
        <div>
          <h3>Add Hotel Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Hotel Name"
            value={hotelInfo.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Hotel Email"
            value={hotelInfo.email}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={hotelInfo.phonenumber}
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Hotel Address"
            value={hotelInfo.address}
          />
        </div>
        <div>
          <input
            type="url"
            name="url"
            placeholder="Hotel Website Url"
            value={hotelInfo.url}
          />
        </div>
        <div>
          <input
            type="number"
            name="lat"
            placeholder="Hotel Latitude Address"
            value={hotelInfo.lat}
          />
        </div>
        <div>
          <input
            type="number"
            name="lon"
            placeholder="Hotel Longitude Address"
            value={hotelInfo.lon}
          />
        </div>
        <div>
          <button> Add Hotel</button>
        </div>
      </form>
    </div>
  );
}
