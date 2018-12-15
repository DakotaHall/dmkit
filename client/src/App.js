import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import "./App.css";

import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Register from "./components/authorization/Register";
import Login from "./components/authorization/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Encounters from "./components/encounters/Encounters";
import Characters from "./components/characters/Characters";
import Settlements from "./components/settlements/Settlements";
import Monsters from "./components/monsters/Monsters";
import NPCs from "./components/npcs/NPCs";
import Quests from "./components/quests/Quests";
import InteractiveEncounter from "./components/encounters/InteractiveEncounter/InteractiveEncounter";
import InteractiveCharacter from "./components/characters/InteractiveCharacter/InteractiveCharacter";
import InteractiveMonster from "./components/monsters/InteractiveMonster/InteractiveMonster";
import InteractiveNPC from "./components/npcs/InteractiveNPC/InteractiveNPC";
import InteractiveSettlement from "./components/settlements/InteractiveSettlement/InteractiveSettlement";
import InteractiveQuest from "./components/quests/InteractiveQuest/InteractiveQuest";
import CreateEncounter from "./components/create-encounter/CreateEncounter";
import CreateCharacter from "./components/create-character/CreateCharacter";
import CreateMonster from "./components/create-monster/CreateMonster";
import CreateNPC from "./components/create-npc/CreateNPC";
import CreateSettlement from "./components/create-settlement/CreateSettlement";
import CreateQuest from "./components/create-quest/CreateQuest";
import OpenGamingLicense from "./components/OpenGameLicense/OpenGameLicense";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            {/* <div className="blackBackground" /> */}
            <div className="testfullscreen">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/encounters" component={Encounters} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/characters" component={Characters} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/monsters" component={Monsters} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/npcs" component={NPCs} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/settlements"
                  component={Settlements}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/quests" component={Quests} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/encounters/:_id"
                  component={InteractiveEncounter}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/characters/:_id"
                  component={InteractiveCharacter}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/monsters/:_id"
                  component={InteractiveMonster}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/npcs/:_id"
                  component={InteractiveNPC}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/settlements/:_id"
                  component={InteractiveSettlement}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/quests/:_id"
                  component={InteractiveQuest}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-character"
                  component={CreateCharacter}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-monster"
                  component={CreateMonster}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/create-npc" component={CreateNPC} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-encounter"
                  component={CreateEncounter}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-settlement"
                  component={CreateSettlement}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-quest"
                  component={CreateQuest}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/open-gaming-license"
                  component={OpenGamingLicense}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
