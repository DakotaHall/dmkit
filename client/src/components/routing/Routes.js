import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from "../auth/Register";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import Encounters from "../encounters/Encounters";
import Characters from "../characters/Characters";
import Settlements from "../settlements/Settlements";
import Monsters from "../monsters/Monsters";
import NPCs from "../npcs/NPCs";
import Quests from "../quests/Quests";
import InteractiveEncounter from "../encounters/InteractiveEncounter/InteractiveEncounter";
import InteractiveCharacter from "../characters/InteractiveCharacter/InteractiveCharacter";
import InteractiveMonster from "../monsters/InteractiveMonster/InteractiveMonster";
import InteractiveNPC from "../npcs/InteractiveNPC/InteractiveNPC";
import InteractiveSettlement from "../settlements/InteractiveSettlement/InteractiveSettlement";
import InteractiveQuest from "../quests/InteractiveQuest/InteractiveQuest";
import CreateEncounter from "../create-encounter/CreateEncounter";
import CreateCharacter from "../create-character/CreateCharacter";
import CreateMonster from "../create-monster/CreateMonster";
import CreateNPC from "../create-npc/CreateNPC";
import CreateSettlement from "../create-settlement/CreateSettlement";
import CreateQuest from "../create-quest/CreateQuest";
 import OpenGamingLicense from "../OpenGameLicense/OpenGameLicense";
//import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
    return (
      <section >
        {/* <Alert /> */}
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/encounters" component={Encounters} />
        <PrivateRoute exact path="/characters" component={Characters} />
        <PrivateRoute exact path="/monsters" component={Monsters} />
        <PrivateRoute exact path="/npcs" component={NPCs} />
        <PrivateRoute exact path="/settlements" component={Settlements} />
        <PrivateRoute exact path="/quests" component={Quests} />
        <PrivateRoute exact path="/encounters/:_id" component={InteractiveEncounter} />
        <PrivateRoute exact path="/characters/:_id" component={InteractiveCharacter} />
        <PrivateRoute exact path="/monsters/:_id" component={InteractiveMonster} />
        <PrivateRoute exact path="/npcs/:_id" component={InteractiveNPC} />
        <PrivateRoute exact path="/settlements/:_id" component={InteractiveSettlement} />
        <PrivateRoute exact path="/quests/:_id" component={InteractiveQuest} />
        <PrivateRoute exact path="/create-character" component={CreateCharacter} />
        <PrivateRoute exact path="/create-monster" component={CreateMonster} />
        <PrivateRoute exact path="/create-npc" component={CreateNPC} />
        <PrivateRoute exact path="/create-encounter"  component={CreateEncounter} />
        <PrivateRoute exact path="/create-settlement" component={CreateSettlement} />
        <PrivateRoute exact path="/create-quest" component={CreateQuest} />
        <PrivateRoute exact path="/open-gaming-license" component={OpenGamingLicense} />
              
          {/* <Route component={NotFound} /> */}
        </Switch>
      </section>
    );
  };
  
  export default Routes;