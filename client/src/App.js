import preferredMerchantIcon from "./icon-preferred-merchant.svg";
import React from "react";
import "./App.css";

// const url = "http://localhost:3001/";
const dummyThumbnail = "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/IDGFSTI00001j9i/hero/352123cb9b34490cb3c35b245ac95714_1625038625666997968.jpeg"

function App() {
  return (
    <div className="grid-container">
        <div className="merchant-card">
          <div className="thumbnail-wrapper">
            <img src={dummyThumbnail} alt="thumbnail" />
              <div className="promo-tag">
                Promo
                <div className="tag-tail"></div>
              </div>
          </div>
          <div className="merchant-description">
            <div className="flex gap-2 items-center mb-2">
              <img src={preferredMerchantIcon} alt="icon" />
              <span className="font-bold text-sm" style={{ color: "#00b14f" }}>
                Preferred Merchant
              </span>
            </div>

            <h6>Sate Taichan Senayan - Brontokusuman</h6>

            <div className="text-gray-500 text-sm">
              <p className="mb-1">Satay</p>
              <div className="flex gap-4">
                <div>
                  <span className="mr-2">⭐</span>
                  <span>4.6</span>
                </div>
                <p>8.4 km</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
