import React from "react";
import { Link } from "react-router-dom";
import WoodPlank from "../../images/wood_plank.png";

const ProfileActions = () => {
  return (
    <div className="DashboardBanner" role="group">
      <div className="ProfileActionsBackgroundImageHolder">
        <img src={WoodPlank} className="ImageFill" alt="" />
      </div>
      <div className="ProfileActionsNewCharacter">
        <Link to="/create-character" className="ProfileActionsText">
          <div className="CenteredPlus">New Character</div>
        </Link>
      </div>
      <div className="ProfileActionsNewMonster">
        <Link to="/create-monster" className="ProfileActionsText">
          <div className="CenteredPlus">New Monster</div>
        </Link>
      </div>
      <div className="ProfileActionsNewNPC">
        <Link to="/create-npc" className="ProfileActionsText">
          <div className="CenteredPlus">New NPC</div>
        </Link>
      </div>
      <div className="ProfileActionsNewEncounter">
        <Link to="/create-encounter" className="ProfileActionsText">
          <div className="CenteredPlus">New Encounter</div>
        </Link>
      </div>
      <div className="ProfileActionsNewSettlement">
        <Link to="/create-settlement" className="ProfileActionsText">
          <div className="CenteredPlus">New Settlement</div>
        </Link>
      </div>
      <div className="ProfileActionsNewQuest">
        <Link to="/create-quest" className="ProfileActionsText">
          <div className="CenteredPlus">New Quest</div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileActions;
