import React, { Component } from "react";
import ReactDOM from "react-dom";
import ItemDetailsDropdown from "./ItemDetailDropdown";
import PromoteCodeDropdown from "./PromoteCodeDropdown";
import BillInfo from "./BillInfo";
import "./styles.css";

import { connect } from "react-redux";

import store from "../store";
import { applyCode } from "../actions/decountAction";

var products = [];
var redchair = {
  description: "Essentials by OFM ESS - 3085 Racing Style Leather",
  name: "Gaming Chair, Red",
  number: 1,
  subtotal: 102.96,
  pickupsaving: 3.85,
  img:
    "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
};
var blackchair = {
  description: "Essentials by OFM ESS - 3085 Racing Style Leather",
  name: "Gaming Chair, Black",
  number: 1,
  subtotal: 102.96,
  pickupsaving: 3.85,
  img:
    "https://i5.walmartimages.com/asr/66fae1aa-d8bc-4089-8554-c1b1fc0c6d92_1.a18ee650ed91efecab34d94b75a5ba0a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
};
products.push(redchair);
products.push(blackchair);
function calculate(products, discount) {
  var subtotal = 0;
  var pickupsaving = 0;
  for (let i = 0; i < products.length; ++i) {
    subtotal += parseFloat(products[i].subtotal);
    pickupsaving += parseFloat(products[i].pickupsaving);
  }
  var taxes = (subtotal - pickupsaving) * 0.09;
  var total = subtotal - pickupsaving + taxes;
  return [subtotal, pickupsaving, taxes, total * discount];
}
class Main extends Component {
  constructor() {
    super();
  }
  submit = value => {
    store.dispatch(applyCode(value));
  };
  render() {
    return (
      <div className="App">
        <BillInfo param={calculate(products, this.props.discount)} />
        <ItemDetailsDropdown param={products} />
        <hr />
        <PromoteCodeDropdown onSubmit={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    discount: store.discount
  };
};

export default connect(mapStateToProps)(Main);
