import React, { Component } from "react";
import BluePlus from "../../../images/blue_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";

class SettlementNPCs extends Component {
  state = {
    NPCs: this.props.NPCs,
    changed: false,
    showNPCs: this.props.showNPCs,
    updatedNPCs: [],
    premadeNPCs: this.props.premadeNPCs,
    addNPC: "SettlementAddNPCHidden",
    createNPC: "SettlementCreateNPCHidden",
    createNPCDisplay: null,
    arrowRight: "ArrowRightBook",
    arrowLeft: "ArrowLeftBook",
    displayIndex: 0,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false
  };

  componentWillMount = () => {};

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.showNPCs !== prevProps.showNPCs &&
      this.props.showNPCs.length !== prevProps.showNPCs.length
    ) {
      this.setState({
        showNPCs: this.props.showNPCs
      });
    }
  }

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    let plusImage;
    if (this.state.hovered === false) {
      plusImage = (
        <img
          src={BluePlus}
          alt="+"
          className="CursorPointer ImageFill"
          onMouseEnter={this.changePlus}
        />
      );
    } else {
      plusImage = (
        <img
          src={GrayPlus}
          alt="+"
          className="CursorPointer ImageFill"
          onMouseLeave={this.changePlus}
          onClick={() => this.props.addNPCHelper("", "NPC")}
        />
      );
    }
    let addNPC;
    if (this.state.showNPCs.length >= 200) {
      addNPC = <div className="Hidden" />;
    } else {
      addNPC = (
        <div className="AddNPCButton">
          <div className="AddTextSettlementNPC">Add NPC</div>
          <div className="LowerCenteredImageHolder">
            <div className="LowerCenteredImage">
              <div className="CenteredImage">{plusImage}</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="SettlementNPCsDisplay">
        <div className="SettlementNPCsDisplayNumber">
          <div className="SettlementNPCsDisplayNumberText">
            {this.props.showNPCs.length} / 200
          </div>
        </div>
        {addNPC}
        {this.state.showNPCs}
      </div>
    );
  }
}

export default SettlementNPCs;
