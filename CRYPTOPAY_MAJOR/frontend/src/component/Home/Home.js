import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
// import Product from "./Product.js"

const product = {
  name: "Momo",
  images: [{ url: "https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?size=626&ext=jpg&ga=GA1.2.1190347391.1660648808" }],
  price: "50",
  _id: "momo",
};
const product1 = {
  name: "Fried Potatoes",
  images: [{ url: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?cs=srgb&dl=pexels-dzenina-lukac-1583884.jpg&fm=jpg" }],
  price: "40",
  _id: "FriedPotatoes",
};
const product6 = {
  name: "Cheese Burger",
  images: [{ url: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
  price: "60",
  _id: "CheeseBurger",
};
const product3 = {
  name: "Paneer Tikka",
  images: [{ url: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600" }],
  price: "70",
  _id: "PaneerTikka",
};
const product4 = {
  name: " Macaroni",
  images: [{ url: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" }],
  price: "60",
  _id: " Macaroni",
};
const product5 = {
  name: "Pastries With Chocolate",
  images: [{ url: "https://images.pexels.com/photos/1397292/pexels-photo-1397292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }],
  price: "50",
  _id: "PastriesWithChocolate",
};
const product2 = {
  name: "Doughnut",
  images: [{ url: "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=1600" }],
  price: "50",
  _id: "Doughnut",
};
const product7 = {
  name: "Roasted Chicken Wings",
  images: [{ url: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }],
  price: "80",
  _id: "RoastedChickenWings",
};

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="CryptoPay" />

          <div className="banner">
            <p>Welcome to CryptoPay</p>
            <h1>FIND AMAZING FOOD ITEMS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Items</h2>

          <div className="container" id="container">
            <ProductCard product={product} />
            <ProductCard product={product1} />
            <ProductCard product={product2} />
            <ProductCard product={product3} />
            <ProductCard product={product4} />
            <ProductCard product={product5} />
            <ProductCard product={product6} />
            <ProductCard product={product7} />
            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
