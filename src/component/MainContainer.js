import React from "react";
import "../Style/body.css";
import Card from "./Card";
import cardData from "../dataBase/cardData";
function MainContainer(props) {
  return (
    <div className="MainContainer">


    {/* conditianal rendaring for searched term */}
      {props.searchKey.length > 0 && (
        <section>
          <h1>showing search results for {props.searchKey}</h1>
          <div className="cardLister">
            {props.filteredArr.map((v, i) => {
              return <Card value={v} key={i} />;
            })}
          </div>
        </section>
      )}

      {/* image slideShow */}
      <div className="SlideImage"></div>


      {/* popular Test start   */}
      <section>
        <h1>Popular Test Start</h1>
        <div className="cardLister">
          {cardData
            .filter((v) => {
              return v.type === "popularTests";
            })
            .map((v, i) => {
              return <Card value={v} key={i} />;
            })}
        </div>
      </section>
      {/*  popular Test end  */}

      {/* popular Test start   */}
      <section style={{ background: "whitesmoke" }}>
        <h1>Popular Health Packages</h1>
        <div className="cardLister">
          {cardData
            .filter((v, i) => {
              return v.type === "healthPackage";
            })
            .map((v, i) => {
              return <Card value={v} key={i} />;
            })}
        </div>
        <div className="cardLister"></div>
      </section>
      {/*  popular Test end  */}

      {/* popular Test start   */}
      <section>
        <h1>Top Booked Tests</h1>
        <div className="cardLister">
          {cardData
            .filter((v) => {
              return v.type === "topBooked";
            })
            .map((v, i) => {
              return <Card value={v} key={i} />;
            })}
        </div>
      </section>
      {/*  popular Test end  */}
    </div>
  );
}

export default MainContainer;
