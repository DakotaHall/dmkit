import React, { Component } from "react";
import GreenX from "../../../images/green_x.png";
import GrayX from "../../../images/gray_x.png";
import d20Image from "../../../images/d20.png";
class InitiativeDisplay extends Component {
  state = {
    name: this.props.name,
    initiative: "",
    initiativeBonus: this.props.initiativeBonus,
    hovered: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    setTimeout(this.slowInitiativePush, 1000);
  };

  rollInitiative = e => {
    let newInitiative =
      Math.floor(Math.random() * 20 + 1) + Number(this.state.initiativeBonus);
    this.setState({ initiative: newInitiative }, () => {
      this.slowInitiativePush();
    });
  };

  slowInitiativePush = () => {
    this.props.updateInitiativeElement(
      this.state.name,
      this.state.initiativeBonus,
      this.state.initiative,
      this.props.index
    );
  };

  changeX = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    let xImage;
    if (this.state.hovered === false) {
      xImage = (
        <img
          src={GreenX}
          alt="X"
          className="CursorPointer ImageFill"
          onMouseEnter={this.changeX}
        />
      );
    } else {
      xImage = (
        <img
          src={GrayX}
          alt="X"
          className="CursorPointer ImageFill"
          onMouseLeave={this.changeX}
        />
      );
    }
    if (this.props.initiative === null) {
      return (
        <div className="InitiativeDisplay">
          <input
            maxLength="100"
            className="InitiativeName"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <button
            className="initiativeRollButton"
            onClick={this.rollInitiative}
          >
            <img src={d20Image} alt="d20" className="ImageFill" />
          </button>
          <div className="InitiativePlusSign">+</div>
          <input
            maxLength="100"
            className="InitiativeAddDexterity"
            name="initiativeBonus"
            value={this.state.initiativeBonus}
            onChange={this.onChange}
          />
          <div className="InitiativeEqualsSign">=</div>
          <input
            maxLength="100"
            type="text"
            name="initiative"
            value={this.state.initiative}
            onChange={this.onChange}
            className="InitiativeInput"
          />
          <div
            className="initiativeRemoveButton"
            onClick={index => {
              this.props.removeInitiativeElement(this.props.index);
            }}
          >
            <div className="CenteredImage">
              <div className="ImageFill">{xImage}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="InitiativeDisplay">
          <input
            maxLength="100"
            className="InitiativeName"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <button
            className="initiativeRollButton"
            onClick={this.rollInitiative}
          >
            <img src={d20Image} alt="d20" className="ImageFill" />
          </button>
          <div className="InitiativePlusSign">+</div>
          <input
            maxLength="100"
            className="InitiativeAddDexterity"
            name="initiativeBonus"
            value={this.state.initiativeBonus}
            onChange={this.onChange}
          />
          <div className="InitiativeEqualsSign">=</div>
          <input
            maxLength="100"
            type="text"
            name="initiative"
            placeholder={this.props.initiative}
            value={this.state.initiative}
            onChange={this.onChange}
            className="InitiativeInput"
          />
          <div
            className="initiativeRemoveButton"
            onClick={index => {
              this.props.removeInitiativeElement(this.props.index);
            }}
          >
            <div className="CenteredImage">
              <div className="ImageFill">{xImage}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default InitiativeDisplay;
