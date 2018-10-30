import React from "react";
import ReactDOM from "react-dom";

class CodeForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.store = this.props.store;
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }
  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Promo code
          <input
            type="text"
            className="inputvalue"
            value={value}
            onChange={this.handleChange}
          />
          <input type="submit" className="applybtn" value="Apply" />
        </label>
      </form>
    );
  }
}

export default CodeForm;
