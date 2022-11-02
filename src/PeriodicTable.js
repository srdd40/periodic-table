import React from "react";
import "./PeriodicTable.css";
import data from "./PeriodicTableJSON.json";

const colorMap = {
  "noble gas": "#ffef9f",
  "alkaline earth metal": "#fec89a",
  "diatomic nonmetal": "#e7e6f7",
  "alkali metal": "#df928e",
  "transition metal": "#E5E6E4",
  "post-transition metal": "#90dbf4",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
  "polyatomic nonmetal": "#ffcad4",
  unknown: "#94d1be",
  actinide: "#c0b9dd",
};

class PeriodicTable extends React.Component {
  render() {
    return (
      <div className="periodic-table">
        {data.elements.map((element) => (
          <div
            className="elSquare"
            key={element.name}
            style={{
              gridColumn: element.xpos,
              gridRow: element.ypos,
              backgroundColor: colorMap[element.category],
            }}
          >
            <div className="elContainer">
              <sup className="elNumber">{element.number}</sup>
            </div>
            <div className="elContainer">
              <div className="elSymbol">{element.symbol}</div>
            </div>
            <div className="elContainer">
              <small className="elName">{element.name}</small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PeriodicTable;
