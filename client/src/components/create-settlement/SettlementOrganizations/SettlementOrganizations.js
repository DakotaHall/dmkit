import React, { Component } from "react";
import SettlementOrganization from "./SettlementOrganization";
import GreenPlus from "../../../images/green_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";
class SettlementOrganizations extends Component {
  state = {
    organizations: this.props.organizations,
    changed: false,
    showOrganizations: this.props.showOrganizations,
    updatedOrganizations: [],
    premadeNPCs: this.props.premadeNPCs,
    hovered: false
  };

  addOrganization = () => {
    let newOrganizations = this.state.organizations;
    let newOrganization = {
      name: "",
      headquarters: "",
      leaders: "",
      members: "",
      description: "",
      organization_leaders: [],
      organization_members: []
    };
    newOrganizations.push(newOrganization);
    let newOrganizationsDisplay = [];
    for (let i = 0; i < newOrganizations.length; i++) {
      let newOrganizationDisplay = (
        <SettlementOrganization
          key={`Organization${i}`}
          organization={newOrganizations[i]}
          showNPC={this.props.showNPC}
          hideNPC={this.props.hideNPC}
          changeOrganization={this.changeOrganization}
          changeOrganizationLeader={this.props.changeOrganizationLeader}
          addCreatedNPC={this.props.addCreatedNPC}
          organizationIndex={i}
          removeOrganization={this.props.removeOrganization}
          premadeNPCs={this.props.premadeNPCs}
          showEditNPC={this.props.showEditNPC}
          removeOrganizationLeader={this.props.removeOrganizationLeader}
          removeOrganizationMember={this.props.removeOrganizationMember}
        />
      );
      newOrganizationsDisplay.push(newOrganizationDisplay);
    }

    this.setState(
      {
        organizations: newOrganizations
        // showOrganizations: newOrganizationsDisplay
      },
      () => {
        this.props.addOrganization(this.state.organizations);
      }
    );
  };

  // removeOrganization = index => {
  //   this.props.removeOrganization(index);
  // };

  changeOrganization = (organizationIndex, organizationData) => {
    let oldState = this.state.organizations;
    oldState[organizationIndex] = organizationData;
    // this.setState({ organizations: oldState });
    this.props.updateOrganizations(oldState);
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
          onClick={this.addOrganization}
        />
      );
    }
    let addOrganization;
    if (this.state.organizations.length >= 50) {
      addOrganization = <div className="Hidden" />;
    } else {
      addOrganization = (
        <div className="AddNPCButton">
          <div className="AddTextOrganization">Add Organization</div>
          <div className="LowerCenteredImageHolder">
            <div className="LowerCenteredImage">
              <div className="CenteredImage">{plusImage}</div>
            </div>
          </div>
        </div>
      );
    }
    let settlementNumberDisplay;
    if (this.props.organizationMaximized === true) {
      settlementNumberDisplay = <div className="Hidden" />;
    } else {
      settlementNumberDisplay = (
        <div className="SettlementNPCsDisplayNumber">
          <div className="SettlementNPCsDisplayNumberText">
            {this.props.organizations.length} / 50
          </div>
        </div>
      );
    }
    return (
      <div className="SettlementNPCsDisplay">
        {settlementNumberDisplay}
        {addOrganization}
        {this.props.showOrganizations}
      </div>
    );
  }
}

export default SettlementOrganizations;
