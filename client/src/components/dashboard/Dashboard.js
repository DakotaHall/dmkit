import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  deleteAccount,
  createProfile
} from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import CharacterImage from "../../images/character_front.png";
import MonsterImage from "../../images/monsters_front.png";
import NPCImage from "../../images/NPC_front.png";
import EncounterImage from "../../images/encounter_front.png";
import QuestImage from "../../images/quests_front4.png";
import SettlementImage from "../../images/settlements_front.png";

class Dashboard extends Component {
  state = {
    handle: "",
    errors: {}
  };

 UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle
    };
    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  UNSAFE_componentWillMount = () => {
    this.props.getCurrentProfile();
    
  };

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  render() {
    const { profile, loading } = this.props.profile;
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 1) {
        dashboardContent = (
          <div>
            <div className="DashboardWelcomeText">
              Welcome, {profile.handle}!
            </div>
            <div className="DashboardPages">
              <div className="DashboardPage ">
                <div className="ImageHolder">
                  <img
                    src={CharacterImage}
                    alt="my characters"
                    className="ImageFill"
                  />
                </div>

                <div className="PageText">my characters</div>
                <Link
                  to="/characters"
                  className="DashboardViewButton ViewCharactersColors"
                >
                  View
                </Link>
              </div>
              <div className="DashboardPage ">
                <div className="ImageHolder">
                  <img
                    src={EncounterImage}
                    alt="my encounters"
                    className="ImageFill"
                  />
                </div>

                <div className="PageText">my encounters</div>
                <Link
                  to="/encounters"
                  className="DashboardViewButton ViewEncountersColors"
                >
                  View
                </Link>
              </div>
              <div className="DashboardPage ">
                <div className="ImageHolder">
                  <img
                    src={MonsterImage}
                    alt="my monsters"
                    className="ImageFill"
                  />
                </div>

                <div className="PageText">my monsters</div>

                <a
                  href="/monsters"
                  className="DashboardViewButton ViewMonstersColors"
                >
                  View
                </a>
              </div>
              <div className="DashboardPage ">
                <div className="ImageHolder">
                  <img src={NPCImage} alt="my npcs" className="ImageFill" />
                </div>

                <div className="PageText">my npcs</div>
                <a href="/npcs" className="DashboardViewButton ViewNPCsColors">
                  View
                </a>
              </div>
              <div className="DashboardPage ">
                <div className="ImageHolder">
                  <img src={QuestImage} alt="my quests" className="ImageFill" />
                </div>

                <div className="PageText">my quests</div>
                <a
                  href="/quests"
                  className="DashboardViewButton ViewQuestsColors"
                >
                  View
                </a>
              </div>
              <div className="DashboardPage ">
                <div className="ImageHolder">
                  <img
                    src={SettlementImage}
                    alt="my settlements"
                    className="ImageFill"
                  />
                </div>

                <div className="PageText">my settlements</div>
                <a
                  href="/settlements"
                  className="DashboardViewButton ViewSettlementsColors"
                >
                  View
                </a>
              </div>
            </div>
            <div style={{ marginBottom: "60px" }} />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <div className="WelcomeText">Welcome</div>
            <div className="ProfileNeedHandleText">
              Please choose a profile handle you would like associated with your
              account.
            </div>
            <form onSubmit={this.onSubmit}>
              <input
                maxLength="1000"
                className="ProfileHandleInput"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
              />
              <input
                type="submit"
                value="Create Profile"
                className="SubmitHandleButton"
              />
            </form>
          </div>
        );
      }
    }

    return <div className="ViewPageHolder">{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount, createProfile }
)(Dashboard);
