import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import List from "./List.jsx";
import Wait from "./Wait.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: "",
      pick: "",
      count: 0,
      showList: false,
      random: false
    };

    this.getList = this.getList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showList = this.showList.bind(this);
    this.addToList = this.addToList.bind(this);
    this.pickRandom = this.pickRandom.bind(this);
    this.pickAgain = this.pickAgain.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getList();
    // this.getData();
  }

  getList() {
    axios
      .get("/listing")
      .then(res => {
        console.log("res.data", res.data);
        this.setState({
          list: res.data
        });
      })
      .catch(err => {
        console.log("error on client: ", err);
      });
  }

  getData(e) {
    e.preventDefault();
  }

  addToList(e) {
    const { input, list } = this.state;
    e.preventDefault();
    // this.setState({
    //   list: this.state.list.push(input)
    // });
    axios
      .post("/listing", { input })
      .then(console.log("added to list"))
      .catch(err => {
        console.log("error adding listing: ", err);
      });
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  showList(e) {
    e.preventDefault();
    this.setState(state => ({
      showList: !state.showList
    }));
  }

  pickRandom(e) {
    const { list } = this.state;
    e.preventDefault();
    let random = Math.floor(Math.random() * list.length);
    this.setState({
      pick: list[random].name,
      random: true
    });
  }

  pickAgain(e) {
    e.preventDefault();
    this.setState({
      random: false,
      count: this.state.count + 1
    });
  }

  render() {
    const { input, list, showList, random, pick, count } = this.state;

    if (count === 3) {
      return <Wait />;
    }
    if (random) {
      console.log(count);
      return (
        <div>
          You are going here: {pick}
          <input type="submit" value="pick again" onClick={this.pickAgain} />
        </div>
      );
    }
    if (showList) {
      return (
        <div>
          <List list={list} />
          <input type="submit" value="go back home" onClick={this.showList} />
          <input type="submit" value="random pick" onClick={this.pickRandom} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>CHOOSE A PLACE</h1>
          <form>
            <label>
              Add to your list
              <input
                type="text"
                name="inputToList"
                value={input}
                onChange={this.onChange}
              />
            </label>
            <input
              type="submit"
              value="Insert into list"
              onClick={this.addToList}
            />
          </form>
          <input type="submit" value="Get your list" onClick={this.showList} />
        </div>
      );
    }
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
