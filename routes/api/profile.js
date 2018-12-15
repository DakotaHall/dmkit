const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const fetch = require("node-fetch");

// Load Validation
const validateProfileInput = require("../../validation/profile");
const validateCharacterInput = require("../../validation/character");
const validateMonsterInput = require("../../validation/monster");
const validateNPCInput = require("../../validation/npc");
const validateSettlementInput = require("../../validation/settlement");
const validateQuestInput = require("../../validation/quest");
const validateEncounterInput = require("../../validation/encounter");

// Load Models
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const NPC = require("../../models/NPCs");
const Character = require("../../models/Character");
const Monster = require("../../models/Monster");
const Encounter = require("../../models/Encounter");
const Settlement = require("../../models/Settlement");
const Quest = require("../../models/Quest");

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name"])
      .populate("NPCs")
      .populate("monsters")
      .populate("characters")
      .populate("encounters")
      .populate("settlements")
      .populate("quests")
      .exec()
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

// @route   POST api/profile
// @desc    Create or Edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update;
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => {
            fetch(
              "https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json"
            )
              .then(function(response) {
                return response.json();
              })
              .then(myJson => {
                for (let i = 0; i < myJson.length - 1; i++) {
                  const newMonster = new Monster({
                    name: myJson[i].name + "*",
                    user: req.user.id,
                    size: myJson[i].size,
                    challenge_rating: myJson[i].challenge_rating,
                    type: myJson[i].type,
                    subtype: myJson[i].subtype,
                    hit_points: myJson[i].hit_points,
                    alignment: myJson[i].alignment,
                    hit_dice: myJson[i].hit_dice,
                    strength: myJson[i].strength,
                    dexterity: myJson[i].dexterity,
                    constitution: myJson[i].constitution,
                    intelligence: myJson[i].intelligence,
                    wisdom: myJson[i].wisdom,
                    charisma: myJson[i].charisma,
                    strength_save: myJson[i].strength_save,
                    dexterity_save: myJson[i].dexterity_save,
                    constitution_save: myJson[i].constitution_save,
                    intelligence_save: myJson[i].intelligence_save,
                    wisdom_save: myJson[i].wisdom_save,
                    charisma_save: myJson[i].charisma_save,
                    acrobatics: myJson[i].acrobatics,
                    animal_handling: myJson[i].animal_handling,
                    arcana: myJson[i].arcana,
                    athletics: myJson[i].athletics,
                    deception: myJson[i].deception,
                    history: myJson[i].history,
                    insight: myJson[i].insight,
                    intimidation: myJson[i].intimidation,
                    investigation: myJson[i].investigation,
                    medicine: myJson[i].medicine,
                    nature: myJson[i].nature,
                    perception: myJson[i].perception,
                    performance: myJson[i].performance,
                    persuasion: myJson[i].persuasion,
                    religion: myJson[i].religion,
                    sleight_of_hand: myJson[i].sleight_of_hand,
                    stealth: myJson[i].stealth,
                    survival: myJson[i].survival,
                    damage_vulnerabilities: myJson[i].damage_vulnerabilities,
                    armor_class: myJson[i].armor_class,
                    damage_resistances: myJson[i].damage_resistances,
                    speed: myJson[i].speed,
                    damage_immunities: myJson[i].damage_immunities,
                    condition_immunities: myJson[i].condition_immunities,
                    senses: myJson[i].senses,
                    languages: myJson[i].languages,
                    special_abilities: myJson[i].special_abilities,
                    actions: myJson[i].actions,
                    legendary_actions: myJson[i].legendary_actions
                  });
                  newMonster.save();

                  profile.monsters.push(newMonster);
                }

                profile.encounter_tutorial = true;
                profile.encounter_add_tutorial = true;
                profile.settlement_tutorial = true;
              })
              .then(() => {
                profile.save().then(profile => res.json(profile));
              });
          });
        });
      }
    });
  }
);

