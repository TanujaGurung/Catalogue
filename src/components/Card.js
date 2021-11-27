import React from "react";

const Card = (props) => {
  //alert(props.title);
  var count = 0;
  if (props.category == "men's clothing") {
    count++;
  }
  return (
    <React.Fragment>
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <a href="">
          <div class="card-flyer">
            <div class="text-box">
              <div class="image-box">
                <img src={props.image} alt="" />
              </div>
              <div class="text-container">
                <h6
                  style={{
                    display: "block" /* Fallback for non-webkit */,
                    display: "-webkit-box",
                    height:
                      "2.6em" /* Fallback for non-webkit, line-height * 2 */,
                    lineHeight: "1.3em",
                    webkitLineClamp:
                      "2" /* if you change this, make sure to change the fallback line-height and height */,
                    webkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {props.title}
                </h6>
                <h5
                  class="card-title"
                  style={{ color: "black", textAlign: "center" }}
                >
                  <i class="fas fa-rupee-sign" style={{ color: "grey" }}></i>
                  {props.price}/-
                </h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};
export default Card;
