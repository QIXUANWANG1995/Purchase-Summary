import React from "react";
import ReactDOM from "react-dom";
import CodeForm from "./CodeForm";

class PromoteCodeDropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: "Apply promo code +",
      showMenu: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (!this.state.showMenu) {
      this.setState({ showMenu: true, buttonLabel: "Hide promo code -" });
    } else {
      this.setState({ showMenu: false, buttonLabel: "Apply promo code +" });
    }
  }
  render() {
    const { buttonLabel } = this.state;
    const { param, onSubmit } = this.props;
    return (
      <div>
        <button className="dropdownbtn" onClick={this.handleClick}>
          {buttonLabel}
        </button>
        {this.state.showMenu ? (
          <div className="menu">
            <CodeForm param={param} onSubmit={onSubmit} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default PromoteCodeDropdown;
