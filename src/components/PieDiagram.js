import React from "react";
import { Component } from "react";
import { Pie } from "react-chartjs-2";
import { chartColors } from "./colors";

class PieDiagram extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      cat: {},
      options: {
        legend: {
          display: false,
          position: "right",
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      },
      listData1: 6,
      listData2: 4,
      listData3: 6,
      listData4: 4,
    };
  }
  componentDidMount() {
    this.setCat();
  }
  setCat = () => {
    const categories = this.props.data.reduce((acc, cur) => {
      acc[cur.category] = (acc[cur.category] || 0) + 1;
      return acc;
    }, {});
    this.setState({ cat: categories });
  };

  // componentDidUpdate(prevprop, prevState) {
  //   if (prevprop.cat != this.state.cat) {
  //     this.setState({ listData1: this.state.cat.electronics });
  //     this.setState({ listData2: this.state.cat.jewelery });
  //     this.setState({ listData3: this.state.cat["men's clothing"] });
  //     this.setState({ listData4: this.state.cat["women's clothing"] });
  //   }
  // }
  render() {
    console.log(this.state.cat);
    let pieData = {
      maintainAspectRatio: false,
      responsive: true,
      labels: ["men's clothig", "Women's clothing", "Electronics", "Jewelery"],
      datasets: [
        {
          data: [
            this.state.listData1,
            this.state.listData2,
            this.state.listData3,
            this.state.listData4,
          ],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors,
        },
      ],
    };
    let chartInstance = null;
    return (
      <div className="relative">
        <Pie
          className="pieContainer"
          data={pieData}
          ref={(input) => {
            chartInstance = input;
          }}
        />
      </div>
    );
  }
}
export default PieDiagram;
