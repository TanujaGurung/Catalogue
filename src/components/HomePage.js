import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import axios from "axios";
export default class HomePage extends React.Component {
  state = {
    value: "products",
    data: [],
  };
  componentDidMount() {
    this.fetchApi();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.fetchApi();
    }
  }
  handleChangeEvent = (e) => {
    e.preventDefault();

    this.setState({ value: e.target.value });
  };
  fetchApi = () => {
    if (this.state.value == "products") {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        this.setState({ data: res.data });
        // console.log(this.state.data);
      });
    } else {
      axios
        .get("https://fakestoreapi.com/products/category/" + this.state.value)
        .then((res) => {
          this.setState({ data: res.data });
          console.log(this.state.data);
        });
    }
  };
  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <Navbar
          value={this.state.value}
          handleChangeEvent={this.handleChangeEvent}
        />
        <div id="cards_landscape_wrap-2">
          <div class="container">
            <div class="row">
              {data.length ? (
                data.map((products) => (
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
      </React.Fragment>
    );
  }
}
