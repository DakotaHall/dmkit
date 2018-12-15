import React, { Component } from "react";
import DiceBanner from "../../../images/dice_roller_banner.png";
import Page from "../../../images/page1.png";
import d4Image from "../../../images/d4.png";
import d6Image from "../../../images/d6.png";
import d8Image from "../../../images/d8.png";
import d10Image from "../../../images/d10.png";
import d12Image from "../../../images/d12.png";
import d20Image from "../../../images/d20.png";
import d100Image from "../../../images/d100.png";
import dAnyImage from "../../../images/dAny.png";

class DiceRoller extends Component {
  state = {
    d4: "",
    d6: "",
    d8: "",
    d10: "",
    d12: "",
    d20: "",
    d100: "",
    dX: "",
    d4mod: "",
    d6mod: "",
    d8mod: "",
    d10mod: "",
    d12mod: "",
    d20mod: "",
    d100mod: "",
    dXmod: "",
    d4plusClicked: "clicked",
    d6plusClicked: "clicked",
    d8plusClicked: "clicked",
    d10plusClicked: "clicked",
    d12plusClicked: "clicked",
    d20plusClicked: "clicked",
    d100plusClicked: "clicked",
    dXplusClicked: "clicked",
    d4minusClicked: "unclicked",
    d6minusClicked: "unclicked",
    d8minusClicked: "unclicked",
    d10minusClicked: "unclicked",
    d12minusClicked: "unclicked",
    d20minusClicked: "unclicked",
    d100minusClicked: "unclicked",
    dXminusClicked: "unclicked",
    d4addminus: true,
    d6addminus: true,
    d8addminus: true,
    d10addminus: true,
    d12addminus: true,
    d20addminus: true,
    d100addminus: true,
    dXaddminus: true,
    d4res: "",
    d6res: "",
    d8res: "",
    d10res: "",
    d12res: "",
    d20res: "",
    d100res: "",
    dXres: "",
    dXnum: ""
  };

