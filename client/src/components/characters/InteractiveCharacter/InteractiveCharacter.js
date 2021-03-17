import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";
import Spinner from "../../common/Spinner";
import EditCharacter from "./EditCharacter.js";

class InteractiveCharacter extends Component {
  UNSAFE_componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  render() {
    const { profile, loading } = this.props.profile;

    let sweg;
    let character;

    if (profile === null || loading) {
      character = <Spinner />;
    } else {
      sweg = window.location.pathname;
      let swag = sweg.substr(12, 200);

      let neededCharacter = profile.characters.find(x => x._id === swag);

      character = (
        <EditCharacter character={neededCharacter} neededProfile={profile} />
      );
    }

    return <div className="ViewPageHolder">{character}</div>;
  }
}

InteractiveCharacter.propTypes = {
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
)(InteractiveCharacter);
