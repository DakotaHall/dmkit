import React, { Component } from "react";
import SettlementNPC from "../SettlementNPCs/SettlementNPC";
import BluePlus from "../../../images/blue_plus_button.png";
import GrayPlus from "../../../images/gray_plus_button.png";

class SettlementBuilding extends Component {
  state = {
    changed: false,
    name: this.props.building.name,
    stock: this.props.building.stock,
    owners: this.props.building.owners,
    workers: this.props.building.workers,
    description: this.props.building.description,
    building_owners: this.props.building.building_owners,
    building_workers: this.props.building.building_workers,
    buildingIndex: this.props.buildingIndex,
    stocks: this.props.building.stocks,
    updatedOwners: [],
    updatedWorkers: [],
    _id: this.props.building._id,
    buildingValues: {},
    addNPC: "SettlementAddNPCHidden",
    addBuildingOwner: "SettlementAddNPCHidden",
    addBuildingWorker: "SettlementAddNPCHidden",
    showEditNPC: "SettlementCreateNPCHidden",
    createNPC: "SettlementCreateNPCHidden",
    editNPCDisplay: "",
    maximized: false,
    premadeNPCs: this.props.premadeNPCs,
    size: "SettlementNPCDisplay",
    createNPCDisplay: null,
    showBuildingOwners: "ShowCharacterSection",
    showBuildingWorkers: "HideCharacterSection",
    showBuildingStock: "HideCharacterSection",
    buildingOwners: "CharacterClicked",
    buildingWorkers: "CharacterUnclicked",
    buildingStock: "CharacterUnclicked",
    arrowRight: "ArrowRightBook",
    arrowLeft: "ArrowLeftBook",
    displayIndex: 0,
    workerDisplay: false,
    ownerDisplay: false,
    bookPageLeft: "BookPageLeft",
    bookPageRight: "BookPageRight",
    hovered: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.building !== prevProps.building) {
      this.setState({
        name: this.props.building.name,
        headquarters: this.props.building.headquarters,
        owners: this.props.building.owners,
        workers: this.props.building.workers,
        description: this.props.building.description,
        building_owners: this.props.building.building_owners,
        building_workers: this.props.building.building_workers,
        stock: this.props.building.stock,
        updatedOwners: this.props.building.updatedOwners,
        updatedWorkers: this.props.building.updatedWorkers
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.saveBuildingValues();
    });
  };

  saveBuildingValues = () => {
    this.setState(
      {
        buildingValues: {
          name: this.state.name,
          stock: this.state.stock,
          building_owners: this.state.building_owners,
          building_workers: this.state.building_workers,
          description: this.state.description,
          _id: this.state._id
        }
      },
      () => {
        this.props.changeBuilding(
          this.props.buildingIndex,
          this.state.buildingValues
        );
      }
    );
  };

  changeBuildingStockItemNames = (index, e) => {
    let oldState = this.state.stock;
    oldState[index].name = e.target.value;
    this.setState({ stock: oldState });
  };

  changeBuildingStockItemDescriptions = (index, e) => {
    let oldState = this.state.stock;
    oldState[index].description = e.target.value;
    this.setState({ stock: oldState });
  };

  changeBuildingStockItemPrices = (index, e) => {
    let oldState = this.state.stock;
    oldState[index].price = e.target.value;
    this.setState({ stock: oldState });
  };

  addBuildingStock = () => {
    let newBuildingStock = this.state.stock;
    let newStock = {
      name: "",
      price: "",
      description: ""
    };
    newBuildingStock.push(newStock);
    this.setState({ stock: newBuildingStock });
  };

  removeBuildingOwner = (index, e) => {
    let oldState = this.state.building_owners;
    oldState.splice(index, 1);
    this.setState({ building_owners: oldState });
  };

  removeBuildingWorker = (index, e) => {
    let oldState = this.state.building_workers;
    oldState.splice(index, 1);
    this.setState({ building_workers: oldState });
  };

  removeBuildingStock = (index, e) => {
    let oldState = this.state.stock;
    oldState.splice(index, 1);
    this.setState({ stock: oldState });
  };

  maximize = () => {
    this.setState({ size: "SettlementBuildingDisplayMaximized" }, () => {
      this.props.changeBuildingMaximize();
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
      this.props.changeBuildingMaximize();
      document.removeEventListener("click", this.clickFunction);
      let buildings = document.getElementsByClassName("SettlementNPCDisplay");
      for (let i = 0; i < buildings.length; i++) {
        buildings[i].style.display = "inline-block";
      }
      let addButton = document.getElementsByClassName("AddNPCButton");
      for (let i = 0; i < addButton.length; i++) {
        addButton[i].style.display = "table";
      }
    });
  };

  clickFunction = event => {
    if (
      event.target.closest(".EditSettlementNPCs") ||
      event.target.closest(".EditSettlementOrganizations")
    )
      this.minimize();
  };

