import React from "react";
import "./product.css";







function Product(props) {


  
  return (
    <div>
      <div class="product-item">
        <div class="item-img">
          <a href="#">
            <img src={props.image} alt="product image" />
          </a>
        </div>
        <div class="card-body">
          <div class="product-info">
            <div class="product-catergory">{props.catergory}</div>
            <div class="product-name">{props.productname}</div>

            <hr className="hrcolor" />
            <div class="product-price">
              <span class="real-price">{props.realprice}</span> &nbsp;
              <span class="discount-price">{props.discountprice}</span>
            </div>
            <hr className="hrcolor" />
            <button className="product-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
