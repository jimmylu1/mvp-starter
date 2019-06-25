import React from "react";
import App from "./index.jsx";
class Wait extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sec: 3 };

    this.goBack = this.goBack.bind(this);
  }

  tick() {
    this.setState(previous => ({
      sec: previous.sec + -1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  goBack(e) {
    e.preventDefault();
    Router.back();
  }

  render() {
    const { sec } = this.state;
    if (sec <= 0) {
      return <App />;
    }
    return <div>Timer: {sec}</div>;
  }
}

export default Wait;