  changeBuildingOwner = (buildingOwnerIndex, buildingOwnerData) => {
    let oldState = this.state.building_owners;
    oldState[buildingOwnerIndex] = buildingOwnerData;
    this.setState({ building_owners: oldState }, () => {
      let building = {
        name: this.state.name,
        description: this.state.description,
        stock: this.state.stock,
        building_owners: this.state.building_owners,
        building_workers: this.state.building_workers
      };
      this.props.changeBuilding(this.props.buildingIndex, building);
    });
  };

  changeBuildingWorker = (buildingWorkerIndex, buildingWorkerData) => {
    let oldState = this.state.building_workers;
    oldState[buildingWorkerIndex] = buildingWorkerData;
    this.setState({ building_workers: oldState }, () => {
      let building = {
        name: this.state.name,
        description: this.state.description,
        stock: this.state.stock,
        building_owners: this.state.building_owners,
        building_workers: this.state.building_workers
      };
      this.props.changeBuilding(this.props.buildingIndex, building);
    });
  };

  removeBuilding = () => {
    this.setState({ size: "SettlementNPCDisplay" }, () => {
      this.props.changeBuildingMaximize();
      document.removeEventListener("click", this.clickFunction);
      let buildings = document.getElementsByClassName("SettlementNPCDisplay");
      for (let i = 0; i < buildings.length; i++) {
        buildings[i].style.display = "inline-block";
      }
      let addButton = document.getElementsByClassName("AddNPCButton");
      for (let i = 0; i < addButton.length; i++) {
        addButton[i].style.display = "table";
      }

      this.props.removeBuilding(this.props.buildingIndex);
    });
  };

  viewOwners = () => {
    this.setState({
      showBuildingOwners: "ShowCharacterSection",
      showBuildingWorkers: "HideCharacterSection",
      showBuildingStock: "HideCharacterSection",
      buildingOwners: "CharacterClicked",
      buildingWorkers: "CharacterUnclicked",
      buildingStock: "CharacterUnclicked"
    });
  };

  viewWorkers = () => {
    this.setState({
      showBuildingOwners: "HideCharacterSection",
      showBuildingWorkers: "ShowCharacterSection",
      showBuildingStock: "HideCharacterSection",
      buildingOwners: "CharacterUnclicked",
      buildingWorkers: "CharacterClicked",
      buildingStock: "CharacterUnclicked"
    });
  };

  viewStock = () => {
    this.setState({
      showBuildingOwners: "HideCharacterSection",
      showBuildingWorkers: "HideCharacterSection",
      showBuildingStock: "ShowCharacterSection",
      buildingOwners: "CharacterUnclicked",
      buildingWorkers: "CharacterUnclicked",
      buildingStock: "CharacterClicked"
    });
  };

  changePlus = () => {
    if (this.state.hovered === false) {
      this.setState({ hovered: true });
    } else {
      this.setState({ hovered: false });
    }
  };

