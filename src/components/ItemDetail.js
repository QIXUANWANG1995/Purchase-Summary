import React from "react";
import ReactDOM from "react-dom";

class ItemDetail extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const obj = this.props.param;
    return (
      <div className="itembox">
        <img src={obj.img} width="25%" height="25%" />
        <div className="label">
          <div className="itemdescription">{obj.description}</div>
          <div className="productName">{obj.name}</div>
          <div className="priceAndQulity">
            <span className="blackprice">
              ${parseFloat(obj.subtotal) - parseFloat(obj.pickupsaving)}
            </span>
            <span className="qulity">Qty:{obj.number}</span>
          </div>
          <div className="greyprice">${obj.subtotal}</div>
        </div>
      </div>
    );
  }
}
export default ItemDetail;
