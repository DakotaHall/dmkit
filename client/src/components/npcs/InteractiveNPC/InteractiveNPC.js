import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";
import Spinner from "../../common/Spinner";
import EditNPC from "./EditNPC.js";

class InteractiveNPC extends Component {
  componentWillMount = () => {
    this.props.getCurrentProfile();
  };

  render() {
    const { profile, loading } = this.props.profile;

    let sweg;
    let npc;

    if (profile === null || loading) {
      npc = <Spinner />;
    } else {
      sweg = window.location.pathname;
      let swag = sweg.substr(12, 200);

      let neededNPC = profile.NPCs.find(x => x._id === swag);

      npc = <EditNPC npc={neededNPC} neededProfile={profile} />;
    }

    return <div className="ViewPageHolder">{npc}</div>;
  }
}

InteractiveNPC.propTypes = {
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
)(InteractiveNPC);
