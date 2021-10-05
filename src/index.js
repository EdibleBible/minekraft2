import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    setInterval(() => {
      console.log("ticc");
      this.tick();
    }, 1000);
  }
  render() {
    return (
      <>
        <h1>{Time4}
          {this.state.date.toLocaleTimeString()}</h1>
      </>
    );
  }
}
const Time4 = "Time: "

class Yos extends React.Component
{
  render() {
    return (
      <>
        {Yup}
      </>
    );
  }
}
const Yup = <h1>Henlo world</h1>

class Hello extends React.Component 
{
  render() {
    return <>
      <h1>Hello {this.state.inputValue}</h1>
      <input type="text" value={this.state.inputValue} onChange={(event) => {this.valueF(event)}}/>
    </>
  }
  constructor(props)  {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  valueF(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
}

const all = (
  <all>
    <Hello />
    <Clock />
    <Yos />
  </all>
)

ReactDOM.render(
  all,
    document.getElementById('root')
  );