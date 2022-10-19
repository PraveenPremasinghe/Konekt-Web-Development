import React from "react";
import Header from "../Components/Header/header.jsx";
import Product from "../Components/Product/prodect.jsx";
import "./home.css";
import Details from "./../Components/details/details";
import Newsupdate from "../Components/news&update/newsupdate.jsx";
import Footer from "../Components/Footer/footer.jsx";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import product1 from "../assets/image/product-1.png";
import product2 from "../assets/image/product-2.png";
import product4 from "../assets/image/product-4.png";
import product5 from "../assets/image/product-5.png";
import product6 from "../assets/image/product-6.png";
import product7 from "../assets/image/product-7.png";
import product11 from "../assets/image/product-11.png";

import news1 from "../assets/image/news1.png";
import news2 from "../assets/image/news2.png";
import news3 from "../assets/image/news3.png";
import news4 from "../assets/image/news4.png";







const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <div>



      <div className="mainbackground">
        <Header></Header>

        <div className="main-padding">
          <hr className="hrcolor" />
        </div>

        <div className="product-cover">
          <div class="ourproduct">Our Products That Offer You</div>
          <Carousel responsive={responsive}>
            <div>
              <Product image={product7} catergory ={"AirPods"} productname ={"AirPods Pro"} realprice={"$300"} discountprice={"$249"}> </Product>
            </div>
            <div>
            <Product image={product2} catergory ={"Mobile Phone"} productname={"iPhone 14 Pro"} realprice={"$1300"} discountprice={"$999"}> </Product>

            </div>
            <div>
            <Product image={product4} catergory ={"Computer"} productname ={"Studio Display"} realprice={"$2000"} discountprice={"$1899"}> </Product>

            </div>
            <div>
            <Product image={product6} catergory ={"Watch"} productname ={"Apple Watch Series 8"} realprice={"$499"} discountprice={"$399"}> </Product>

            </div>
            <div>
            <Product image={product5} catergory ={"Tablet"} productname ={"iPad (10th gen.)"} realprice={"$499"} discountprice={"$399"}> </Product>

            </div>
         
            <div>
            <Product image={product1} catergory ={"AirPods"} productname ={"AirPods Pro"} realprice={"$300"} discountprice={"$249"}> </Product>

            </div>
            <div>
            <Product image={product11} catergory ={"Headset"} productname ={"PS-45"} realprice={"$2599"} discountprice={"$1599"}> </Product>
            

            </div>
          </Carousel>
          ;
    
        </div>
        <hr className="hrcolor" />
      </div>

      <Details></Details>

      <div className="main-padding">
        <div className="news">News & Update</div>
        <div class="flex-container">
          <div className="flex-items">
            <Newsupdate image={news1}> </Newsupdate>
          </div>
          <div className="flex-items">
            <Newsupdate image={news2}> </Newsupdate>
          </div>
          <div className="flex-items">
            <Newsupdate image={news3}> </Newsupdate>
          </div>
          <div className="flex-items">
            <Newsupdate image={news4}> </Newsupdate>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
