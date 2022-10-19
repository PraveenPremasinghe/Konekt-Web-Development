import React from "react";
import "./details.css";

import imagekb from "./newitem02.jpg";

function Details() {
  return (
    <div>
      <div className="row detailsrow">
        <div className="col-sm-6 pb-5 detailsmargin">
          <div className="detail-title">
            Design and durability
          </div>
          <div className="detail-title2">Here’s to a healthier you.</div>

          <p className="detail-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, butLorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galleset sheet
          </p>

          <div className="readmoredetail">
            <button class="readmore readmore-darken readmore-inline">
              Read More <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="details-img">
            <img src={imagekb} alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