  changeColor = value => {
    if (value === "d4plus") {
      if (this.state.d4plusClicked === "clicked") {
        this.setState({ d4plusClicked: "unclicked" });
      } else {
        this.setState({
          d4plusClicked: "clicked",
          d4minusClicked: "unclicked",
          d4addminus: true
        });
      }
    } else if (value === "d4minus") {
      if (this.state.d4minusClicked === "clicked") {
        this.setState({ d4minusClicked: "unclicked", d4addminus: true });
      } else {
        this.setState({
          d4minusClicked: "clicked",
          d4plusClicked: "unclicked",
          d4addminus: false
        });
      }
    } else if (value === "d6plus") {
      if (this.state.d6plusClicked === "clicked") {
        this.setState({ d6plusClicked: "unclicked" });
      } else {
        this.setState({
          d6plusClicked: "clicked",
          d6minusClicked: "unclicked",
          d6addminus: true
        });
      }
    } else if (value === "d6minus") {
      if (this.state.d6minusClicked === "clicked") {
        this.setState({ d6minusClicked: "unclicked", d6addminus: true });
      } else {
        this.setState({
          d6minusClicked: "clicked",
          d6plusClicked: "unclicked",
          d6addminus: false
        });
      }
    } else if (value === "d8plus") {
      if (this.state.d8plusClicked === "clicked") {
        this.setState({ d8plusClicked: "unclicked" });
      } else {
        this.setState({
          d8plusClicked: "clicked",
          d8minusClicked: "unclicked",
          d8addminus: true
        });
      }
    } else if (value === "d8minus") {
      if (this.state.d8minusClicked === "clicked") {
        this.setState({ d8minusClicked: "unclicked", d8addminus: true });
      } else {
        this.setState({
          d8minusClicked: "clicked",
          d8plusClicked: "unclicked",
          d8addminus: false
        });
      }
    } else if (value === "d10plus") {
      if (this.state.d10plusClicked === "clicked") {
        this.setState({ d10plusClicked: "unclicked" });
      } else {
        this.setState({
          d10plusClicked: "clicked",
          d10minusClicked: "unclicked",
          d10addminus: true
        });
      }
    } else if (value === "d10minus") {
      if (this.state.d10minusClicked === "clicked") {
        this.setState({ d10minusClicked: "unclicked", d10addminus: true });
      } else {
        this.setState({
          d10minusClicked: "clicked",
          d10plusClicked: "unclicked",
          d10addminus: false
        });
      }
    } else if (value === "d12plus") {
      if (this.state.d12plusClicked === "clicked") {
        this.setState({ d12plusClicked: "unclicked" });
      } else {
        this.setState({
          d12plusClicked: "clicked",
          d12minusClicked: "unclicked",
          d12addminus: true
        });
      }
    } else if (value === "d12minus") {
      if (this.state.d12minusClicked === "clicked") {
        this.setState({ d12minusClicked: "unclicked", d12addminus: true });
      } else {
        this.setState({
          d12minusClicked: "clicked",
          d12plusClicked: "unclicked",
          d12addminus: false
        });
      }
    } else if (value === "d20plus") {
      if (this.state.d20plusClicked === "clicked") {
        this.setState({ d20plusClicked: "unclicked" });
      } else {
        this.setState({
          d20plusClicked: "clicked",
          d20minusClicked: "unclicked",
          d20addminus: true
        });
      }
    } else if (value === "d20minus") {
      if (this.state.d20minusClicked === "clicked") {
        this.setState({ d20minusClicked: "unclicked", d20addminus: true });
      } else {
        this.setState({
          d20minusClicked: "clicked",
          d20plusClicked: "unclicked",
          d20addminus: false
        });
      }
    } else if (value === "d100plus") {
      if (this.state.d100plusClicked === "clicked") {
        this.setState({ d100plusClicked: "unclicked" });
      } else {
        this.setState({
          d100plusClicked: "clicked",
          d100minusClicked: "unclicked",
          d100addminus: true
        });
      }
    } else if (value === "d100minus") {
      if (this.state.d100minusClicked === "clicked") {
        this.setState({ d100minusClicked: "unclicked", d100addminus: true });
      } else {
        this.setState({
          d100minusClicked: "clicked",
          d100plusClicked: "unclicked",
          d100addminus: false
        });
      }
    } else if (value === "dXplus") {
      if (this.state.dXplusClicked === "clicked") {
        this.setState({ dXplusClicked: "unclicked" });
      } else {
        this.setState({
          dXplusClicked: "clicked",
          dXminusClicked: "unclicked",
          dXaddminus: true
        });
      }
    } else if (value === "dXminus") {
      if (this.state.dXminusClicked === "clicked") {
        this.setState({ dXminusClicked: "unclicked", dXaddminus: true });
      } else {
        this.setState({
          dXminusClicked: "clicked",
          dXplusClicked: "unclicked",
          dXaddminus: false
        });
      }
    }
  };

