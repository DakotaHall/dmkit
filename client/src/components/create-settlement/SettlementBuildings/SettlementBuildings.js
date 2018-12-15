import React, { Component } from "react";
import SettlementBuilding from "./SettlementBuilding";
import GreenPlus from "../../../images/green_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";

class SettlementBuildings extends Component {
  state = {
    buildings: this.props.buildings,
    changed: false,
    buildingsDisplay: [],
    updatedBuildings: [],
    building_names: [],
    building_descriptions: [],
    showBuildings: this.props.showBuildings,
    premadeNPCs: this.props.premadeNPCs,
    building_owners: [],

    building_workers: [],
    building_stocks: [],
    hovered: false
  };

  addBuilding = () => {
    let newBuildingsDisplay = [];
    let newBuildings = this.state.buildings;
    let newBuilding = {
      name: "",
      description: "",
      stock: [],
      building_workers: [],
      building_owners: []
    };
    newBuildings.push(newBuilding);

    for (let i = 0; i < newBuildings.length; i++) {
      let newBuildingDisplay = (
        <SettlementBuilding
          key={`SettlementBuilding${i}`}
          building={newBuildings[i]}
          showNPC={this.props.showNPC}
          hideNPC={this.props.hideNPC}
          changeBuilding={this.changeBuilding}
          buildingIndex={i}
          addCreatedNPC={this.props.addCreatedNPC}
          removeBuilding={this.props.removeBuilding}
          premadeNPCs={this.props.premadeNPCs}
          showEditNPC={this.props.showEditNPC}
          removeBuildingOwner={this.props.removeBuildingOwner}
          removeBuildingWorker={this.props.removeBuildingOwner}
        />
      );
      newBuildingsDisplay.push(newBuildingDisplay);
    }
    this.setState(
      {
        buildings: newBuildings,
        showBuildings: newBuildingsDisplay
      },
      () => {
        this.props.addBuilding(this.state.buildings);
      }
    );
  };

  // removeBuilding = (index, e) => {
  //   this.props.removeBuilding(index);
  // };

  changeBuilding = (buildingIndex, buildingData) => {
    let oldState = this.state.buildings;
    oldState[buildingIndex] = buildingData;
    // this.setState({ buildings: oldState });
    this.props.updateBuildings(oldState);
  };

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
          src={GreenPlus}
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
          onClick={this.addBuilding}
        />
      );
    }
    let addBuilding;
    if (this.state.buildings.length >= 100) {
      addBuilding = <div className="Hidden" />;
    } else {
      addBuilding = (
        <div className="AddNPCButton">
          <div className="AddTextBuilding">Add Building</div>
          <div className="LowerCenteredImageHolder">
            <div className="LowerCenteredImage">
              <div className="CenteredImage">{plusImage}</div>
            </div>
          </div>
        </div>
      );
    }
    let settlementNumberDisplay;
    if (this.props.buildingMaximized === true) {
      settlementNumberDisplay = <div className="Hidden" />;
    } else {
      settlementNumberDisplay = (
        <div className="SettlementNPCsDisplayNumber">
          <div className="SettlementNPCsDisplayNumberText">
            {this.props.buildings.length} / 50
          </div>
        </div>
      );
    }
    return (
      <div className="SettlementNPCsDisplay">
        {settlementNumberDisplay}
        {addBuilding}
        {this.props.showBuildings}
      </div>
    );
  }
}

export default SettlementBuildings;
