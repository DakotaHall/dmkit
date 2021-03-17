import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";
import Spinner from "../../common/Spinner";
import EditQuest from "./EditQuest.js";

class InteractiveQuest extends Component {
  UNSAFE_componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  render() {
    const { profile, loading } = this.props.profile;

    let sweg;
    let quest;

    if (profile === null || loading) {
      quest = <Spinner />;
    } else {
      sweg = window.location.pathname;
      let swag = sweg.substr(12, 200);

      let neededQuest = profile.quests.find(x => x._id === swag);

      quest = <EditQuest quest={neededQuest} neededProfile={profile} />;
    }

    return <div className="ViewPageHolder">{quest}</div>;
  }
}

InteractiveQuest.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(InteractiveQuest);
