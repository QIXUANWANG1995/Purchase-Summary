import React from "react";
import ReactDOM from "react-dom";

const Popover = (x, y) => {
  return (
    <div className="static" style={{ left: x - 100, top: y + 20 }}>
      Picking up your order in the store helps cut costs, and we pass the
      savings on to you.
    </div>
  );
};
class BillInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: "hidden"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClicked = this.handleModalClicked.bind(this);
  }
  componentDidMount() {
    // this.props.store.subscribe(() => {
    //   this.setState({ discount: this.props.store.getState().discount });
    // });
  }
  closePopover() {
    ReactDOM.render(<div id="popover" />, document.getElementById("popover"));
    document.removeEventListener("click", this.closePopover.bind(this), false);
  }
  handleModalClicked() {
    this.setState({ openMenu: "hidden" });
    ReactDOM.render(null, document.getElementById("popover"));
  }
  handleClick() {
    const res = ReactDOM.findDOMNode(this.refs.popover).getBoundingClientRect(); //find dom
    ReactDOM.render(
      Popover(res.left, res.top),
      document.getElementById("popover")
    );
    this.setState({ openMenu: "visible" });
  }

  render() {
    const obj = this.props.param;
    return (
      <>
        <button
          className={
            this.state.openMenu === "hidden" ? "modalhidden" : "modalvisible"
          }
          onClick={this.handleModalClicked}
          visible={this.state.openMenu}
          disabled={this.state.openMenu === "hidden"}
        />
        <div className="outerbox">
          <div className="modulebox">
            <span> Subtotal</span>
            <span className="blackprice"> ${obj[0]}</span>
          </div>
          <div className="modulebox">
            <a
              className="pickupsaving"
              onClick={this.handleClick}
              ref="popover"
            >
              Pickup savings
            </a>
            <div id="popover" />
            <span className="redprice"> -${obj[1]}</span>
          </div>
          <div className="modulebox">
            <span> Est.taxes & fees</span>
            <span className="blackprice"> ${obj[2].toFixed(2)}</span>
          </div>
          <hr color="lightgrey" />
          <div className="modulebox boldfont">
            <span> Est.total</span>
            <span className="boldfont"> ${obj[3].toFixed(2)}</span>
          </div>
        </div>
      </>
    );
  }
}
export default BillInfo;
