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
    this.showList = this.showList.bind(this);
    this.goBack = this.goBack.bind(this);
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

  showList(e) {
    e.preventDefault();
    this.setState({
      showList: true
    });
  }

  goBack(e) {
    e.preventDefault();
    this.setState({
      showList: false
    });
  }

  render() {
    const { input, list, showList } = this.state;
    if (showList) {
      return (
        <div>
          <List list={list} />
          <input type="submit" value="go back home" onClick={this.goBack} />
        </div>
      );
    } else {
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
          <input type="submit" value="get yo list" onClick={this.showList} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
