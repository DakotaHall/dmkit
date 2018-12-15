import React, { Component } from "react";
import SettlementNPC from "../SettlementNPCs/SettlementNPC";
import BluePlus from "../../../images/blue_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";

class SettlementOrganization extends Component {
  state = {
    changed: false,
    name: this.props.organization.name,
    headquarters: this.props.organization.headquarters,
    leaders: this.props.organization.leaders,
    members: this.props.organization.members,
    description: this.props.organization.description,
    organization_leaders: this.props.organization.organization_leaders,
    organization_members: this.props.organization.organization_members,
    updatedLeaders: [],
    updatedMembers: [],
    organizationIndex: this.props.organizationIndex,
    _id: this.props.organization._id,
    organizationValues: {},
    addNPC: "SettlementAddNPCHidden",
    addOrganizationLeader: "SettlementAddNPCHidden",
    addOrganizationMember: "SettlementAddNPCHidden",
    showEditNPC: "SettlementCreateNPCHidden",
    createNPC: "SettlementCreateNPCHidden",
    editNPCDisplay: "",
    maximized: false,
    size: "SettlementNPCDisplay",
    premadeNPCs: this.props.premadeNPCs,
    createNPCDisplay: null,
    showOrganizationLeaders: "ShowCharacterSection",
    showOrganizationMembers: "HideCharacterSection",
    organizationLeaders: "CharacterClicked",
    organizationMembers: "CharacterUnclicked",
    arrowRight: "ArrowRightBook",
    arrowLeft: "ArrowLeftBook",
    displayIndex: 0,
    memberDisplay: false,
    leaderDisplay: false,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.organization !== prevProps.organization) {
      this.setState({
        name: this.props.organization.name,
        headquarters: this.props.organization.headquarters,
        leaders: this.props.organization.leaders,
        members: this.props.organization.members,
        description: this.props.organization.description,
        organization_leaders: this.props.organization.organization_leaders,
        organization_members: this.props.organization.organization_members,
        updatedLeaders: this.props.organization.updatedLeaders,
        updatedMembers: this.props.organization.updatedMembers
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.saveOrganizationValues();
    });
  };

  saveOrganizationValues = () => {
    this.setState(
      {
        organizationValues: {
          name: this.state.name,
          headquarters: this.state.headquarters,
          organization_leaders: this.state.organization_leaders,
          organization_members: this.state.organization_members,
          description: this.state.description
        }
      },
      () => {
        this.props.changeOrganization(
          this.props.organizationIndex,
          this.state.organizationValues
        );
      }
    );
  };

  maximize = () => {
    this.setState({ size: "SettlementOrganizationDisplayMaximized" }, () => {
      this.props.changeOrganizationMaximize();
      document.addEventListener("click", this.clickFunction);
      let organizations = document.getElementsByClassName(
        "SettlementNPCDisplay"
      );
      for (let i = 0; i < organizations.length; i++) {
        organizations[i].style.display = "none";
      }
      let addButton = document.getElementsByClassName("AddNPCButton");
      for (let i = 0; i < addButton.length; i++) {
        addButton[i].style.display = "none";
      }
    });
  };

  minimize = () => {
    this.setState({ size: "SettlementNPCDisplay" }, () => {
      this.props.changeOrganizationMaximize();
      document.removeEventListener("click", this.clickFunction);
      let organizations = document.getElementsByClassName(
        "SettlementNPCDisplay"
      );
      for (let i = 0; i < organizations.length; i++) {
        organizations[i].style.display = "inline-block";
      }
      let addButton = document.getElementsByClassName("AddNPCButton");
      for (let i = 0; i < addButton.length; i++) {
        addButton[i].style.display = "table";
      }
    });
  };

  removeOrganization = () => {
    this.setState({ size: "SettlementNPCDisplay" }, () => {
      this.props.changeOrganizationMaximize();
      document.removeEventListener("click", this.clickFunction);
      let organizations = document.getElementsByClassName(
        "SettlementNPCDisplay"
      );
      for (let i = 0; i < organizations.length; i++) {
        organizations[i].style.display = "inline-block";
      }
      let addButton = document.getElementsByClassName("AddNPCButton");
      for (let i = 0; i < addButton.length; i++) {
        addButton[i].style.display = "table";
      }
      this.props.removeOrganization(this.props.organizationIndex);
    });
  };

