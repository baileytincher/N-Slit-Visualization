import React, { Component } from "react";
import P5Wrapper from "../P5Wrapper/";

export default class App extends Component {

  constructor() {
    super();
    this.nano = Math.pow(10, -9);
    this.micro = Math.pow(10, -6);
    this.state = { status: "", slidern: 2, sliderd: this.micro, sliderl: 490 * this.nano, slideri: 5 };
  }

  onReady = () => this.setState({ status: "ready" });

  onSlidernChange = (event) => { this.setState({ slidern: +event.target.value }) };
  onSliderdChange = (event) => { this.setState({ sliderd: +event.target.value }) };
  onSliderlChange = (event) => { this.setState({ sliderl: +event.target.value }) };
  onSlideriChange = (event) => { this.setState({ slideri: +event.target.value }) };
  onClick = (event) => { this.setState({  }) };

  render() {
    return (
      <div className="app">
        <P5Wrapper
          p5Props={{ slidern: this.state.slidern, sliderd: this.state.sliderd, sliderl: this.state.sliderl, slideri: this.state.slideri }}
          onReady={this.onReady} 
        />
        <br />
        <div style={{ textAlign: "center" }}>
          <strong>n: {this.state.slidern}</strong>
          <br />
          <input type="range"
            min={2} max={10} step={1}
            value={this.state.slidern}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSlidernChange}
          />
          <br />
          <strong>d: {this.state.sliderd}</strong>
          <br />
          <input type="range"
            min={50 * this.nano} max={25 * this.micro} step={.5 * this.micro}
            value={this.state.sliderd}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderdChange}
          />
          <br />
          <strong>lambda: {this.state.sliderl}</strong>
          <br />
          <input type="range"
            min={50 * this.nano} max={this.micro} step={25 * this.nano}
            value={this.state.sliderl}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderlChange}
          />
          <br />
          <strong>Intensity: {this.state.slideri}</strong>
          <br />
          <input type="range"
            min={0} max={20} step={1}
            value={this.state.slideri}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSlideriChange}
          />
          <input type="button"
            value="hi"
            onClick={this.onClick}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/atorov/react-p5js">
            <img border="0" alt="github logo" src="/img/github-logo.png" width="auto" height="28px" style={{ verticalAlign: "middle" }}/>
          </a>
        </p>
      </div>
    );
  }
}