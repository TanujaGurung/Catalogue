import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import axios from "axios";
import Modal from "./Modal";
import { ModalHeader, ModalBody, ModalFooter } from "./Modal";
import PieDiagram from "./PieDiagram";

export default class HomePage extends React.Component {
  state = {
    value: "products",
    search: "",
    data: [],
    modal: false,
    pieData: [],
  };
  componentDidMount() {
    this.fetchApi();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState({ pieData: this.state.data });
    }
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
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  fetchApi = async () => {
    if (this.state.value == "products") {
      await axios.get("https://fakestoreapi.com/products").then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
    } else {
      axios
        .get("https://fakestoreapi.com/products/category/" + this.state.value)
        .then((res) => {
          this.setState({ data: res.data });
          //console.log(this.state.data);
        });
    }
  };

  render() {
    const { data, value, search } = this.state;

    //console.log(this.state.search);

    return (
      <React.Fragment>
        <Navbar
          value={value}
          handleChangeEvent={this.handleChangeEvent}
          search={search}
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
                      category={products.category}
                    />
                  ))
              ) : (
                <div>Loading... </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary float"
          onClick={this.toggle}
        >
          Analyse
        </button>
        <div
          className="modal-dialog modal-lg"
          style={{ height: "auto", width: "100%" }}
        >
          <Modal
            class="modal fade"
            id="t_and_c_m"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
            isOpen={this.state.modal}
          >
            <div className="modal-content">
              <ModalHeader className="modal-header">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={this.toggle}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </ModalHeader>
              <div
                className="modal-body"
                style={{ height: "auto", width: "100%" }}
              >
                <PieDiagram data={data} />
              </div>
              <ModalFooter></ModalFooter>
            </div>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