// @route   POST api/profile/settlementTutorial
// @desc    Change settlement_tutorial value on Profile to false
// @access  Private
router.post(
  "/settlementTutorial",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.settlement_tutorial = false;
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/encounterTutorial
// @desc    Change encounter_tutorial value on Profile to false
// @access  Private
router.post(
  "/encounterTutorial",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.encounter_tutorial = false;
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/encounterAddTutorial
// @desc    Change encounter_add_tutorial value on Profile to false
// @access  Private
router.post(
  "/encounterAddTutorial",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.encounter_add_tutorial = false;
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/npcs
// @desc    Create/Add npcs to profile
// @access  Private
router.post(
  "/npcs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateNPCInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newNPC = new NPC({
      name: req.body.name,
      image: req.body.image,
      user: req.user.id,
      description: req.body.description,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
      eyes: req.body.eyes,
      skin: req.body.skin,
      hair: req.body.hair,
      class_and_level: req.body.class_and_level,
      information: req.body.information,
      equipment: req.body.equipment,
      copper: req.body.copper,
      silver: req.body.silver,
      gold: req.body.gold,
      electrum: req.body.electrum,
      platinum: req.body.platinum,
      behavior: req.body.behavior,
      challenge_rating: req.body.challenge_rating,
      background: req.body.background,
      backstory: req.body.backstory,
      factions: req.body.factions,
      race: req.body.race,
      alignment: req.body.alignment,
      other_proficiencies_and_languages:
        req.body.other_proficiencies_and_languages,
      inspiration: req.body.inspiration,
      proficiency_bonus: req.body.proficiency_bonus,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      strength_save: req.body.strength_save,
      dexterity_save: req.body.dexterity_save,
      constitution_save: req.body.constitution_save,
      intelligence_save: req.body.intelligence_save,
      wisdom_save: req.body.wisdom_save,
      charisma_save: req.body.charisma_save,
      acrobatics: req.body.acrobatics,
      animal_handling: req.body.animal_handling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      performance: req.body.performance,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleight_of_hand: req.body.sleight_of_hand,
      stealth: req.body.stealth,
      survival: req.body.survival,
      acrobatics_proficiency: req.body.acrobatics_proficiency,
      animal_handling_proficiency: req.body.animal_handling_proficiency,
      arcana_proficiency: req.body.arcana_proficiency,
      athletics_proficiency: req.body.athletics_proficiency,
      deception_proficiency: req.body.deception_proficiency,
      history_proficiency: req.body.history_proficiency,
      insight_proficiency: req.body.insight_proficiency,
      intimidation_proficiency: req.body.intimidation_proficiency,
      investigation_proficiency: req.body.investigation_proficiency,
      medicine_proficiency: req.body.medicine_proficiency,
      nature_proficiency: req.body.nature_proficiency,
      perception_proficiency: req.body.perception_proficiency,
      performance_proficiency: req.body.performance_proficiency,
      persuasion_proficiency: req.body.persuasion_proficiency,
      religion_proficiency: req.body.religion_proficiency,
      sleight_of_hand_proficiency: req.body.sleight_of_hand_proficiency,
      stealth_proficiency: req.body.stealth_proficiency,
      survival_proficiency: req.body.survival_proficiency,
      passive_perception: req.body.passive_perception,
      armor_class: req.body.armor_class,
      initiative: req.body.initiative,
      speed: req.body.speed,
      hit_points: req.body.hit_points,
      damage_vulnerabilities: req.body.damage_vulnerabilities,
      damage_immunities: req.body.damage_immunities,
      damage_resistances: req.body.damage_resistances,
      condition_immunities: req.body.condition_immunities,
      hit_dice: req.body.hit_dice,
      actions: req.body.actions,
      spellcasting_ability: req.body.spellcasting_ability,
      spell_save_dc: req.body.spell_save_dc,
      spell_attack_bonus: req.body.spell_attack_bonus,
      spells: req.body.spells,
      first_level_spell_slots: req.body.first_level_spell_slots,
      second_level_spell_slots: req.body.second_level_spell_slots,
      third_level_spell_slots: req.body.third_level_spell_slots,
      fourth_level_spell_slots: req.body.fourth_level_spell_slots,
      fifth_level_spell_slots: req.body.fifth_level_spell_slots,
      sixth_level_spell_slots: req.body.sixth_level_spell_slots,
      seventh_level_spell_slots: req.body.seventh_level_spell_slots,
      eighth_level_spell_slots: req.body.eighth_level_spell_slots,
      ninth_level_spell_slots: req.body.ninth_level_spell_slots,
      features_and_traits: req.body.features_and_traits
    });

    newNPC.save();
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.NPCs.unshift(newNPC);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/monsters
// @desc    Create/Add monsters to profile
// @access  Private
router.post(
  "/monsters",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMonsterInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newMonster = new Monster({
      name: req.body.name,
      image: req.body.image,
      user: req.user.id,
      size: req.body.size,
      loot: req.body.loot,
      challenge_rating: req.body.challenge_rating,
      type: req.body.type,
      subtype: req.body.subtype,
      hit_points: req.body.hit_points,
      alignment: req.body.alignment,
      hit_dice: req.body.hit_dice,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      strength_save: req.body.strength_save,
      dexterity_save: req.body.dexterity_save,
      constitution_save: req.body.constitution_save,
      intelligence_save: req.body.intelligence_save,
      wisdom_save: req.body.wisdom_save,
      charisma_save: req.body.charisma_save,
      acrobatics: req.body.acrobatics,
      animal_handling: req.body.animal_handling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      performance: req.body.performance,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleight_of_hand: req.body.sleight_of_hand,
      stealth: req.body.stealth,
      survival: req.body.survival,
      damage_vulnerabilities: req.body.damage_vulnerabilities,
      armor_class: req.body.armor_class,
      damage_resistances: req.body.damage_resistances,
      speed: req.body.speed,
      damage_immunities: req.body.damage_immunities,
      condition_immunities: req.body.condition_immunities,
      senses: req.body.senses,
      languages: req.body.languages,
      special_abilities: req.body.special_abilities,
      actions: req.body.actions,
      legendary_actions: req.body.legendary_actions,
      spells: req.body.spells,
      first_level_spell_slots: req.body.first_level_spell_slots,
      second_level_spell_slots: req.body.second_level_spell_slots,
      third_level_spell_slots: req.body.third_level_spell_slots,
      fourth_level_spell_slots: req.body.fourth_level_spell_slots,
      fifth_level_spell_slots: req.body.fifth_level_spell_slots,
      sixth_level_spell_slots: req.body.sixth_level_spell_slots,
      seventh_level_spell_slots: req.body.seventh_level_spell_slots,
      eighth_level_spell_slots: req.body.eighth_level_spell_slots,
      ninth_level_spell_slots: req.body.ninth_level_spell_slots,
      lair_actions: req.body.lair_actions,
      regional_effects: req.body.regional_effects,
      information: req.body.information,
      description: req.body.description,
      spellcasting_ability: req.body.spellcasting_ability,
      spell_save_dc: req.body.spell_save_dc,
      spell_attack_bonus: req.body.spell_attack_bonus
    });
    newMonster.save();
    Profile.findOne({ user: req.user.id }).then(profile => {
      // Add to exp array
      profile.monsters.unshift(newMonster);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/characters
// @desc    Create/Add characters to profile
// @access  Private
router.post(
  "/characters",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCharacterInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newCharacter = new Character({
      name: req.body.name,
      image: req.body.image,
      player_name: req.body.player_name,
      user: req.user.id,
      class_and_level: req.body.class_and_level,
      race: req.body.race,
      background: req.body.background,
      backstory: req.body.backstory,
      description: req.body.description,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
      eyes: req.body.eyes,
      skin: req.body.skin,
      hair: req.body.hair,
      factions: req.body.factions,
      alignment: req.body.alignment,
      experience_points: req.body.experience_points,
      inspiration: req.body.inspiration,
      proficiency_bonus: req.body.proficiency_bonus,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      strength_save: req.body.strength_save,
      dexterity_save: req.body.dexterity_save,
      constitution_save: req.body.constitution_save,
      intelligence_save: req.body.intelligence_save,
      wisdom_save: req.body.wisdom_save,
      charisma_save: req.body.charisma_save,
      acrobatics: req.body.acrobatics,
      animal_handling: req.body.animal_handling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      performance: req.body.performance,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleight_of_hand: req.body.sleight_of_hand,
      stealth: req.body.stealth,
      survival: req.body.survival,
      acrobatics_proficiency: req.body.acrobatics_proficiency,
      animal_handling_proficiency: req.body.animal_handling_proficiency,
      arcana_proficiency: req.body.arcana_proficiency,
      athletics_proficiency: req.body.athletics_proficiency,
      deception_proficiency: req.body.deception_proficiency,
      history_proficiency: req.body.history_proficiency,
      insight_proficiency: req.body.insight_proficiency,
      intimidation_proficiency: req.body.intimidation_proficiency,
      investigation_proficiency: req.body.investigation_proficiency,
      medicine_proficiency: req.body.medicine_proficiency,
      nature_proficiency: req.body.nature_proficiency,
      perception_proficiency: req.body.perception_proficiency,
      performance_proficiency: req.body.performance_proficiency,
      persuasion_proficiency: req.body.persuasion_proficiency,
      religion_proficiency: req.body.religion_proficiency,
      sleight_of_hand_proficiency: req.body.sleight_of_hand_proficiency,
      stealth_proficiency: req.body.stealth_proficiency,
      survival_proficiency: req.body.survival_proficiency,
      passive_perception: req.body.passive_perception,
      other_proficiencies_and_languages:
        req.body.other_proficiencies_and_languages,
      armor_class: req.body.armor_class,
      initiative: req.body.initiative,
      speed: req.body.speed,
      hit_points: req.body.hit_points,
      hit_dice: req.body.hit_dice,
      actions: req.body.actions,
      spellcasting_ability: req.body.spellcasting_ability,
      spell_save_dc: req.body.spell_save_dc,
      spell_attack_bonus: req.body.spell_attack_bonus,
      spells: req.body.spells,
      first_level_spell_slots: req.body.first_level_spell_slots,
      second_level_spell_slots: req.body.second_level_spell_slots,
      third_level_spell_slots: req.body.third_level_spell_slots,
      fourth_level_spell_slots: req.body.fourth_level_spell_slots,
      fifth_level_spell_slots: req.body.fifth_level_spell_slots,
      sixth_level_spell_slots: req.body.sixth_level_spell_slots,
      seventh_level_spell_slots: req.body.seventh_level_spell_slots,
      eighth_level_spell_slots: req.body.eighth_level_spell_slots,
      ninth_level_spell_slots: req.body.ninth_level_spell_slots,
      personality_traits: req.body.personality_traits,
      ideals: req.body.ideals,
      bonds: req.body.bonds,
      flaws: req.body.flaws,
      features_and_traits: req.body.features_and_traits,
      damage_vulnerabilities: req.body.damage_vulnerabilities,
      damage_immunities: req.body.damage_immunities,
      damage_resistances: req.body.damage_resistances,
      condition_immunities: req.body.condition_immunities,
      equipment: req.body.equipment,
      copper: req.body.copper,
      silver: req.body.silver,
      gold: req.body.gold,
      electrum: req.body.electrum,
      platinum: req.body.platinum
    });

    newCharacter.save();
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.characters.unshift(newCharacter);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/encounters
// @desc    Create/Add encounters to profile
// @access  Private
router.post(
  "/encounters",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEncounterInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newEncounter = new Encounter({
      user: req.user.id,
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      initiativeDisplay: req.body.initiativeDisplay,
      characters: req.body.characters,
      monsters: req.body.monsters,
      npcs: req.body.npcs,
      characterNameList: req.body.characterNameList,
      characterNames: req.body.characterNames,
      characterNumbers: req.body.characterNumbers,
      characterNamesWithNumbers: req.body.characterNamesWithNumbers,
      monsterNameList: req.body.monsterNameList,
      monsterNames: req.body.monsterNames,
      monsterNumbers: req.body.monsterNumbers,
      monsterNamesWithNumbers: req.body.monsterNamesWithNumbers,
      npcNameList: req.body.npcNameList,
      npcNames: req.body.npcNames,
      npcNumbers: req.body.npcNumbers,
      npcNamesWithNumbers: req.body.npcNamesWithNumbers
    });

    newEncounter.save();
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.encounters.unshift(newEncounter);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/settlements
// @desc    Create/Add settlements to profile
// @access  Private
router.post(
  "/settlements",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSettlementInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newSettlement = new Settlement({
      user: req.user.id,
      name: req.body.name,
      image: req.body.image,
      population: req.body.population,
      government: req.body.government,
      commerce: req.body.commerce,
      laws: req.body.laws,
      description: req.body.description,
      environment: req.body.environment,
      organizations: req.body.organizations,
      buildings: req.body.buildings,
      NPCs: req.body.NPCs,
      editedNPCs: req.body.editedNPCs
    });

    newSettlement.save();
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.settlements.unshift(newSettlement);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/quests
// @desc    Create/Add quests to profile
// @access  Private
router.post(
  "/quests",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateQuestInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newQuest = new Quest({
      user: req.user.id,
      image: req.body.image,
      name: req.body.name,
      description: req.body.description,
      quest_giver: req.body.quest_giver,
      requirements: req.body.requirements,
      rewards: req.body.rewards
    });

    newQuest.save();
    Profile.findOne({ user: req.user.id }).then(profile => {
      profile.quests.unshift(newQuest);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// Edit Encounter
router.put(
  "/encounters/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEncounterInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const encounterFields = {};
    encounterFields.user = req.user.id;

    if (req.body.title) encounterFields.title = req.body.title;
    if (req.body.image) encounterFields.image = req.body.image;
    if (req.body.description)
      encounterFields.description = req.body.description;
    if (req.body.initiativeDisplay)
      encounterFields.initiativeDisplay = req.body.initiativeDisplay;
    if (req.body.characters) encounterFields.characters = req.body.characters;
    if (req.body.monsters) encounterFields.monsters = req.body.monsters;
    if (req.body.npcs) encounterFields.npcs = req.body.npcs;
    if (req.body.characterNameList)
      encounterFields.characterNameList = req.body.characterNameList;
    if (req.body.characterNames)
      encounterFields.characterNames = req.body.characterNames;
    if (req.body.characterNumbers)
      encounterFields.characterNumbers = req.body.characterNumbers;
    if (req.body.characterNamesWithNumbers)
      encounterFields.characterNamesWithNumbers =
        req.body.characterNamesWithNumbers;
    if (req.body.monsterNameList)
      encounterFields.monsterNameList = req.body.monsterNameList;
    if (req.body.monsterNames)
      encounterFields.monsterNames = req.body.monsterNames;
    if (req.body.monsterNumbers)
      encounterFields.monsterNumbers = req.body.monsterNumbers;
    if (req.body.monsterNamesWithNumbers)
      encounterFields.monsterNamesWithNumbers =
        req.body.monsterNamesWithNumbers;
    if (req.body.npcNameList)
      encounterFields.npcNameList = req.body.npcNameList;
    if (req.body.npcNames) encounterFields.npcNames = req.body.npcNames;
    if (req.body.npcNumbers) encounterFields.npcNumbers = req.body.npcNumbers;
    if (req.body.npcNamesWithNumbers)
      encounterFields.npcNamesWithNumbers = req.body.npcNamesWithNumbers;

    Encounter.findById(req.params.id).then(oldEncounter => {
      Encounter.findByIdAndUpdate(
        req.params.id,
        encounterFields,
        (err, updateEncounter) => {
          if (err) {
            res.status(400).json(errors);
          } else {
          }
        }
      ).then(encounter => res.json(encounter));
    });
  }
);

// @route   PUT api/profile/npcs/:id
// @desc    Edit npc
// @access  Private
router.put(
  "/npcs/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateNPCInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const npcFields = {};
    npcFields.user = req.user.id;
    if (req.body.name) npcFields.name = req.body.name;
    if (req.body.image) npcFields.image = req.body.image;
    if (req.body.description) npcFields.description = req.body.description;
    if (req.body.age) npcFields.age = req.body.age;
    if (req.body.height) npcFields.height = req.body.height;
    if (req.body.weight) npcFields.weight = req.body.weight;
    if (req.body.eyes) npcFields.eyes = req.body.eyes;
    if (req.body.skin) npcFields.skin = req.body.skin;
    if (req.body.hair) npcFields.hair = req.body.hair;
    if (req.body.backstory) npcFields.backstory = req.body.backstory;
    if (req.body.class_and_level)
      npcFields.class_and_level = req.body.class_and_level;
    if (req.body.information) npcFields.information = req.body.information;
    if (req.body.behavior) npcFields.behavior = req.body.behavior;
    if (req.body.equipment) npcFields.equipment = req.body.equipment;
    if (req.body.copper) npcFields.copper = req.body.copper;
    if (req.body.silver) npcFields.silver = req.body.silver;
    if (req.body.gold) npcFields.gold = req.body.gold;
    if (req.body.electrum) npcFields.electrum = req.body.electrum;
    if (req.body.platinum) npcFields.platinum = req.body.platinum;
    if (req.body.challenge_rating)
      npcFields.challenge_rating = req.body.challenge_rating;
    if (req.body.background) npcFields.background = req.body.background;
    if (req.body.factions) npcFields.factions = req.body.factions;
    if (req.body.race) npcFields.race = req.body.race;
    if (req.body.alignment) npcFields.alignment = req.body.alignment;
    if (req.body.inspiration) npcFields.inspiration = req.body.inspiration;
    if (req.body.proficiency_bonus)
      npcFields.proficiency_bonus = req.body.proficiency_bonus;
    if (req.body.strength) npcFields.strength = req.body.strength;
    if (req.body.dexterity) npcFields.dexterity = req.body.dexterity;
    if (req.body.constitution) npcFields.constitution = req.body.constitution;
    if (req.body.intelligence) npcFields.intelligence = req.body.intelligence;
    if (req.body.wisdom) npcFields.wisdom = req.body.wisdom;
    if (req.body.charisma) npcFields.charisma = req.body.charisma;
    if (req.body.strength_save)
      npcFields.strength_save = req.body.strength_save;
    if (req.body.dexterity_save)
      npcFields.dexterity_save = req.body.dexterity_save;
    if (req.body.constitution_save)
      npcFields.constitution_save = req.body.constitution_save;
    if (req.body.intelligence_save)
      npcFields.intelligence_save = req.body.intelligence_save;
    if (req.body.wisdom_save) npcFields.wisdom_save = req.body.wisdom_save;
    if (req.body.charisma_save)
      npcFields.charisma_save = req.body.charisma_save;
    if (req.body.acrobatics) npcFields.acrobatics = req.body.acrobatics;
    if (req.body.animal_handling)
      npcFields.animal_handling = req.body.animal_handling;
    if (req.body.arcana) npcFields.arcana = req.body.arcana;
    if (req.body.athletics) npcFields.athletics = req.body.athletics;
    if (req.body.deception) npcFields.deception = req.body.deception;
    if (req.body.history) npcFields.history = req.body.history;
    if (req.body.insight) npcFields.insight = req.body.insight;
    if (req.body.intimidation) npcFields.intimidation = req.body.intimidation;
    if (req.body.investigation)
      npcFields.investigation = req.body.investigation;
    if (req.body.medicine) npcFields.medicine = req.body.medicine;
    if (req.body.nature) npcFields.nature = req.body.nature;
    if (req.body.perception) npcFields.perception = req.body.perception;
    if (req.body.performance) npcFields.performance = req.body.performance;
    if (req.body.persuasion) npcFields.persuasion = req.body.persuasion;
    if (req.body.religion) npcFields.religion = req.body.religion;
    if (req.body.sleight_of_hand)
      npcFields.sleight_of_hand = req.body.sleight_of_hand;
    if (req.body.stealth) npcFields.stealth = req.body.stealth;
    if (req.body.survival) npcFields.survival = req.body.survival;
    if (req.body.acrobatics_proficiency)
      npcFields.acrobatics_proficiency = req.body.acrobatics_proficiency;
    if (req.body.animal_handling_proficiency)
      npcFields.animal_handling_proficiency =
        req.body.animal_handling_proficiency;
    if (req.body.arcana_proficiency)
      npcFields.arcana_proficiency = req.body.arcana_proficiency;
    if (req.body.athletics_proficiency)
      npcFields.athletics_proficiency = req.body.athletics_proficiency;
    if (req.body.deception_proficiency)
      npcFields.deception_proficiency = req.body.deception_proficiency;
    if (req.body.history_proficiency)
      npcFields.history_proficiency = req.body.history_proficiency;
    if (req.body.insight_proficiency)
      npcFields.insight_proficiency = req.body.insight_proficiency;
    if (req.body.intimidation_proficiency)
      npcFields.intimidation_proficiency = req.body.intimidation_proficiency;
    if (req.body.investigation_proficiency)
      npcFields.investigation_proficiency = req.body.investigation_proficiency;
    if (req.body.medicine_proficiency)
      npcFields.medicine_proficiency = req.body.medicine_proficiency;
    if (req.body.nature_proficiency)
      npcFields.nature_proficiency = req.body.nature_proficiency;
    if (req.body.perception_proficiency)
      npcFields.perception_proficiency = req.body.perception_proficiency;
    if (req.body.performance_proficiency)
      npcFields.performance_proficiency = req.body.performance_proficiency;
    if (req.body.persuasion_proficiency)
      npcFields.persuasion_proficiency = req.body.persuasion_proficiency;
    if (req.body.religion)
      npcFields.religion_proficiency = req.body.religion_proficiency;
    if (req.body.sleight_of_hand_proficiency)
      npcFields.sleight_of_hand_proficiency =
        req.body.sleight_of_hand_proficiency;
    if (req.body.stealth_proficiency)
      npcFields.stealth_proficiency = req.body.stealth_proficiency;
    if (req.body.survival_proficiency)
      npcFields.survival_proficiency = req.body.survival_proficiency;
    if (req.body.passive_perception)
      npcFields.passive_perception = req.body.passive_perception;
    if (req.body.other_proficiencies_and_languages)
      npcFields.other_proficiencies_and_languages =
        req.body.other_proficiencies_and_languages;
    if (req.body.armor_class) npcFields.armor_class = req.body.armor_class;
    if (req.body.initiative) npcFields.initiative = req.body.initiative;
    if (req.body.speed) npcFields.speed = req.body.speed;
    if (req.body.hit_points) npcFields.hit_points = req.body.hit_points;
    if (req.body.hit_dice) npcFields.hit_dice = req.body.hit_dice;
    if (req.body.actions) npcFields.actions = req.body.actions;
    if (req.body.spellcasting_ability)
      npcFields.spellcasting_ability = req.body.spellcasting_ability;
    if (req.body.spell_save_dc)
      npcFields.spell_save_dc = req.body.spell_save_dc;
    if (req.body.spell_attack_bonus)
      npcFields.spell_attack_bonus = req.body.spell_attack_bonus;
    if (req.body.spells) npcFields.spells = req.body.spells;
    if (req.body.first_level_spell_slots)
      npcFields.first_level_spell_slots = req.body.first_level_spell_slots;
    if (req.body.second_level_spell_slots)
      npcFields.second_level_spell_slots = req.body.second_level_spell_slots;
    if (req.body.third_level_spell_slots)
      npcFields.third_level_spell_slots = req.body.third_level_spell_slots;
    if (req.body.fourth_level_spell_slots)
      npcFields.fourth_level_spell_slots = req.body.fourth_level_spell_slots;
    if (req.body.fifth_level_spell_slots)
      npcFields.fifth_level_spell_slots = req.body.fifth_level_spell_slots;
    if (req.body.sixth_level_spell_slots)
      npcFields.sixth_level_spell_slots = req.body.sixth_level_spell_slots;
    if (req.body.seventh_level_spell_slots)
      npcFields.seventh_level_spell_slots = req.body.seventh_level_spell_slots;
    if (req.body.eighth_level_spell_slots)
      npcFields.eighth_level_spell_slots = req.body.eighth_level_spell_slots;
    if (req.body.ninth_level_spell_slots)
      npcFields.ninth_level_spell_slots = req.body.ninth_level_spell_slots;
    if (req.body.features_and_traits)
      npcFields.features_and_traits = req.body.features_and_traits;
    if (req.body.damage_immunities)
      npcFields.damage_immunities = req.body.damage_immunities;
    if (req.body.damage_resistances)
      npcFields.damage_resistances = req.body.damage_resistances;
    if (req.body.damage_vulnerabilities)
      npcFields.damage_vulnerabilities = req.body.damage_vulnerabilities;
    if (req.body.condition_immunities)
      npcFields.condition_immunities = req.body.condition_immunities;
    if (req.body._id) npcFields._id = req.body._id;
    let updatedNPC = req.body;
    let finalNPC;

    NPC.findById(req.params.id).then(oldNPC => {
      NPC.findByIdAndUpdate(req.params.id, npcFields, (err, updateNPC) => {
        if (err) {
          res.status(400).json(errors);
        } else {
        }
      }).then(npc => res.json(npc));
    });
  }
);

// @route   PUT api/profile/characters/:id
// @desc    Edit character
// @access  Private
router.put(
  "/characters/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCharacterInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const characterFields = {};
    characterFields.user = req.user.id;
    if (req.body.name) characterFields.name = req.body.name;
    if (req.body.image) characterFields.image = req.body.image;
    if (req.body.class_and_level)
      characterFields.class_and_level = req.body.class_and_level;
    if (req.body.level) characterFields.level = req.body.level;
    if (req.body.equipment) characterFields.equipment = req.body.equipment;
    if (req.body.copper) characterFields.copper = req.body.copper;
    if (req.body.silver) characterFields.silver = req.body.silver;
    if (req.body.gold) characterFields.gold = req.body.gold;
    if (req.body.electrum) characterFields.electrum = req.body.electrum;
    if (req.body.platinum) characterFields.platinum = req.body.platinum;
    if (req.body.background) characterFields.background = req.body.background;
    if (req.body.backstory) characterFields.backstory = req.body.backstory;
    if (req.body.description)
      characterFields.description = req.body.description;
    if (req.body.age) characterFields.age = req.body.age;
    if (req.body.height) characterFields.height = req.body.height;
    if (req.body.weight) characterFields.weight = req.body.weight;
    if (req.body.eyes) characterFields.eyes = req.body.eyes;
    if (req.body.skin) characterFields.skin = req.body.skin;
    if (req.body.hair) characterFields.hair = req.body.hair;
    if (req.body.player_name)
      characterFields.player_name = req.body.player_name;
    if (req.body.factions) characterFields.factions = req.body.factions;
    if (req.body.race) characterFields.race = req.body.race;
    if (req.body.alignment) characterFields.alignment = req.body.alignment;
    if (req.body.inspiration)
      characterFields.inspiration = req.body.inspiration;
    if (req.body.experience_points)
      characterFields.experience_points = req.body.experience_points;
    if (req.body.proficiency_bonus)
      characterFields.proficiency_bonus = req.body.proficiency_bonus;
    if (req.body.strength) characterFields.strength = req.body.strength;
    if (req.body.dexterity) characterFields.dexterity = req.body.dexterity;
    if (req.body.constitution)
      characterFields.constitution = req.body.constitution;
    if (req.body.intelligence)
      characterFields.intelligence = req.body.intelligence;
    if (req.body.wisdom) characterFields.wisdom = req.body.wisdom;
    if (req.body.charisma) characterFields.charisma = req.body.charisma;
    if (req.body.strength_save)
      characterFields.strength_save = req.body.strength_save;
    if (req.body.dexterity_save)
      characterFields.dexterity_save = req.body.dexterity_save;
    if (req.body.constitution_save)
      characterFields.constitution_save = req.body.constitution_save;
    if (req.body.intelligence_save)
      characterFields.intelligence_save = req.body.intelligence_save;
    if (req.body.wisdom_save)
      characterFields.wisdom_save = req.body.wisdom_save;
    if (req.body.charisma_save)
      characterFields.charisma_save = req.body.charisma_save;
    if (req.body.acrobatics) characterFields.acrobatics = req.body.acrobatics;
    if (req.body.animal_handling)
      characterFields.animal_handling = req.body.animal_handling;
    if (req.body.arcana) characterFields.arcana = req.body.arcana;
    if (req.body.athletics) characterFields.athletics = req.body.athletics;
    if (req.body.deception) characterFields.deception = req.body.deception;
    if (req.body.history) characterFields.history = req.body.history;
    if (req.body.insight) characterFields.insight = req.body.insight;
    if (req.body.intimidation)
      characterFields.intimidation = req.body.intimidation;
    if (req.body.investigation)
      characterFields.investigation = req.body.investigation;
    if (req.body.medicine) characterFields.medicine = req.body.medicine;
    if (req.body.nature) characterFields.nature = req.body.nature;
    if (req.body.perception) characterFields.perception = req.body.perception;
    if (req.body.performance)
      characterFields.performance = req.body.performance;
    if (req.body.persuasion) characterFields.persuasion = req.body.persuasion;
    if (req.body.religion) characterFields.religion = req.body.religion;
    if (req.body.sleight_of_hand)
      characterFields.sleight_of_hand = req.body.sleight_of_hand;
    if (req.body.stealth) characterFields.stealth = req.body.stealth;
    if (req.body.survival) characterFields.survival = req.body.survival;
    if (req.body.acrobatics_proficiency)
      characterFields.acrobatics_proficiency = req.body.acrobatics_proficiency;
    if (req.body.animal_handling_proficiency)
      characterFields.animal_handling_proficiency =
        req.body.animal_handling_proficiency;
    if (req.body.arcana_proficiency)
      characterFields.arcana_proficiency = req.body.arcana_proficiency;
    if (req.body.athletics_proficiency)
      characterFields.athletics_proficiency = req.body.athletics_proficiency;
    if (req.body.deception_proficiency)
      characterFields.deception_proficiency = req.body.deception_proficiency;
    if (req.body.history_proficiency)
      characterFields.history_proficiency = req.body.history_proficiency;
    if (req.body.insight_proficiency)
      characterFields.insight_proficiency = req.body.insight_proficiency;
    if (req.body.intimidation_proficiency)
      characterFields.intimidation_proficiency =
        req.body.intimidation_proficiency;
    if (req.body.investigation_proficiency)
      characterFields.investigation_proficiency =
        req.body.investigation_proficiency;
    if (req.body.medicine_proficiency)
      characterFields.medicine_proficiency = req.body.medicine_proficiency;
    if (req.body.nature_proficiency)
      characterFields.nature_proficiency = req.body.nature_proficiency;
    if (req.body.perception_proficiency)
      characterFields.perception_proficiency = req.body.perception_proficiency;
    if (req.body.performance_proficiency)
      characterFields.performance_proficiency =
        req.body.performance_proficiency;
    if (req.body.persuasion_proficiency)
      characterFields.persuasion_proficiency = req.body.persuasion_proficiency;
    if (req.body.religion)
      characterFields.religion_proficiency = req.body.religion_proficiency;
    if (req.body.sleight_of_hand_proficiency)
      characterFields.sleight_of_hand_proficiency =
        req.body.sleight_of_hand_proficiency;
    if (req.body.stealth_proficiency)
      characterFields.stealth_proficiency = req.body.stealth_proficiency;
    if (req.body.survival_proficiency)
      characterFields.survival_proficiency = req.body.survival_proficiency;
    if (req.body.passive_perception)
      characterFields.passive_perception = req.body.passive_perception;
    if (req.body.other_proficiencies_and_languages)
      characterFields.other_proficiencies_and_languages =
        req.body.other_proficiencies_and_languages;
    if (req.body.armor_class)
      characterFields.armor_class = req.body.armor_class;
    if (req.body.initiative) characterFields.initiative = req.body.initiative;
    if (req.body.speed) characterFields.speed = req.body.speed;
    if (req.body.hit_points) characterFields.hit_points = req.body.hit_points;
    if (req.body.hit_dice) characterFields.hit_dice = req.body.hit_dice;
    if (req.body.actions) characterFields.actions = req.body.actions;
    if (req.body.spellcasting_ability)
      characterFields.spellcasting_ability = req.body.spellcasting_ability;
    if (req.body.spell_save_dc)
      characterFields.spell_save_dc = req.body.spell_save_dc;
    if (req.body.spell_attack_bonus)
      characterFields.spell_attack_bonus = req.body.spell_attack_bonus;
    if (req.body.spells) characterFields.spells = req.body.spells;
    if (req.body.first_level_spell_slots)
      characterFields.first_level_spell_slots =
        req.body.first_level_spell_slots;
    if (req.body.second_level_spell_slots)
      characterFields.second_level_spell_slots =
        req.body.second_level_spell_slots;
    if (req.body.third_level_spell_slots)
      characterFields.third_level_spell_slots =
        req.body.third_level_spell_slots;
    if (req.body.fourth_level_spell_slots)
      characterFields.fourth_level_spell_slots =
        req.body.fourth_level_spell_slots;
    if (req.body.fifth_level_spell_slots)
      characterFields.fifth_level_spell_slots =
        req.body.fifth_level_spell_slots;
    if (req.body.sixth_level_spell_slots)
      characterFields.sixth_level_spell_slots =
        req.body.sixth_level_spell_slots;
    if (req.body.seventh_level_spell_slots)
      characterFields.seventh_level_spell_slots =
        req.body.seventh_level_spell_slots;
    if (req.body.eighth_level_spell_slots)
      characterFields.eighth_level_spell_slots =
        req.body.eighth_level_spell_slots;
    if (req.body.ninth_level_spell_slots)
      characterFields.ninth_level_spell_slots =
        req.body.ninth_level_spell_slots;
    if (req.body.personality_traits)
      characterFields.personality_traits = req.body.personality_traits;
    if (req.body.ideals) characterFields.ideals = req.body.ideals;
    if (req.body.bonds) characterFields.bonds = req.body.bonds;
    if (req.body.flaws) characterFields.flaws = req.body.flaws;
    if (req.body.features_and_traits)
      characterFields.features_and_traits = req.body.features_and_traits;
    if (req.body.damage_immunities)
      characterFields.damage_immunities = req.body.damage_immunities;
    if (req.body.damage_resistances)
      characterFields.damage_resistances = req.body.damage_resistances;
    if (req.body.damage_vulnerabilities)
      characterFields.damage_vulnerabilities = req.body.damage_vulnerabilities;
    if (req.body.condition_immunities)
      characterFields.condition_immunities = req.body.condition_immunities;

    Character.findByIdAndUpdate(
      req.params.id,
      characterFields,
      (err, updateCharacter) => {
        if (err) {
          res.status(400).json(errors);
        } else {
        }
      }
    ).then(character => res.json(character));
  }
);

// @route   PUT api/profile/monsters/:id
// @desc    Edit monster
// @access  Private
router.put(
  "/monsters/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMonsterInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const monsterFields = {};
    monsterFields.user = req.user.id;
    if (req.body.name) monsterFields.name = req.body.name;
    if (req.body.image) monsterFields.image = req.body.image;
    if (req.body.size) monsterFields.size = req.body.size;
    if (req.body.loot) monsterFields.loot = req.body.loot;
    if (req.body.type) monsterFields.type = req.body.type;
    if (req.body.subtype) monsterFields.subtype = req.body.subtype;
    if (req.body.description) monsterFields.description = req.body.description;
    if (req.body.challenge_rating)
      monsterFields.challenge_rating = req.body.challenge_rating;
    if (req.body.damage_immunities)
      monsterFields.damage_immunities = req.body.damage_immunities;
    if (req.body.damage_resistances)
      monsterFields.damage_resistances = req.body.damage_resistances;
    if (req.body.damage_vulnerabilities)
      monsterFields.damage_vulnerabilities = req.body.damage_vulnerabilities;
    if (req.body.condition_immunities)
      monsterFields.condition_immunities = req.body.condition_immunities;
    if (req.body.alignment) monsterFields.alignment = req.body.alignment;
    if (req.body.senses) monsterFields.senses = req.body.senses;
    if (req.body.languages) monsterFields.languages = req.body.languages;
    if (req.body.special_abilities)
      monsterFields.special_abilities = req.body.special_abilities;
    if (req.body.strength) monsterFields.strength = req.body.strength;
    if (req.body.dexterity) monsterFields.dexterity = req.body.dexterity;
    if (req.body.constitution)
      monsterFields.constitution = req.body.constitution;
    if (req.body.intelligence)
      monsterFields.intelligence = req.body.intelligence;
    if (req.body.wisdom) monsterFields.wisdom = req.body.wisdom;
    if (req.body.charisma) monsterFields.charisma = req.body.charisma;
    if (req.body.strength_save)
      monsterFields.strength_save = req.body.strength_save;
    if (req.body.dexterity_save)
      monsterFields.dexterity_save = req.body.dexterity_save;
    if (req.body.constitution_save)
      monsterFields.constitution_save = req.body.constitution_save;
    if (req.body.intelligence_save)
      monsterFields.intelligence_save = req.body.intelligence_save;
    if (req.body.wisdom_save) monsterFields.wisdom_save = req.body.wisdom_save;
    if (req.body.charisma_save)
      monsterFields.charisma_save = req.body.charisma_save;
    if (req.body.acrobatics) monsterFields.acrobatics = req.body.acrobatics;
    if (req.body.animal_handling)
      monsterFields.animal_handling = req.body.animal_handling;
    if (req.body.arcana) monsterFields.arcana = req.body.arcana;
    if (req.body.athletics) monsterFields.athletics = req.body.athletics;
    if (req.body.deception) monsterFields.deception = req.body.deception;
    if (req.body.history) monsterFields.history = req.body.history;
    if (req.body.insight) monsterFields.insight = req.body.insight;
    if (req.body.intimidation)
      monsterFields.intimidation = req.body.intimidation;
    if (req.body.investigation)
      monsterFields.investigation = req.body.investigation;
    if (req.body.medicine) monsterFields.medicine = req.body.medicine;
    if (req.body.nature) monsterFields.nature = req.body.nature;
    if (req.body.perception) monsterFields.perception = req.body.perception;
    if (req.body.performance) monsterFields.performance = req.body.performance;
    if (req.body.persuasion) monsterFields.persuasion = req.body.persuasion;
    if (req.body.religion) monsterFields.religion = req.body.religion;
    if (req.body.sleight_of_hand)
      monsterFields.sleight_of_hand = req.body.sleight_of_hand;
    if (req.body.stealth) monsterFields.stealth = req.body.stealth;
    if (req.body.survival) monsterFields.survival = req.body.survival;
    if (req.body.armor_class) monsterFields.armor_class = req.body.armor_class;
    if (req.body.actions) monsterFields.actions = req.body.actions;
    if (req.body.speed) monsterFields.speed = req.body.speed;
    if (req.body.hit_points) monsterFields.hit_points = req.body.hit_points;
    if (req.body.hit_dice) monsterFields.hit_dice = req.body.hit_dice;
    if (req.body.legendary_actions)
      monsterFields.legendary_actions = req.body.legendary_actions;
    if (req.body.special_abilities)
      monsterFields.special_abilities = req.body.special_abilities;
    if (req.body.actions) monsterFields.actions = req.body.actions;
    if (req.body.spells) monsterFields.spells = req.body.spells;
    if (req.body.first_level_spell_slots)
      monsterFields.first_level_spell_slots = req.body.first_level_spell_slots;
    if (req.body.second_level_spell_slots)
      monsterFields.second_level_spell_slots =
        req.body.second_level_spell_slots;
    if (req.body.third_level_spell_slots)
      monsterFields.third_level_spell_slots = req.body.third_level_spell_slots;
    if (req.body.fourth_level_spell_slots)
      monsterFields.fourth_level_spell_slots =
        req.body.fourth_level_spell_slots;
    if (req.body.fifth_level_spell_slots)
      monsterFields.fifth_level_spell_slots = req.body.fifth_level_spell_slots;
    if (req.body.sixth_level_spell_slots)
      monsterFields.sixth_level_spell_slots = req.body.sixth_level_spell_slots;
    if (req.body.seventh_level_spell_slots)
      monsterFields.seventh_level_spell_slots =
        req.body.seventh_level_spell_slots;
    if (req.body.eighth_level_spell_slots)
      monsterFields.eighth_level_spell_slots =
        req.body.eighth_level_spell_slots;
    if (req.body.ninth_level_spell_slots)
      monsterFields.ninth_level_spell_slots = req.body.ninth_level_spell_slots;
    if (req.body.lair_actions)
      monsterFields.lair_actions = req.body.lair_actions;
    if (req.body.regional_effects)
      monsterFields.regional_effects = req.body.regional_effects;
    if (req.body.information) monsterFields.information = req.body.information;
    if (req.body.spellcasting_ability)
      monsterFields.spellcasting_ability = req.body.spellcasting_ability;
    if (req.body.spell_save_dc)
      monsterFields.spell_save_dc = req.body.spell_save_dc;
    if (req.body.spell_attack_bonus)
      monsterFields.spell_attack_bonus = req.body.spell_attack_bonus;

    Monster.findById(req.params.id).then(() => {
      Monster.findByIdAndUpdate(
        req.params.id,
        monsterFields,
        (err, updateMonster) => {
          if (err) {
            res.status(400).json(errors);
          } else {
          }
        }
      ).then(monster => res.json(monster));
    });
  }
);

// @route   PUT api/profile/settlements/:id
// @desc    Edit settlement
// @access  Private
router.put(
  "/settlements/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSettlementInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const settlementFields = {};
    settlementFields.user = req.user.id;
    if (req.body.name) settlementFields.name = req.body.name;
    if (req.body.image) settlementFields.image = req.body.image;
    if (req.body.description)
      settlementFields.description = req.body.description;
    if (req.body.population) settlementFields.population = req.body.population;
    if (req.body.government) settlementFields.government = req.body.government;
    if (req.body.laws) settlementFields.laws = req.body.laws;
    if (req.body.commerce) settlementFields.commerce = req.body.commerce;
    if (req.body.NPCs) settlementFields.NPCs = req.body.NPCs;
    if (req.body.editedNPCs) settlementFields.editedNPCs = req.body.editedNPCs;
    if (req.body.organizations)
      settlementFields.organizations = req.body.organizations;
    if (req.body.buildings) settlementFields.buildings = req.body.buildings;
    if (req.body.environment)
      settlementFields.environment = req.body.environment;

    Settlement.findByIdAndUpdate(
      req.params.id,
      settlementFields,
      (err, updateSettlement) => {
        if (err) {
          res.status(400).json(errors);
        } else {
        }
      }
    ).then(settlement => res.json(settlement));
  }
);

// @route   PUT api/profile/quests/:id
// @desc    Edit quest
// @access  Private
router.put(
  "/quests/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateQuestInput(req.body);

    //Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const questFields = {};
    questFields.user = req.user.id;
    if (req.body.name) questFields.name = req.body.name;
    if (req.body.image) questFields.image = req.body.image;
    if (req.body.description) questFields.description = req.body.description;
    if (req.body.quest_giver) questFields.quest_giver = req.body.quest_giver;
    if (req.body.requirements) questFields.requirements = req.body.requirements;
    if (req.body.rewards) questFields.rewards = req.body.rewards;
    if (req.body._id) questFields._id = req.body._id;
    let updatedQuest = req.body;
    let finalQuest;

    Quest.findById(req.params.id).then(oldQuest => {
      Quest.findByIdAndUpdate(
        req.params.id,
        questFields,
        (err, updateQuest) => {
          if (err) {
            res.status(400).json(errors);
          } else {
          }
        }
      ).then(quest => res.json(quest));
    });
  }
);

// @route   DELETE api/profile/npcs/:npc_id
// @desc    Delete npc
// @access  Private
router.delete(
  "/npcs/:npc_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(req.user.id, () => {
      NPC.findByIdAndRemove(req.params.npc_id)
        .then(npc => {
          res.json(npc);
        })
        .catch(err => res.status(404).json(err));
    });
  }
);

// @route   DELETE api/profile/characters/:char_id
// @desc    Delete character
// @access  Private
router.delete(
  "/characters/:char_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(req.user.id, () => {
      Character.findByIdAndRemove(req.params.char_id)
        .then(character => {
          res.json(character);
        })
        .catch(err => res.status(404).json(err));
    });
  }
);

// @route   DELETE api/profile/monsters/:mon_id
// @desc    Delete monster
// @access  Private
router.delete(
  "/monsters/:mon_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(req.user.id, () => {
      Monster.findByIdAndRemove(req.params.mon_id)
        .then(monster => {
          res.json(monster);
        })
        .catch(err => res.status(404).json(err));
    });
  }
);

// @route   DELETE api/profile/encounters/:enc_id
// @desc    Delete encounter
// @access  Private
router.delete(
  "/encounters/:enc_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(req.user.id, () => {
      Encounter.findByIdAndRemove(req.params.enc_id)
        .then(encounter => {
          res.json(encounter);
        })
        .catch(err => res.status(404).json(err));
    });
  }
);

// Delete Settlement
router.delete(
  "/settlements/:settlement_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(req.user.id, () => {
      Settlement.findByIdAndRemove(req.params.settlement_id)
        .then(settlement => {
          res.json(settlement);
        })
        .catch(err => res.status(404).json(err));
    });
  }
);

module.exports = router;