  rollInitiative = value => {
    if (value === "d4") {
      if (this.state.d4addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d4; i++) {
          newValue += Math.floor(Math.random() * 4) + 1;
        }
        newValue += Math.floor(this.state.d4mod);
        this.setState({ d4res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d4; i++) {
          newValue += Math.floor(Math.random() * 4) + 1;
        }
        newValue -= Math.floor(this.state.d4mod);
        this.setState({ d4res: newValue });
      }
    } else if (value === "d6") {
      if (this.state.d6addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d6; i++) {
          newValue += Math.floor(Math.random() * 6) + 1;
        }
        newValue += Math.floor(this.state.d6mod);
        this.setState({ d6res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d6; i++) {
          newValue += Math.floor(Math.random() * 6) + 1;
        }
        newValue -= Math.floor(this.state.d6mod);
        this.setState({ d6res: newValue });
      }
    } else if (value === "d8") {
      if (this.state.d8addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d8; i++) {
          newValue += Math.floor(Math.random() * 8) + 1;
        }
        newValue += Math.floor(this.state.d8mod);
        this.setState({ d8res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d8; i++) {
          newValue += Math.floor(Math.random() * 8) + 1;
        }
        newValue -= Math.floor(this.state.d8mod);
        this.setState({ d8res: newValue });
      }
    } else if (value === "d10") {
      if (this.state.d10addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d10; i++) {
          newValue += Math.floor(Math.random() * 10) + 1;
        }
        newValue += Math.floor(this.state.d10mod);
        this.setState({ d10res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d10; i++) {
          newValue += Math.floor(Math.random() * 10) + 1;
        }
        newValue -= Math.floor(this.state.d10mod);
        this.setState({ d10res: newValue });
      }
    } else if (value === "d12") {
      if (this.state.d12addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d12; i++) {
          newValue += Math.floor(Math.random() * 12) + 1;
        }
        newValue += Math.floor(this.state.d12mod);
        this.setState({ d12res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d12; i++) {
          newValue += Math.floor(Math.random() * 12) + 1;
        }
        newValue -= Math.floor(this.state.d12mod);
        this.setState({ d12res: newValue });
      }
    } else if (value === "d20") {
      if (this.state.d20addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d20; i++) {
          newValue += Math.floor(Math.random() * 20) + 1;
        }
        newValue += Math.floor(this.state.d20mod);
        this.setState({ d20res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d20; i++) {
          newValue += Math.floor(Math.random() * 20) + 1;
        }
        newValue -= Math.floor(this.state.d20mod);
        this.setState({ d20res: newValue });
      }
    } else if (value === "d100") {
      if (this.state.d100addminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.d100; i++) {
          newValue += Math.floor(Math.random() * 100) + 1;
        }
        newValue += Math.floor(this.state.d100mod);
        this.setState({ d100res: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.d100; i++) {
          newValue += Math.floor(Math.random() * 100) + 1;
        }
        newValue -= Math.floor(this.state.d100mod);
        this.setState({ d100res: newValue });
      }
    } else if (value === "dX") {
      if (this.state.dXaddminus) {
        let newValue = 0;
        for (let i = 0; i < this.state.dX; i++) {
          newValue += Math.floor(Math.random() * this.state.dXnum) + 1;
        }
        newValue += Math.floor(this.state.dXmod);
        this.setState({ dXres: newValue });
      } else {
        let newValue = 0;
        for (let i = 0; i < this.state.dX; i++) {
          newValue += Math.floor(Math.random() * this.state.dXnum) + 1;
        }
        newValue -= Math.floor(this.state.dXmod);
        this.setState({ dXres: newValue });
      }
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="DiceRoller">
        <div className="DiceRollerHeaderSection">
          <img src={DiceBanner} className="DiceRollerBannerImage" alt="" />
        </div>
        <div className="DiceRollerPageHolder">
          <img src={Page} className="DiceDisplayHolderImage" alt="" />
        </div>
        <div className="DiceRollerHeaderText">Dice Roller</div>
        <div className="DiceDisplayHolder">
          <div className="DiceDisplay">
            <input
              name="d4"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d4}
              maxLength="100"
            />
            <div className="SpecificDice">d4</div>
            <div
              className={`DiceRollPlus ${this.state.d4plusClicked}`}
              onClick={e => this.changeColor("d4plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d4minusClicked}`}
              onClick={e => this.changeColor("d4minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d4mod"
              onChange={this.onChange}
              value={this.state.d4mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d4", e)}
            >
              <img src={d4Image} alt="d4" className="CharacterConditionIcon" />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d4res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="d6"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d6}
            />
            <div className="SpecificDice">d6</div>
            <div
              className={`DiceRollPlus ${this.state.d6plusClicked}`}
              onClick={e => this.changeColor("d6plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d6minusClicked}`}
              onClick={e => this.changeColor("d6minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d6mod"
              onChange={this.onChange}
              value={this.state.d6mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d6", e)}
            >
              <img src={d6Image} alt="d6" className="CharacterConditionIcon" />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d6res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="d8"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d8}
            />
            <div className="SpecificDice">d8</div>
            <div
              className={`DiceRollPlus ${this.state.d8plusClicked}`}
              onClick={e => this.changeColor("d8plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d8minusClicked}`}
              onClick={e => this.changeColor("d8minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d8mod"
              onChange={this.onChange}
              value={this.state.d8mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d8", e)}
            >
              <img src={d8Image} alt="d8" className="CharacterConditionIcon" />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d8res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="d10"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d10}
            />
            <div className="SpecificDice">d10</div>
            <div
              className={`DiceRollPlus ${this.state.d10plusClicked}`}
              onClick={e => this.changeColor("d10plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d10minusClicked}`}
              onClick={e => this.changeColor("d10minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d10mod"
              onChange={this.onChange}
              value={this.state.d10mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d10", e)}
            >
              <img
                src={d10Image}
                alt="d10"
                className="CharacterConditionIcon"
              />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d10res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="d12"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d12}
            />
            <div className="SpecificDice">d12</div>
            <div
              className={`DiceRollPlus ${this.state.d12plusClicked}`}
              onClick={e => this.changeColor("d12plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d12minusClicked}`}
              onClick={e => this.changeColor("d12minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d12mod"
              onChange={this.onChange}
              value={this.state.d12mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d12", e)}
            >
              <img
                src={d12Image}
                alt="d12"
                className="CharacterConditionIcon"
              />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d12res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="d20"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d20}
            />
            <div className="SpecificDice">d20</div>
            <div
              className={`DiceRollPlus ${this.state.d20plusClicked}`}
              onClick={e => this.changeColor("d20plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d20minusClicked}`}
              onClick={e => this.changeColor("d20minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d20mod"
              onChange={this.onChange}
              value={this.state.d20mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d20", e)}
            >
              <img
                src={d20Image}
                alt="d20"
                className="CharacterConditionIcon"
              />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d20res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="d100"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.d100}
            />
            <div className="SpecificDice">d100</div>
            <div
              className={`DiceRollPlus ${this.state.d100plusClicked}`}
              onClick={e => this.changeColor("d100plus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.d100minusClicked}`}
              onClick={e => this.changeColor("d100minus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="d100mod"
              onChange={this.onChange}
              value={this.state.d100mod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("d100", e)}
            >
              <img
                src={d100Image}
                alt="d100"
                className="CharacterConditionIcon"
              />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.d100res}
            />
          </div>
          <div className="DiceDisplay">
            <input
              maxLength="100"
              name="dX"
              className="NumberOfDice"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.dX}
            />
            <div className="SpecificDiceDX">d</div>
            <input
              maxLength="100"
              name="dXnum"
              className="dxNumber"
              placeholder="#"
              onChange={this.onChange}
              value={this.state.dXnum}
            />
            <div
              className={`DiceRollPlus ${this.state.dXplusClicked}`}
              onClick={e => this.changeColor("dXplus", e)}
            >
              <div className="CenteredPlusNoColor">+</div>
            </div>
            <div
              className={`DiceRollMinus ${this.state.dXminusClicked}`}
              onClick={e => this.changeColor("dXminus", e)}
            >
              <div className="CenteredPlusNoColor">-</div>
            </div>
            <input
              maxLength="100"
              className="DiceModifier"
              placeholder="0"
              name="dXmod"
              onChange={this.onChange}
              value={this.state.dXmod}
            />
            <button
              className="DiceRollButton"
              onClick={e => this.rollInitiative("dX", e)}
            >
              <img
                src={dAnyImage}
                alt="dAny"
                className="CharacterConditionIcon"
              />
            </button>
            <div className="DiceRollEquals">=</div>
            <input
              maxLength="100"
              className="DiceRollResults"
              value={this.state.dXres}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DiceRoller;
