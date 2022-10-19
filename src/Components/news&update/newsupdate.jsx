import React from "react";
import "./newsupdate.css";


function Newsupdate(props) {
  return (
    <div>
      <div class="news-item">
        <div class="news-img">
          <a href="#">
            <img src={props.image}alt="product" />
          </a>
        </div>
        <div class="news-body">
          <div class="news-info">
            <div className="news-title">
              Media glare can enrich tennis pros{" "}
            </div>
            <div className="news-date">17 Sep 2022</div>
            <div className="news-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown print er took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </div>

            <a href="#">
              <div className="news-readmorebtn">
                Read More <i class="bx bx-right-arrow-alt"></i>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsupdate;
