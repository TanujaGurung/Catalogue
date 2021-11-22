import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import axios from "axios";
export default class HomePage extends React.Component {
  state = {
    value: "products",
    search: "",
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
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
    //alert("hi");
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
    console.log(this.state.search);

    return (
      <React.Fragment>
        <Navbar
          value={this.state.value}
          handleChangeEvent={this.handleChangeEvent}
          search={this.state.search}
          handleSearch={this.handleSearch}
        />
        <div id="cards_landscape_wrap-2">
          <div class="container">
            <div class="row">
              {data.length ? (
                data
                  .filter((val) => {
                    if (this.state.search == "") {
                      return val;
                    } else if (
                      val.title
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase()) ||
                      val.description
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase()) ||
                      val.category
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((products) => (
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
