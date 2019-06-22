import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: [],
      showList: false
    };

    this.getList = this.getList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios
      .get("/listing")
      .then(res => {
        this.setState({
          list: res.data
        });
      })
      .catch(err => {
        console.log("error on client: ", err);
      });
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    const { input, list } = this.state;
    return (
      <div>
        <form>
          <label>
            Add to yo list :D
            <input
              type="text"
              name="inputToList"
              value={input}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="put on yo list" />
        </form>
        <input type="submit" value="get yo list" />
        <List list={list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