  changeOrganizationLeader = (
    organizationLeaderIndex,
    organizationLeaderData
  ) => {
    let oldState = this.state.organization_leaders;
    oldState[organizationLeaderIndex] = organizationLeaderData;
    this.setState({ organization_leaders: oldState }, () => {
      let organization = {
        name: this.state.name,
        description: this.state.description,
        headquarters: this.state.headquarters,
        organization_leaders: this.state.organization_leaders,
        organization_members: this.state.organization_members
      };
      this.props.changeOrganization(this.props.organizationIndex, organization);
    });
  };

  changeOrganizationMember = (
    organizationMemberIndex,
    organizationMemberData
  ) => {
    let oldState = this.state.organization_members;
    oldState[organizationMemberIndex] = organizationMemberData;
    this.setState({ organization_members: oldState }, () => {
      let organization = {
        name: this.state.name,
        description: this.state.description,
        headquarters: this.state.headquarters,
        organization_leaders: this.state.organization_leaders,
        organization_members: this.state.organization_members
      };
      this.props.changeOrganization(this.props.organizationIndex, organization);
    });
  };

  viewLeaders = () => {
    this.setState({
      showOrganizationLeaders: "ShowCharacterSection",
      showOrganizationMembers: "HideCharacterSection",
      organizationLeaders: "CharacterClicked",
      organizationMembers: "CharacterUnclicked"
    });
  };

  viewMembers = () => {
    this.setState({
      showOrganizationLeaders: "HideCharacterSection",
      showOrganizationMembers: "ShowCharacterSection",
      organizationLeaders: "CharacterUnclicked",
      organizationMembers: "CharacterClicked"
    });
  };

  clickFunction = event => {
    if (
      event.target.closest(".EditSettlementNPCs") ||
      event.target.closest(".EditSettlementBuildings")
    )
      this.minimize();
  };

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const leaderList = [];
    for (let i = 0; i < this.state.organization_leaders.length; i++) {
      let neededNPC = this.state.premadeNPCs.find(
        x => x._id === this.state.organization_leaders[i]
      );
      let leader = (
        <SettlementNPC
          key={`SettlementOrganizationLeader${i}`}
          size="SettlementNPCDisplay"
          showOrganizationNPC={this.props.showOrganizationNPC}
          hideNPC={this.props.hideNPC}
          changeNPC={this.props.changeNPC}
          NPC={neededNPC}
          npcIndex={i}
          organizationIndex={this.props.organizationIndex}
          removeOrganizationLeader={this.props.removeOrganizationLeader}
          npcValue="OrganizationLeader"
        />
      );
      leaderList.push(leader);
    }

    const memberList = [];
    for (let i = 0; i < this.state.organization_members.length; i++) {
      let neededNPC = this.state.premadeNPCs.find(
        x => x._id === this.state.organization_members[i]
      );
      let member = (
        <SettlementNPC
          key={`SettlementOrganizationMember${i}`}
          size="SettlementNPCDisplay"
          showOrganizationNPC={this.props.showOrganizationNPC}
          hideNPC={this.props.hideNPC}
          changeNPC={this.props.changeNPC}
          NPC={neededNPC}
          organizationIndex={this.props.organizationIndex}
          npcIndex={i}
          removeNPC={this.removeNPC}
          removeOrganizationMember={this.props.removeOrganizationMember}
          npcValue="OrganizationMember"
        />
      );
      memberList.push(member);
    }

