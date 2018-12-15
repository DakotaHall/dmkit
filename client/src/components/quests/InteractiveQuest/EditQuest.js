import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editQuest } from "../../../actions/profileActions";
import classnames from "classnames";
import Page from "../../../images/page1.png";

class EditQuest extends Component {
  state = {
    questId: window.location.pathname.substr(8, 200),
    name: "",
    image: "",
    description: "",
    quest_giver: "",
    requirements: "",
    rewards: "",
    file: "",
    neededProfile: this.props.neededProfile,
    errors: {},

    disabled: false
  };

  componentWillMount = () => {
    let neededQuest = this.state.neededProfile.quests.find(
      x => x._id === this.state.questId
    );
    this.setState({
      name: neededQuest.name,
      image: neededQuest.image,
      description: neededQuest.description,
      quest_giver: neededQuest.quest_giver,
      requirements: neededQuest.requirements,
      rewards: neededQuest.rewards
    });
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const questData = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      quest_giver: this.state.quest_giver,
      requirements: this.state.requirements,
      rewards: this.state.rewards
    };
    this.props.editQuest(questData, this.state.questId, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState(
        {
          file: file,
          image: reader.result
        },
        () => {
          var img = new Image();
          img.onload = () => {
            let wantedWidth;
            let wantedHeight;
            if (img.width > img.height) {
              let ratio = img.width / img.height;
              wantedWidth = 100;
              wantedHeight = wantedWidth / ratio;
            } else {
              let ratio = img.height / img.width;
              wantedHeight = 145;
              wantedWidth = wantedHeight / ratio;
              while (wantedWidth > 100) {
                wantedHeight -= 1;
                wantedWidth = wantedHeight / ratio;
              }
            }
            this.resizedataURL(this.state.image, wantedWidth, wantedHeight);
          };
          img.src = this.state.image;

        
        }
      );
    };
    if (file !== undefined) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsDataURL(this.state.file);
    }
  };
  resizedataURL = (datas, wantedWidth, wantedHeight) => {
    var img = document.createElement("img");
    let globalObject = this;
    img.onload = function() {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      canvas.width = wantedWidth;
      canvas.height = wantedHeight;

      ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);

      var dataURI = canvas.toDataURL();
      globalObject.setState({ image: dataURI });
    };

    img.src = datas;
  };

  render() {
    const { errors, image } = this.state;
    let imagePreview = null;
    if (image) {
      imagePreview = (
        <img className="EditCharacterImageDisplay" src={image} alt="" />
      );
    }
    return (
      <div className="ViewPageHolder">
      <div
          className="GoBackBook"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to leave this page? Unsaved changes will be lost."
              )
            ) {
              window.location = "/quests"
            }
          }}
        >
          <div className="CenteredPlusNoColor">
              <i className="fas fa-arrow-left" />
              Go Back
            </div>
        </div>
        <div className="QuestHolder">
          <div className="ImageFill">
            <img src={Page} alt="" className="ImageFill" />
          </div>

          <div className="EditQuestName">
            <div className="EditCharacterText">
              <div className="CenteredNoPointer">Name</div>
            </div>
            <input
              className={classnames("EditCharacterInput", {
                InvalidInput: errors.name
              })}
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
              maxLength="100"
            />
          </div>
          {errors.name && <div className="QuestNameError">{errors.name}</div>}
          <div className="EditQuestImage">
            <input
              className="EditQuestImageClick"
              name="image"
              type="file"
              onChange={e => this.handleImageChange(e)}
            />
          </div>
          <div className="EditQuestImageHolder">{imagePreview}</div>
          <div className="EditQuestGiver">
            <div className="EditCharacterText">
              <div className="CenteredNoPointer">QuestGiver(s)</div>
            </div>
            <input
              className="EditCharacterInput"
              name="quest_giver"
              value={this.state.quest_giver}
              onChange={this.onChange}
              maxLength="100"
            />
          </div>
          <div className="EditQuestRequirements">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              <div className="CenteredNoPointer">Requirements</div>
            </div>
            <textarea
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="requirements"
              value={this.state.requirements}
              onChange={this.onChange}
              maxLength="5000"
            />
          </div>
          <div className="EditQuestRewards">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              <div className="CenteredNoPointer">Rewards</div>
            </div>
            <textarea
              maxLength="5000"
              className="EditCharacterOtherProficienciesAndLanguagesInput"
              name="rewards"
              value={this.state.rewards}
              onChange={this.onChange}
            />
          </div>
          <div className="EditQuestDescription">
            <div className="EditCharacterOtherProficienciesAndLanguagesText">
              <div className="CenteredNoPointer">Description</div>
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
        <div
          onClick={this.onSubmit}
          className="BookSubmitButton ViewQuestsColors"
        >
          <div className="ButtonColorHelper">
            <div className="CenteredPlusNoColor">Create Quest</div>
          </div>
        </div>
      </div>
    );
  }
}

EditQuest.propTypes = {
  editQuest: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { editQuest }
)(withRouter(EditQuest));
