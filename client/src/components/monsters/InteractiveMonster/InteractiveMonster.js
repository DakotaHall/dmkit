import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";
import Spinner from "../../common/Spinner";
import EditMonster from "./EditMonster.js";

class InteractiveMonster extends Component {
  UNSAFE_componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  render() {
    const { profile, loading } = this.props.profile;

    let sweg;
    let monster;

    if (profile === null || loading) {
      monster = <Spinner />;
    } else {
      sweg = window.location.pathname;
      let swag = sweg.substr(12, 200);

      let neededMonster = profile.monsters.find(x => x._id === swag);

      monster = <EditMonster monster={neededMonster} neededProfile={profile} />;
    }

    return <div className="ViewPageHolder">{monster}</div>;
  }
}

InteractiveMonster.propTypes = {
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
)(InteractiveMonster);