    let organizationDisplay;
    if (this.state.size === "SettlementNPCDisplay") {
      organizationDisplay = (
        <div>
          <div className="RemoveMaximizeHolder">
            <div
              className="RemoveBuilding"
              onClick={this.props.removeOrganization.bind(
                this,
                this.props.organizationIndex
              )}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="OrganizationMaximizeButton" onClick={this.maximize}>
              <div className="CenteredPlusNoColor">
                {" "}
                <i className="fa fa-window-maximize" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="SettlementNPCName ">
            <div className="EditCharacterText">Name</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="SettlementNPCDescription">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Description
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
        </div>
      );
    } else {
      let leaderPlusImage;
      if (this.state.hovered === false) {
        leaderPlusImage = (
          <img
            src={BluePlus}
            alt="+"
            className="CenteredImage"
            onMouseEnter={this.changePlus}
          />
        );
      } else {
        leaderPlusImage = (
          <img
            src={GrayPlus}
            alt="+"
            className="CenteredImage"
            onMouseLeave={this.changePlus}
            onClick={() =>
              this.props.addNPCHelper(
                this.props.organizationIndex,
                "OrganizationLeader"
              )
            }
          />
        );
      }
      let memberPlusImage;
      if (this.state.hovered === false) {
        memberPlusImage = (
          <img
            src={BluePlus}
            alt="+"
            className="CenteredImage"
            onMouseEnter={this.changePlus}
          />
        );
      } else {
        memberPlusImage = (
          <img
            src={GrayPlus}
            alt="+"
            className="CenteredImage"
            onMouseLeave={this.changePlus}
            onClick={() =>
              this.props.addNPCHelper(
                this.props.organizationIndex,
                "OrganizationMember"
              )
            }
          />
        );
      }
      let addOrganizationLeader;
      if (this.state.organization_leaders.length >= 25) {
        addOrganizationLeader = <div className="Hidden" />;
      } else {
        addOrganizationLeader = (
          <div className="AddOrganizationNPCButton">
            <div className="AddTextSettlementOrganization">
              Add Organization Leader
            </div>
            <div className="LowerCenteredImageSettlement">
              <div className="CenteredImage"> {leaderPlusImage}</div>
            </div>
          </div>
        );
      }
      let addOrganizationMember;
      if (this.state.organization_members.length >= 100) {
        addOrganizationMember = <div className="Hidden" />;
      } else {
        addOrganizationMember = (
          <div className="AddOrganizationNPCButton">
            <div className="AddTextSettlementOrganization">
              Add Organization Member
            </div>
            <div className="LowerCenteredImageSettlement">
              <div className="CenteredImage"> {memberPlusImage}</div>
            </div>
          </div>
        );
      }
      organizationDisplay = (
        <div>
          <div className={this.state.showEditNPC}>
            {this.state.editNPCDisplay}
          </div>
          <div className="RemoveMaximizeHolderMaximized">
            <div
              className="RemoveBuildingMaximized"
              onClick={this.removeOrganization}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="OrganizationMinimizeButton" onClick={this.minimize}>
              <div className="CenteredPlusNoColor">
                <i className="fa fa-window-minimize" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="OrganizationNameMaximized">
            <div className="EditCharacterText">Name</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="OrganizationDescriptionMaximized">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              Description
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="OrganizationHeadquarters ">
            <div className="EditCharacterText">Headquarters</div>
            <input
              maxLength="100"
              className="EditCharacterInput"
              name="headquarters"
              value={this.state.headquarters}
              onChange={this.onChange}
            />
          </div>
          <div className="OrganizationNPCHolder">
            <div
              className={`OrganizationLeadersHeading ${
                this.state.organizationLeaders
              }`}
              onClick={this.viewLeaders}
            >
              <div className="BuildingOwnersText">Leader(s)</div>
            </div>
            <div className={this.state.showOrganizationLeaders}>
              <div className="SettlementNPCsDisplayNumber">
                <div className="SettlementNPCsDisplayNumberText">
                  {this.state.organization_leaders.length} / 25
                </div>
              </div>
              {addOrganizationLeader}
              {leaderList}
            </div>
            <div
              className={`OrganizationMembersHeading ${
                this.state.organizationMembers
              }`}
              onClick={this.viewMembers}
            >
              <div className="BuildingOwnersText">Member(s)</div>
            </div>
            <div className={this.state.showOrganizationMembers}>
              <div className="SettlementNPCsDisplayNumber">
                <div className="SettlementNPCsDisplayNumberText">
                  {this.state.organization_members.length} / 100
                </div>
              </div>
              {addOrganizationMember}
              {memberList}
            </div>
          </div>
        </div>
      );
    }

    return <div className={this.state.size}>{organizationDisplay}</div>;
  }
}

export default SettlementOrganization;
