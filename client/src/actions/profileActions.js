import api from '../utils/api';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER
} from "./types";

export const noSettlementTutorial = () => dispatch => {
  api.post("/profile/settlementTutorial");
};

export const noEncounterTutorial = () => dispatch => {
  api.post("/profile/encounterTutorial");
};

export const noEncounterAddTutorial = () => dispatch => {
  api.post("/profile/encounterAddTutorial");
};

// Get current profile
export const getCurrentProfile = (loadingType, history) => dispatch => {
  dispatch(setProfileLoading());
  api
    .get("/profile")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .then(() => {
      if (loadingType === "settlements") {
        history.push("/settlements");
      } else if (loadingType === "createProfile") {
        history.push("/dashboard");
      } else if (loadingType === "quests") {
        history.push("/quests");
      } else if (loadingType === "monsters") {
        history.push("/monsters");
      } else if (loadingType === "characters") {
        history.push("/characters");
      } else if (loadingType === "npcs") {
        history.push("/npcs");
      } else if (loadingType === "encounters") {
        history.push("/encounters");
      }
    })
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  api
    .get(`/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  api
    .post("/profile", profileData)
    .then(res => {
      dispatch(getCurrentProfile("createProfile", history));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Edit a Character
export const editCharacter = (
  characterData,
  character_id,
  history
) => dispatch => {
  dispatch(clearErrors());
  api
    .put(`/profile/characters/${character_id}`, characterData)
    .then(res => dispatch(getCurrentProfile("characters", history)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Edit a Monster
export const editMonster = (monsterData, monster_id, history) => dispatch => {
  dispatch(clearErrors());
  api
    .put(`/profile/monsters/${monster_id}`, monsterData)
    .then(res => dispatch(getCurrentProfile("monsters", history)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Edit a NPC
export const editNPC = (npcData, npc_id, history) => dispatch => {
  dispatch(clearErrors());
  api
    .put(`/profile/npcs/${npc_id}`, npcData)
    .then(res => dispatch(getCurrentProfile("npcs", history)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Edit a Settlement
export const editSettlement = (
  settlementData,
  settlement_id,
  history
) => dispatch => {
  dispatch(clearErrors());
  api
    .put(`/profile/settlements/${settlement_id}`, settlementData)
    .then(res => {
      dispatch(getCurrentProfile("settlements", history));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete a Character
export const deleteCharacter = character_id => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    api
      .delete(`/profile/characters/${character_id}`)
      .then(res => (window.location = window.location))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

// Delete a Monster
export const deleteMonster = monster_id => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    api
      .delete(`/profile/monsters/${monster_id}`)
      .then(res => (window.location = window.location))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

// Delete an NPC
export const deleteNPC = npc_id => dispatch => {
  if (
    window.confirm(
      "Are you sure? This can NOT be undone! Any references to this NPC within a settlement will be deleted as well."
    )
  ) {
    api
      .delete(`/profile/npcs/${npc_id}`)
      .then(res => (window.location = window.location))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

// Delete a Settlement
export const deleteSettlement = settlement_id => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    api
      .delete(`/profile/settlements/${settlement_id}`)
      .then(res => (window.location = window.location))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

// Delete a Encounter
export const deleteEncounter = encounter_id => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    api
      .delete(`/profile/encounters/${encounter_id}`)
      .then(res => (window.location = window.location))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

// Delete a Quest
export const deleteQuest = quest_id => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    api
      .delete(`/profile/quests/${quest_id}`)
      .then(res => (window.location = window.location))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

// Create a Character
export const createCharacter = (characterData, history) => dispatch => {
  dispatch(clearErrors());
  api
    .post("/profile/characters", characterData)
    .then(res => dispatch(getCurrentProfile("characters", history)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create a Monster
export const createMonster = (monsterData, history) => dispatch => {
  dispatch(clearErrors());
  api
    .post("/profile/monsters", monsterData)
    .then(res => dispatch(getCurrentProfile("monsters", history)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create an NPC
export const createNPC = (npcData, history) => dispatch => {
  dispatch(clearErrors());
  api
    .post("/profile/npcs", npcData)
    .then(res => dispatch(getCurrentProfile("npcs", history)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create a Settlement
export const createSettlement = (settlementData, history) => dispatch => {
  dispatch(clearErrors());
  api
    .post("/profile/settlements", settlementData)
    .then(res => {
      dispatch(getCurrentProfile("settlements", history));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create an Encounter
export const createEncounter = (encounterData, history) => dispatch => {
  dispatch(clearErrors());
  api
    .post("/profile/encounters", encounterData)
    .then(res => dispatch(getCurrentProfile("encounters", history)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create a Quest
export const createQuest = (questData, history) => dispatch => {
  dispatch(clearErrors());
  api
    .post("/profile/quests", questData)
    .then(res => dispatch(getCurrentProfile("quests", history)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Edit a Quest
export const editQuest = (questData, quest_id, history) => dispatch => {
  dispatch(clearErrors());
  api
    .put(`/profile/quests/${quest_id}`, questData)
    .then(res => dispatch(getCurrentProfile("quests", history)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Edit an Encounter
export const editEncounter = (
  encounterData,
  encounter_id,
  history
) => dispatch => {
  dispatch(clearErrors());
  api
    .put(`/profile/encounters/${encounter_id}`, encounterData)
    .then(res => dispatch(getCurrentProfile("encounters", history)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    api
      .delete("/profile")
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Navigate to OpenGamingLicense
export const openGamingLicense = () => dispatch => {
  console.log(window.location.pathname.substr(0, 200));
  let windowLocation = window.location.pathname.substr(0, 50);
  if (
    windowLocation === "/dashboard" ||
    windowLocation === "/characters" ||
    windowLocation === "/npcs" ||
    windowLocation === "/monsters" ||
    windowLocation === "/quests" ||
    windowLocation === "/encounters" ||
    windowLocation === "/settlements" ||
    windowLocation === "/open-gaming-license"
  ) {
    window.location = "/open-gaming-license";
  } else {
    if (
      window.confirm(
        "Are you sure you want to leave this page? Unsaved changes will be lost."
      )
    ) {
      window.location = "/open-gaming-license";
    }
  }
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
