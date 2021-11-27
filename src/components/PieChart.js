import React, { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";
import { chartColors } from "./colors";

const PieChart = (props) => {
  console.log(props.data);
  const [cat, setCat] = useState({});

  useEffect(() => {
    const categories = props.data.reduce((acc, cur) => {
      acc[cur.category] = (acc[cur.category] || 0) + 1;
      return acc;
    }, {});
    setCat(categories);
  }, cat);
  console.log(cat);

  let chartInstance = null;
  // const mensCat = 50;
  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const data = {
    maintainAspectRatio: false,
    responsive: true,
    labels: ["men's clothig", "Women's clothing", "Electronics", "Jewelery"],
    datasets: [
      {
        data: [
          cat.electronics,
          cat.jewelery,
          cat["men's clothing"],
          cat["women's clothing"],
        ],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };
  //const [data, setData] = useState(initalstate);

  return (
    <div className="relative">
      <Pie
        className="pieContainer"
        data={data}
        ref={(input) => {
          chartInstance = input;
        }}
      />
    </div>
  );
};

export default PieChart;
