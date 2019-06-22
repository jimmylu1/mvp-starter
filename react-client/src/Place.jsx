import React from "react";

class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false
    };
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(e) {
    e.preventDefault();
    this.setState({
      details: true
    });
  }

  render() {
    if (!this.state.details) {
      return <div onClick={this.showDetails}>{this.props.name}</div>;
    } else {
      return (
        <div onClick={this.showDetails}>
          {this.props.name} {this.props.location} {this.props.img}{" "}
          {this.props.price}
        </div>
      );
    }
  }
}

export default Place;
