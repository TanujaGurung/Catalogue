import React from "react";
import axios from "axios";
import Card from "./Card";

class Products extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.fetchApi();
  }
  fetchApi = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({ products: res.data });
      console.log(this.state.products);
    });
  };
  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <div id="cards_landscape_wrap-2">
        <div class="container">
          <div class="row">
            {products.length ? (
              products.map((products) => (
                <Card
                  price={products.price}
                  image={products.image}
                  title={products.title}
                />
              ))
            ) : (
              <div>Loading... </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
