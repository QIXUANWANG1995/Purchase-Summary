import React from "react";
import ReactDOM from "react-dom";
import ItemDetail from "./ItemDetail";

class ItemDetailsDropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: "See item details +",
      showMenu: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (!this.state.showMenu) {
      this.setState({ showMenu: true, buttonLabel: "Hide item details -" });
    } else {
      this.setState({ showMenu: false, buttonLabel: "See item details +" });
    }
  }

  render() {
    const { buttonLabel } = this.state;
    const { param } = this.props;
    const listItems = this.props.param.map(i => (
      <ItemDetail param={i} key={i.name} />
    ));
    return (
      <div>
        <button className="dropdownbtn" onClick={this.handleClick}>
          {" "}
          {buttonLabel}{" "}
        </button>
        {this.state.showMenu ? <div className="menu">{listItems}</div> : null}
      </div>
    );
  }
}

export default ItemDetailsDropdown;