  render() {
    const ownerList = [];
    for (let i = 0; i < this.state.building_owners.length; i++) {
      let neededNPC = this.state.premadeNPCs.find(
        x => x._id === this.state.building_owners[i]
      );
      let owner = (
        <SettlementNPC
          key={`SettlementBuildingOwner${i}`}
          size="SettlementNPCDisplay"
          showBuildingNPC={this.props.showBuildingNPC}
          hideNPC={this.props.hideNPC}
          buildingIndex={this.props.buildingIndex}
          changeNPC={this.props.changeNPC}
          NPC={neededNPC}
          npcIndex={i}
          removeBuildingOwner={this.props.removeBuildingOwner}
          npcValue="BuildingOwner"
        />
      );
      ownerList.push(owner);
    }

    const workerList = [];
    for (let i = 0; i < this.state.building_workers.length; i++) {
      let neededNPC = this.state.premadeNPCs.find(
        x => x._id === this.state.building_workers[i]
      );
      let worker = (
        <SettlementNPC
          key={`SettlementBuildingWorker${i}`}
          size="SettlementNPCDisplay"
          showBuildingNPC={this.props.showBuildingNPC}
          hideNPC={this.props.hideNPC}
          buildingIndex={this.props.buildingIndex}
          changeNPC={this.props.changeNPC}
          NPC={neededNPC}
          npcIndex={i}
          removeBuildingWorker={this.props.removeBuildingWorker}
          npcValue="BuildingWorker"
        />
      );
      workerList.push(worker);
    }

    const stockItemList = [];
    for (let i = 0; i < this.props.building.stock.length; i++) {
      let stockItem = (
        <div key={`StockItem${i}`} className="StockItem">
          <div
            className="EditCharacterActionRemove"
            onClick={this.removeBuildingStock.bind(this, i)}
          >
            <div className="CenteredPlusNoColor">X</div>
          </div>
          <div className="EditStockNameHolder">
            <input
              maxLength="100"
              className="BuildingStockItemsNames"
              value={this.props.building.stock[i].name}
              onChange={this.changeBuildingStockItemNames.bind(this, i)}
            />
          </div>
          <div className="EditStockPriceHolder">
            <input
              maxLength="100"
              className="BuildingStockItemsPrices"
              value={this.props.building.stock[i].price}
              onChange={this.changeBuildingStockItemPrices.bind(this, i)}
            />
          </div>
          <div className="EditStockDescriptionHolder">
            <textarea
              maxLength="5000"
              className="BuildingStockItemsDescriptions"
              value={this.props.building.stock[i].description}
              onChange={this.changeBuildingStockItemDescriptions.bind(this, i)}
            />
          </div>
        </div>
      );
      stockItemList.push(stockItem);
    }

    let buildingDisplay;
    if (this.state.size === "SettlementNPCDisplay") {
      buildingDisplay = (
        <div>
          <div className="RemoveMaximizeHolder">
            <div
              className="RemoveBuilding"
              onClick={this.props.removeBuilding.bind(
                this,
                this.props.buildingIndex
              )}
            >
              <div className="CenteredPlusNoColor">X</div>
            </div>
            <div className="OrganizationMaximizeButton" onClick={this.maximize}>
              <div className="CenteredPlusNoColor">
                <i className="fa fa-window-maximize" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={this.state.showEditNPC}>
            {this.state.editNPCDisplay}
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
      let ownerPlusImage;
      if (this.state.hovered === false) {
        ownerPlusImage = (
          <img
            src={BluePlus}
            alt="+"
            className="CenteredImage"
            onMouseEnter={this.changePlus}
          />
        );
      } else {
        ownerPlusImage = (
          <img
            src={GrayPlus}
            alt="+"
            className="CenteredImage"
            onMouseLeave={this.changePlus}
            onClick={() =>
              this.props.addNPCHelper(this.props.buildingIndex, "BuildingOwner")
            }
          />
        );
      }
      let workerPlusImage;
      if (this.state.hovered === false) {
        workerPlusImage = (
          <img
            src={BluePlus}
            alt="+"
            className="CenteredImage"
            onMouseEnter={this.changePlus}
          />
        );
      } else {
        workerPlusImage = (
          <img
            src={GrayPlus}
            alt="+"
            className="CenteredImage"
            onMouseLeave={this.changePlus}
            onClick={() =>
              this.props.addNPCHelper(
                this.props.buildingIndex,
                "BuildingWorker"
              )
            }
          />
        );
      }
      let addBuildingOwner;
      if (this.state.building_owners.length >= 10) {
        addBuildingOwner = <div className="Hidden" />;
      } else {
        addBuildingOwner = (
          <div className="AddBuildingNPCButton">
            <div className="AddTextSettlementBuilding">Add Building Owner</div>
            <div className="LowerCenteredImageSettlement">
              <div className="CenteredImage"> {ownerPlusImage}</div>
            </div>
          </div>
        );
      }
      let addBuildingWorker;
      if (this.state.building_workers.length >= 50) {
        addBuildingWorker = <div className="Hidden" />;
      } else {
        addBuildingWorker = (
          <div className="AddBuildingNPCButton">
            <div className="AddTextSettlementBuilding">Add Building Worker</div>
            <div className="LowerCenteredImageSettlement">
              <div className="CenteredImage"> {workerPlusImage}</div>
            </div>
          </div>
        );
      }
      buildingDisplay = (
        <div className="SettlementNPCsDisplay">
          <div className="RemoveMaximizeHolderMaximized">
            <div
              className="RemoveBuildingMaximized"
              onClick={this.removeBuilding}
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
          <div className="BuildingDescriptionMaximized">
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

          <div className="BuildingNPCHolder">
            <div
              className={`EditCharacterAppearance ${this.state.buildingOwners}`}
              onClick={this.viewOwners}
            >
              <div className="BuildingOwnersText">Owner(s)</div>
            </div>
            <div className={this.state.showBuildingOwners}>
              <div className="SettlementNPCsDisplayNumber">
                <div className="SettlementNPCsDisplayNumberText">
                  {this.state.building_owners.length} / 10
                </div>
              </div>
              {addBuildingOwner}
              {ownerList}
            </div>
            <div
              className={`EditCharacterQualities ${this.state.buildingWorkers}`}
              onClick={this.viewWorkers}
            >
              <div className="BuildingOwnersText">Worker(s)</div>
            </div>
            <div className={this.state.showBuildingWorkers}>
              <div className="SettlementNPCsDisplayNumber">
                <div className="SettlementNPCsDisplayNumberText">
                  {this.state.building_workers.length} / 50
                </div>
              </div>
              {addBuildingWorker}
              {workerList}
            </div>
            <div
              className={`EditCharacterBackstory ${this.state.buildingStock}`}
              onClick={this.viewStock}
            >
              <div className="BuildingOwnersText">Stock</div>
            </div>
            <div className={this.state.showBuildingStock}>
              <div className="EditStockNameLabel">Name</div>
              <div className="EditStockPriceLabel">Price</div>
              <div className="EditStockDescriptionLabel">Description</div>
              <div className="EditCharacterActionMakeSpace" />
              {stockItemList}
              <div className="AddBuildingStock" onClick={this.addBuildingStock}>
                <div className="CenteredPlusNoColor">+</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div className={this.state.size}>{buildingDisplay}</div>;
  }
}

export default SettlementBuilding;
