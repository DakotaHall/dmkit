import React, { Component } from "react";
import RulesHelperBanner from "../../../images/rule_helper_banner.png";
import Page from "../../../images/page1.png";
import Blinded from "../../../images/blinded_black.png";
import Charmed from "../../../images/charmed_black.png";
import Deafened from "../../../images/deafened_black.png";
import Frightened from "../../../images/freightened_black.png";
import Exhaustion from "../../../images/exhausted_black.png";
import ExhaustionEffects from "../../../images/exhaustedFX_black.png";
import Grappled from "../../../images/grappled_black.png";
import Incapacitated from "../../../images/incapitated_black.png";
import Invisible from "../../../images/invisible_black.png";
import Paralyzed from "../../../images/paralyzed_black.png";
import Petrified from "../../../images/petrified_black.png";
import Poisoned from "../../../images/poison_black.png";
import Prone from "../../../images/prone_black.png";
import Restrained from "../../../images/restrained_black.png";
import Stunned from "../../../images/stunned_black.png";
import Unconscious from "../../../images/unconscious_black.png";

class RulesHelper extends Component {
  state = {
    maximized: true,
    ClassName: "RulesHelper",
    display: "",
    displayShow: "hidden",
    displayTextShow: "hidden",
    displayBool: false
  };

  mouseOver = name => {
    if (name === "blinded") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A blinded creature can’t see and automatically fails any ability
              check that requires sight.
            </li>
            <li>
              Attack rolls against the creature have advantage, and the
              creature’s attack rolls have disadvantage.
            </li>
          </ul>
        )
      });
    } else if (name === "charmed") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A charmed creature can’t attack the charmer or target the charmer
              with harmful abilities or magical effects.
            </li>
            <li>
              The charmer has advantage on any ability check to interact
              socially with the creature.
            </li>
          </ul>
        )
      });
    } else if (name === "deafened") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A deafened creature can’t hear and automatically fails any ability
              check that requires hearing.
            </li>
          </ul>
        )
      });
    } else if (name === "frightened") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A frightened creature has disadvantage on ability checks and
              attack rolls while the source of its fear is within line of sight.
            </li>
            <li>
              The creature can’t willingly move closer to the source of its
              fear.
            </li>
          </ul>
        )
      });
    } else if (name === "exhaustion") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Some special abilities and environmental hazards, such as
              starvation and the long-­term effects of freezing or scorching
              temperatures, can lead to a special condition called exhaustion.
              Exhaustion is measured in six levels. An effect can give a
              creature one or more levels of exhaustion, as specified in the
              effect’s description.
            </li>
            <li>
              If an already exhausted creature suffers another effect that
              causes exhaustion, its current level of exhaustion increases by
              the amount specified in the effect’s description. A creature
              suffers the effect of its current level of exhaustion as well as
              all lower levels. For example, a creature suffering level 2
              exhaustion has its speed halved and has disadvantage on ability
              checks. An effect that removes exhaustion reduces its level as
              specified in the effect’s description, with all exhaustion effects
              ending if a creature’s exhaustion level is reduced below 1.
              Finishing a long rest reduces a creature’s exhaustion level by 1,
              provided that the creature has also ingested some food and drink.
            </li>
          </ul>
        )
      });
    } else if (name === "exhaustion_effects") {
      this.setState({
        displayBool: true,
        display: (
          <table className="BlackBorder RulesHelperText">
            <tbody>
              <tr>
                <th className="BlackBorder">Level:</th>
                <th className="BlackBorder">Effect: </th>
              </tr>
              <tr>
                <td className="BlackBorder">1</td>
                <td className="BlackBorder">Disadvantage on ability checks</td>
              </tr>
              <tr>
                <td className="BlackBorder">2</td>
                <td className="BlackBorder">Speed halved</td>
              </tr>
              <tr>
                <td className="BlackBorder">3</td>
                <td className="BlackBorder">
                  Disadvantage on attack rolls and saving throws
                </td>
              </tr>
              <tr>
                <td className="BlackBorder">4</td>
                <td className="BlackBorder">Hit point maximum halved</td>
              </tr>
              <tr>
                <td className="BlackBorder">5</td>
                <td className="BlackBorder">Speed reduced to 0</td>
              </tr>
              <tr>
                <td className="BlackBorder">6</td>
                <td className="BlackBorder">Death</td>
              </tr>
            </tbody>
          </table>
        )
      });
    } else if (name === "grappled") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A grappled creature’s speed becomes 0, and it can’t benefit from
              any bonus to its speed.
            </li>
            <li>
              The condition ends if the grappler is incapacitated (see the
              condition).
            </li>
            <li>
              The condition also ends if an effect removes the grappled creature
              from the reach of the grappler or grappling effect, such as when a
              creature is hurled away by the thunderwave spell.
            </li>
          </ul>
        )
      });
    } else if (name === "incapacitated") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>An incapacitated creature can’t take actions or reactions.</li>
          </ul>
        )
      });
    } else if (name === "invisible") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              An invisible creature is impossible to see without the aid of
              magic or a special sense. For the purpose of hiding, the creature
              is heavily obscured. The creature’s location can be detected by
              any noise it makes or any tracks it leaves.
            </li>
            <li>
              Attack rolls against the creature have disadvantage, and the
              creature’s attack rolls have advantage.
            </li>
          </ul>
        )
      });
    } else if (name === "paralyzed") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A paralyzed creature is incapacitated (see the condition) and
              can’t move or speak.
            </li>
            <li>
              The creature automatically fails Strength and Dexterity saving
              throws.
            </li>
            <li>Attack rolls against the creature have advantage.</li>
            <li>
              Any attack that hits the creature is a critical hit if the
              attacker is within 5 feet of the creature.
            </li>
          </ul>
        )
      });
    } else if (name === "petrified") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A petrified creature is transformed, along with any nonmagical
              object it is wearing or carrying, into a solid inanimate substance
              (usually stone). Its weight increases by a factor of ten, and it
              ceases aging.
            </li>
            <li>
              The creature is incapacitated (see the condition), can’t move or
              speak, and is unaware of its surroundings.
            </li>
            <li>Attack rolls against the creature have advantage.</li>
            <li>
              The creature automatically fails Strength and Dexterity saving
              throws.
            </li>
            <li>The creature has resistance to all damage.</li>
            <li>
              The creature is immune to poison and disease, although a poison or
              disease already in its system is suspended, not neutralized.
            </li>
          </ul>
        )
      });
    } else if (name === "poisoned") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A poisoned creature has disadvantage on attack rolls and ability
              checks.
            </li>
          </ul>
        )
      });
    } else if (name === "prone") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A prone creature’s only movement option is to crawl, unless it
              stands up and thereby ends the condition.
            </li>
            <li>The creature has disadvantage on attack rolls.</li>
            <li>
              An attack roll against the creature has advantage if the attacker
              is within 5 feet of the creature. Otherwise, the attack roll has
              disadvantage.
            </li>
          </ul>
        )
      });
    } else if (name === "restrained") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A restrained creature’s speed becomes 0, and it can’t benefit from
              any bonus to its speed.
            </li>
            <li>
              Attack rolls against the creature have advantage, and the
              creature’s attack rolls have disadvantage.
            </li>
            <li>The creature has disadvantage on Dexterity saving throws.</li>
          </ul>
        )
      });
    } else if (name === "stunned") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A stunned creature is incapacitated (see the condition), can’t
              move, and can speak only falteringly.
            </li>
            <li>
              The creature automatically fails Strength and Dexterity saving
              throws.
            </li>
            <li>Attack rolls against the creature have advantage.</li>
          </ul>
        )
      });
    } else if (name === "unconscious") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              An unconscious creature is incapacitated (see the condition),
              can’t move or speak, and is unaware of its surroundings
            </li>
            <li>The creature drops whatever it’s holding and falls prone.</li>
            <li>
              The creature automatically fails Strength and Dexterity saving
              throws.
            </li>
            <li>Attack rolls against the creature have advantage.</li>
            <li>
              Any attack that hits the creature is a critical hit if the
              attacker is within 5 feet of the creature.
            </li>
          </ul>
        )
      });
    } else if (name === "actions") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you take your action on your turn, you can take one of the
              actions presented here, an action you gained from your class or a
              special feature, or an action that you improvise. Many monsters
              have action options of their own in their stat blocks.
            </li>
            <li>
              When you describe an action not detailed elsewhere in the rules,
              the GM tells you whether that action is possible and what kind of
              roll you need to make, if any, to determine success or failure.
            </li>
          </ul>
        )
      });
    } else if (name === "attack") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              The most common action to take in combat is the Attack action,
              wheether you are swinging a sword, firing an arrow from a bow, or
              brawling with your fists.
            </li>
            <li>With this action, you make one melee or ranged attack.</li>
            <li>
              Certain featuers, such as the Extra Attack feature of the fighter,
              allow you to make more than one attack with this action.
            </li>
          </ul>
        )
      });
    } else if (name === "cast_a_spell") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Spellcasters such as wizards and clerics, as well as many
              monsters, have access to spells and can use them to great effect
              in combat. Each spell has a casting time, which specifies whether
              the caster must use an action, a reaction, minutes, or even hours
              to cast the spell. Casting a spell is, therefore, not necessarily
              an action. Most spells do have a casting time of 1 action, so a
              spellcaster often uses his or her action in combat to cast such a
              spell.
            </li>
          </ul>
        )
      });
    } else if (name === "dash") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you take the Dash action, you gain extra movement for the
              current turn. The increase equals your speed, after applying any
              modifiers. With a speed of 30 feet, for example, you can move up
              to 60 feet on your turn if you dash.
            </li>
            <li>
              Any increase or decrease to your speed changes this additional
              movement by the same amount. If your speed of 30 feet is reduced
              to 15 feet, for instance, you can move up to 30 feet this turn if
              you dash.
            </li>
          </ul>
        )
      });
    } else if (name === "disengage") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              If you take the Disengage action, your movement doesn't provoke
              opportunity attacks for the rest of the turn.
            </li>
          </ul>
        )
      });
    } else if (name === "dodge") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you take the Dodge action, you focus entirely on avoiding
              attacks. Until the start of your next turn, any attack roll made
              against you has disadvantage if you can see the attacker, and you
              make Dexterity saving throws with advantage. You lose this benefit
              if you are incapacitated or if your speed drops to 0.
            </li>
          </ul>
        )
      });
    } else if (name === "help") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              You can lend your aid to another creature in the completion of a
              task. When you take the Help action, the creature you aid gains
              advantage on the next ability check it makes to perform the task
              you are helping with, provided that it makes the check before the
              start of your next turn.
            </li>
            <li>
              Alternatively, you can aid a friendly creature in attacking a
              creature within 5 feet of you. You feint, distract the target, or
              in some other way team up to make your ally's attack more
              effective. If your ally attacks the target before your next turn,
              the first attack roll is made with advantage.
            </li>
          </ul>
        )
      });
    } else if (name === "hide") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you take the Hide action, you make a Dexterity (Stealth)
              check in an attempt to hide, following the rules for hiding. If
              you succeed, you gain certain benefits, as described in the
              "Unseen Attackers and Targets" section.
            </li>
          </ul>
        )
      });
    } else if (name === "ready") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Sometimes you want to get the jump on a foe or wait for a
              particular circumstance before you act. To do so, you can take the
              Ready action on your turn, which lets you act using your reaction
              before the start of your next turn.
            </li>
            <li>
              First, you decide what perceivable circumstance will trigger your
              reaction. Then, you choose the action you will take in response to
              that trigger, or you choose to move up to your speed in response
              to it. Examples include "If the cultist steps on the trapdoor,
              I'll pull the lever that opens it," and "If the goblin steps next
              to me, I move away."
            </li>
            <li>
              When the trigger occurs, you can either take your reaction right
              after the trigger finishes or ignore the trigger. Remember that
              you can take only one reaction per round.
            </li>
            <li>
              When you ready a spell, you cast it as normal but hold its energy,
              which you release with your reaction when the trigger occurs. To
              be readied, a spell must have a casting time of 1 action, and
              holding onto the spell's magic requires concentration. If your
              concentration is broken, the spell dissipates without taking
              effect. For example, if you are concentrating on the <em>web</em>{" "}
              spell and ready <em>magic missile</em>, your <em>web</em> spell
              ends, and if you take damage before you release{" "}
              <em>magic missile</em> with your reaction, your concentration
              might be broken.
            </li>
          </ul>
        )
      });
    } else if (name === "search") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you take the Search action, you devote your attention to
              finding something. Depending on the nature of your search, the GM
              might have you make a Wisdom (Perception) check or an Intelligence
              (Investigation) check.
            </li>
          </ul>
        )
      });
    } else if (name === "use_an_object") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              You normally interact with an object while doing something else,
              such as when you draw a sword as part of an attack. When an object
              requires your action for its use, you take the Use an Object
              ation. This action is also useful when you want to interact with
              more than one object on your turn.
            </li>
          </ul>
        )
      });
    } else if (name === "ranged_attacks") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you make a ranged attack, you fire a bow or a crossbow, hurl
              a handaxe, or otherwise send projectiles to strike a foe at a
              distance. A monster might shoot spines from its tail. Many spells
              also involve making a ranged attack.
            </li>
          </ul>
        )
      });
    } else if (name === "range") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              You can make ranged attacks only against targets within a
              specified range.
            </li>
            <li>
              If a ranged attack, such as one made with a spell, has a single
              range, you can't attack a target beyond this range.
            </li>
            <li>
              Some ranged attacks, such as those made with a longbow or a
              shortbow, have two ranges. The smaller number is the normal range,
              and the larger number is the long range. Your attack roll has
              disadvantage when your target is beyond normal range, and you
              can't attack a target beyond the long range.
            </li>
          </ul>
        )
      });
    } else if (name === "ranged_attacks_in_close_combat") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Aiming a ranged attack is more difficult when a foe is next to
              you. When you make a ranged attack with a weapon, a spell, or some
              other means, you have disadvantage on the attack roll if you are
              within 5 feet of a hostile creature who can see you and who isn't
              incapacitated.
            </li>
          </ul>
        )
      });
    } else if (name === "melee_attacks") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Used in hand-to-hand combat, a melee attack allows you to attack a
              foe within your reach. A melee attack typically uses a handheld
              weapon such as a sword, a warhammer, or an axe. A typical monster
              makes a melee attack when it strikes with its claws, horns, teeth,
              tentacles, or other body part. A few spells also involve making a
              melee attack.
            </li>
            <li>
              Most creatures have a 5-foot <strong>reach</strong> and can thus
              attack targets within 5 feet of them when making a melee attack.
              Certain creatures (typically those larger than Medium) have melee
              attacks with a greater reach than 5 feet, as noted in their
              descriptions.
            </li>
            <li>
              Instead of using a weapon to make a melee weapon attack, you can
              use an <strong>unarmed strike:</strong> a punch, kick, head-butt,
              or similar forceful blow (none of which count as weapons). On a
              hit, an unarmed strike deals bludgeoning damage equal to 1 + your
              Strength modifier. You are proficient with your unarmed strikes.
            </li>
          </ul>
        )
      });
    } else if (name === "opportunity_attacks") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              In a fight, everyone is constantly watching for a chance to strike
              an enemy who is fleeing or passing by. Such a strike is called an
              opportunity attack.
            </li>
            <li>
              You can make an opportunity attack when a hostile creature that
              you can see moves out of your reach. To make the opportunity
              attack, you use your reaction to make one melee attack against the
              provoking creature. The attack occurs right before the creature
              leaves your reach.
            </li>
            <li>
              You can avoid provoking an opportunity attack by taking the
              Disengage action. You also don't provoke an opportunity attack
              when you teleport or when someone or something moves you without
              using your movement, action, or reaction. For example, you don't
              provoke an opportunity attack if an explosion hurls you out of a
              foe's reach or if gravity causes you to fall past an enemy.
            </li>
          </ul>
        )
      });
    } else if (name === "two_weapon_fighting") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you take the Attack action and attack with a light melee
              weapon that you're holding in one hand, you can use a bonus action
              to attack with a different light melee weapon that you're holding
              in the other hand. You don't add your ability modifier to the
              damage of the bonus attack, unless that modifier is negative.
            </li>
            <li>
              If either weapon has the thrown property, you can throw the
              weapon, instead of making a melee attack with it.
            </li>
          </ul>
        )
      });
    } else if (name === "grappling") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you want to grab a creature or wrestle with it, you can use
              the Attack action to make a special melee attack, a grapple. If
              you're able to make multiple attacks with the Attack action, this
              attack replaces one of them.
            </li>
            <li>
              The target of your grapple must be no more than one size larger
              than you and must be within your reach. Using at least one free
              hand, you try to seize the target by making a grapple check
              instead of an attack roll: a Strength (Athletics) check contested
              by the target's Strength (Athletics) or Dexterity (Acrobatics)
              check (the target chooses the ability to use). If you succeed, you
              subject the target to the grappled condition. The condition
              specifies the things that end it, and you can release the target
              whenever you like (no action required).
            </li>
            <li>
              <strong>
                <em>Escaping a Grapple.</em>
              </strong>{" "}
              A grappled creature can use its action to escape. To do so, it
              must succeed on a Strength (Athletics) or Dexterity (Acrobatics)
              check contested by your Strength (Athletics) check.
            </li>
            <li>
              <strong>
                <em>Moving a Grappled Creature.</em>
              </strong>{" "}
              When you move, you can drag or carry the grappled creature with
              you, but your speed is halved, unless the creature is two or more
              sizes smaller than you.
            </li>
          </ul>
        )
      });
    } else if (name === "shoving_a_creature") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Using the Attack action, you can make a special melee attack to
              shove a creature, either to knock it prone or push it away from
              you. If you're able to make multiple attacks with the Attack
              action, this attack replaces one of them.
            </li>
            <li>
              The target must be no more than one size larger than you and must
              be within your reach. Instead of making an attack roll, you make a
              Strength (Athletics) check contested by the target's Strength
              (Athletics) or Dexterity (Acrobatics) check (the target chooses
              the ability to use). If you win the contest, you either knock the
              target prone or push it 5 feet away from you.
            </li>
          </ul>
        )
      });
    } else if (name === "cover") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Walls, trees, creatures, and other obstacles can provide cover
              during combat, making a target more difficult to harm. A target
              can benefit from cover only when an attack or other effect
              originates on the opposite side of the cover.
            </li>
            <li>
              There are three degrees of cover. If a target is behind multiple
              sources of cover, only the most protective degree of cover
              applies; the degrees aren't added together. For example, if a
              target is behind a creature that gives half cover and a tree trunk
              that gives three-quarters cover, the target has three-quarters
              cover.
            </li>
            <li>
              A target with <strong>half cover</strong> has a +2 bonus to AC and
              Dexterity saving throws. A target has half cover if an obstacle
              blocks at least half of its body. The obstacle might be a low
              wall, a large piece of furniture, a narrow tree trunk, or a
              creature, whether that creature is an enemy or a friend.
            </li>
            <li>
              A target with <strong>three-quarters cover</strong> has a +5 bonus
              to AC and Dexterity saving throws. A target has three-quarters
              cover if about three-quarters of it is covered by an obstacle. The
              obstacle might be a portcullis, an arrow slit, or a thick tree
              trunk.
            </li>
            <li>
              A target with <strong>total cover</strong> can't be targeted
              directly by an attack or a spell, although some spells can reach
              such a target by including it in an area of effect. A target has
              total cover if it is completely concealed by an obstacle.
            </li>
          </ul>
        )
      });
    } else if (name === "damage_and_healing") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Injury and the risk of death are constant companions of those who
              explore fantasy gaming worlds. The thrust of a sword, a
              well-placed arrow, or a blast of flame from a <em>fireball</em>{" "}
              spell all have the potential to damage, or even kill, the hardiest
              of creatures.
            </li>
          </ul>
        )
      });
    } else if (name === "hit_points") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Hit points represent a combination of physical and mental
              durability, the will to live, and luck. Creatuers with more hit
              points are more difficult to kill. Those with fewer hit points are
              more fragile.
            </li>
            <li>
              A creature's current hit points (usually just called hit points)
              can be any number from the creature's hit point maximum down to 0.
              This number changes frequently as a creature takes damage or
              receives healing.
            </li>
            <li>
              Whenever a creature takes damage, that damage is subtracted from
              its hit points. The loss of hit points has no effect on a
              creature's capabilities until the creature drops to 0 hit points.
            </li>
          </ul>
        )
      });
    } else if (name === "damage_rolls") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Each weapon, spell, and harmful monster ability specifies the
              damage it deals. You roll the damage die or dice, add any
              modifiers, and apply the damage to your target. Magic weapons,
              special abilities, and other factors can grant a bonus to damage,
              but never negative damage.
            </li>
            <li>
              When attacking with a weapon, you add your ability modifier - the
              same modifier used for the attack roll - to the damage. A spell
              tells you which dice to roll for damage and whether to add any
              modifiers.
            </li>
            <li>
              If a spell or other effect deals damage to more than one target at
              the same time, roll the damage once for all of them. For example,
              when a wizard casts <em>fireball</em> or a cleric casts{" "}
              <em>flame strike</em>, the spell's damage is rolled once for all
              creatuers caught in the blast.
            </li>
          </ul>
        )
      });
    } else if (name === "critical_hits") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you score a critical hit, you get to roll extra dice for the
              attack's damage against the target. Roll all of the attack's
              damage dice twice and add them together. Then add any relevant
              modifiers as normal. To speed up play, you can roll all the damage
              dice at once.
            </li>
            <li>
              For example, if you score a critical hit with a dagger, roll 2d4
              for the damage, rather than 1d4, and then add your relevant
              ability modifier. If the attack involves other damage dice, such
              as from the rogue's Sneak Attack feature, you roll those dice
              twice as well.
            </li>
          </ul>
        )
      });
    } else if (name === "damage_resistance_and_vulnerability") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Some creatures and objects are exceedingly difficult or unusually
              easy to hurt with certain types of damage.
            </li>
            <li>
              If a creature or an object has resistance to a damage type, damage
              of that type is halved against it. If a creature or an object has
              vulnerability to a damage type, damage of that type is doubled
              against it.
            </li>
            <li>
              Resistance and then vulnerability are applied after all other
              modifiers to damage. For example, a creature has resistance to
              bludgeoning damage and is hit by an attack that deals 25
              bludgeoning damage. The creature is also within a magical aura
              that reduces all damage by 5. The 25 damage is first reduced by 5
              and then halved, so the creature takes 10 damage.
            </li>
            <li>
              Multiple instances or vulnerability that affect the same damage
              type count as only one instance. For example, if a creature has
              resistance to fire damage as well as resistance to all nonmagical
              damage, the damage of nonmagical fire is reduced by half against
              the creature, not reduced by three-quarters.
            </li>
          </ul>
        )
      });
    } else if (name === "healing") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Unless it results in death, damage isn't permanent. Even death is
              reversible through powerful magic. Rest can restore a creature's
              hit points, and magical methods such as a <em>cure wounds</em>{" "}
              spell or a <em>potion of healing</em> can remove damage in an
              instant.
            </li>
            <li>
              When a creature receives healing of any kind, hit points regained
              are added to its current hit points. A creature's hit points can't
              exceed its hit point maximum, so any hit points regained in excess
              of this number are lost. For example, a druid grants a ranger 8
              hit points of healing. If the ranger has 14 current hit points and
              has a hit point maximum of 20, the ranger regains 6 hit points
              from the druid, not 8.
            </li>
            <li>
              A creature that has died can't regain hit points until magic such
              as the <em>revivify</em> spell has restored it to life.
            </li>
          </ul>
        )
      });
    } else if (name === "dropping_to_0_hit_points") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When you drop to 0 hit points, you either die outright or fall
              unconscious, as explained in the following sections.
            </li>
          </ul>
        )
      });
    } else if (name === "instant_death") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Massive damage can kill you instantly. When damage reduces you to
              0 hit points and there is damage remaining, you die if the
              remaining damage equals or exceeds your hit point maximum.
            </li>
            <li>
              For example, a cleric with a maximum of 12 hit points currently
              has 6 hit points. If she takes 18 damage from an attack, she is
              reduced to 0 hit points, but 12 damage remains. Because the
              remaining damage equals her hit point maximum, the cleric dies.
            </li>
          </ul>
        )
      });
    } else if (name === "falling_unconscious") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              If damage reduces you to 0 hit pionts and fails to kill you, you
              fall unconscious. This unconsciousness ends if you regain any hit
              points.
            </li>
          </ul>
        )
      });
    } else if (name === "death_saving_throws") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Whenever you start your turn with 0 hit points, you must make a
              special saving throw, called a death saving throw, to determine
              whether you creep closer to death or hang onto life. Unlike other
              saving throws, this one isn't tied to any ability score. You are
              in the hands of fate now, aided only by spells and features that
              improve your chances of succeeding on a saving throw.
            </li>
            <li>
              Roll a d20. If the roll is 10 or higher, you succeed. Otherwise,
              you fail. A success or failure has no effect by itself. On your
              third success, you become stable (see below). On your third
              failure, you die. The successes and failures don't need to be
              consecutive; keep track of both until you collect three of a kind.
              The number of both is reset to zero when you regain any hit points
              or become stable.
            </li>
            <li>
              <strong>
                <em>Rolling 1 or 20.</em>
              </strong>{" "}
              When you make a death saving throw and roll a 1 on the d20, it
              counts as two failures. If you roll a 20 on the d20, you regain 1
              hit point.
            </li>
            <li>
              <strong>
                <em>Damage at 0 Hit Points</em>
              </strong>{" "}
              If you take any damage while you have 0 hit points, you suffer a
              death saving throw failure. If the damage is from a critical hit,
              you suffer two failures instead. If the damage equals or exceeds
              your hit point maximum, you suffer instant death.
            </li>
          </ul>
        )
      });
    } else if (name === "stabilizing_a_creature") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              The best way to save a creature with 0 hit points is to heal it.
              If healing is unavailable, the creature can at least be stabilized
              so that it isn't killed by a failed death saving throw.
            </li>
            <li>
              You can use your action to administer first aid to an unconscious
              creature and attempt to stabilize it, which requires a successful
              DC 10 Wisdom (Medicine) check.
            </li>
            <li>
              A stable creature doesn't make death saving throws, even though it
              has 0 hit pionts, but it does remain unconscious. The creature
              stops being stable, and must start making death saving throws
              again, if it takes any damage. A stable creature that isn't healed
              regains 1 hit point after 1d4 hours.
            </li>
          </ul>
        )
      });
    } else if (name === "knocking_a_creature_out") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Sometimes an attacker wants to incapacitate a foe, rather than
              deal a killing blow. When an attacker reduces a creature to 0 hit
              points with a melee attack, the attacker can knock the creature
              out. The attacker can make this choice the instant the damage is
              dealt. The creature falls unconscious and is stable.
            </li>
          </ul>
        )
      });
    } else if (name === "temporary_hit_points") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Some spells and special abilities confer temporary hit pionts to a
              creature. Temporary hit points aren't actual hit points; they are
              a buffer against damage, a pool of hit points that protect you
              from injury.
            </li>
            <li>
              When you have temporary hit points and take damage, the temporary
              hit points are lost first, and any leftover damage carries over to
              your normal hit points. For example, if you have 5 temporary hit
              points and take 7 damage, you lose the temporary hit points and
              then take 2 damage.
            </li>
            <li>
              Because temporary hit points are separate from your actual hit
              points, they can exceed your hit point maximum. A character can,
              therefore, be at full hit points and receive temporary hit points.
            </li>
            <li>
              Healing can't restore temporary hit points, and they can't be
              added together. If you have temporary hit pionts and receive more
              of them, you decide whether to keep the ones you have or to gain
              the new ones. For example, if a spell grants you 12 temporary hit
              points when you already have 10, you can have 12 or 10, not 22.
            </li>
            <li>
              If you have 0 hit points, receiving temporary hit points doesn't
              restore you to consciousness or stabilize you. They can still
              absorb damage directed at you while you're in that state, but only
              true healing can save you.
            </li>
            <li>
              Unless a feature that grants you temporary hit points has a
              duration, they last until they're depleted or you finish a long
              rest.
            </li>
          </ul>
        )
      });
    } else if (name === "mounted_combat") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A knight charging into battle on a warhorse, a wizard casting
              spells from the back of a griffon, or a cleric soaring through the
              sky on a pegasus all enjoy the benefits of speed and mobility that
              a mount can provide.
            </li>
            <li>
              A willing creature that is at least one size larger than you and
              that has an appropriate anatomy can serve as a mount, using the
              following rules.
            </li>
          </ul>
        )
      });
    } else if (name === "mounting_and_dismounting") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Once during your move, you can mount a creature that is within 5
              feet of you or dismount. Doing so costs an amount of movement
              equal to half your speed. For example, if your speed is 30 feet,
              you must spend 15 feet of movement to mount a horse. Therefore,
              you can't mount it if you don't have 15 feet of movement left or
              if your speed is 0.
            </li>
            <li>
              If an effect moves your mount against its will while you're on it,
              you must succeed on a DC 10 Dexterity saving throw or fall off the
              mount, landing prone in a space within 5 feet of it. If you're
              knocked prone while mounted, you must make the same saving throw.
            </li>
            <li>
              If your mount is knocked prone, you can use your reaction to
              dismount it as it falls and land on your feet. Otherwise, you are
              dismounted and fall prone in a space within 5 feet of it.
            </li>
          </ul>
        )
      });
    } else if (name === "controlling_a_mount") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              While you're mounted, you have two options. You can either control
              the mount or allow it to act independently. Intelligent creatures,
              such as dragons, act independently.
            </li>
            <li>
              You can control a mount only if it has been trained to accept a
              rider. Domesticated horses, donkeys, and similar creatures are
              assumed to have such training. The initiative of a controlled
              mount changes to match yours when you mount it. It moves as you
              direct it, and it has only three action options: Dash, Disengage,
              and Dodge. A controlled mount can move and act even on the turn
              that you mount it.
            </li>
            <li>
              An independent mount retains its place in the initiative order.
              Bearing a rider puts no restrictions on the actions the mount can
              take, and it moves and acts as it wishes. It might flee from
              combat, rush to attack and devour a badly injured foe, or
              otherwise act against your wishes.
            </li>
            <li>
              In either case, if the mount provokes an opportunity attack while
              you're on it, the attacker can target you or the mount.
            </li>
          </ul>
        )
      });
    } else if (name === "underwater_combat") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When adventurers pursue sahuagin back to their undersea homes,
              fight off sharks in an ancient shipwreck, or find themselves in a
              flooded dungeon room, they must fight in a challenging
              environment. Underwater the following rules apply.
            </li>
            <li>
              When making a melee weapon attack, a creature that doesn't have a
              swimming speed (either natural or granted by magic) has
              disadvantage on the attack roll unless the weapon is a dagger,
              javelin, shortsword, spear, or trident.
            </li>
            <li>
              A ranged weapon attack automatically misses a target beyond the
              weapon's normal range. Even against a target within normal range,
              the attack roll has disadvantage unless the weapon is a crossbow,
              a net, or a weapon that is thrown like a javelin (including a
              spear, trident, or dart).
            </li>
            <li>
              Creatures and objects that are fully immersed in water have
              resistance to fire damage.
            </li>
          </ul>
        )
      });
    } else if (name === "spellcasting") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Magic permeates fantasy gaming worlds and often appears in the
              form of a spell.
            </li>
            <li>
              This section provides the rules for casting spells. Different
              character classes have distinctive ways of learning and preparing
              their spells, and monsters use spells in unique ways. Regardless
              of its source, a spell follows the rules here.
            </li>
          </ul>
        )
      });
    } else if (name === "spell_level") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Every spell has a level from 0 to 9. A spell's level is a general
              indicator of how powerful it is, with the lowly (but still
              impressive) <em>magic missile</em> at 1st level and the
              earth-shaking <em>wish</em> at 9th. Cantrips - simple but powerful
              spells that characters can cast almost by rote - are level 0. The
              higher a spell's level, the higher level a spellcaster must be to
              use that spell.
            </li>
            <li>
              Spell level and character level don't correspond directly.
              Typically, a character has to be at least 17th level, not 9th
              level, to cast a 9th-level spell.
            </li>
          </ul>
        )
      });
    } else if (name === "known_and_prepared_spells") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Before a spellcaster can use a spell, he or she must have the
              spell firmly fixed in mind, or must have access to the spell in a
              magic item. Members of a few classes, including bards and
              sorcerers, have a limited list of spells they know that are always
              fixed in mind. The same thing is true of many magic-using
              monsters. Other spellcasters, such as clerics and wizards, undergo
              a process of preparing spells. This process varies for different
              classes, as detailed in their descriptions.
            </li>
            <li>
              In every case, the number of spells a caster can have fixed in
              mind at any given time depends on the character's level.
            </li>
          </ul>
        )
      });
    } else if (name === "spell_slots") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Regardless of how many spells a caster knows or prepares, he or
              she can cast only a limited number of spells before resting.
              Manipulating the fabric of magic and channeling its energy into
              even a simple spell is physically and mentally taxing, and
              higher-level spells are even more so. Thus, each spellcasting
              class's description (except that of the warlock) includes a table
              showing how many spell slots of each spell level a character can
              use at each character level. For example, the 3rd-level wizard
              Umara has four 1st-level spell slots and two 2nd-level slots.
            </li>
            <li>
              When a character casts a spell, he or she expends a slot of that
              spell's level or higher, effectively "filling" a slot with the
              spell. You can think of a spell slot as a groove of a certain size
              - small for a 1st-level slot, larger for a spell of higher level.
              A 1st-level spell fits into a slot of any size, but a 9th-level
              spell fits only in a 9th-level slot. So when Umara casts{" "}
              <em>magic missile</em>, a 1st-level spell, she spends one of her
              four 1st-level slots and has three remaining.
            </li>
            <li>Finishing a long rest restores any expended spell slots.</li>
            <li>
              Some characters and monsters have special abilities that let them
              cast spells without using spell slots. For example, a monk who
              follows the Way of the Four Elements, a warlock who chooses
              certain eldritch invocations, and a pit fiend from the Nine Hells
              can all cast spells in such a way.
            </li>
          </ul>
        )
      });
    } else if (name === "casting_a_spell_at_a_higher_level") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              When a spellcaster casts a spell using a slot that is of a higher
              level than the spell, the spell assumes the higher level for that
              casting. For instance, if Umara casts <em>magic missile</em> using
              one of her 2nd-level slots, that <em>magic missile</em> is 2nd
              level. Effectively, the spell expands to fill the slot it is put
              into.
            </li>
            <li>
              Some spells, such as <em>magic missile</em> and{" "}
              <em>cure wounds</em>, have more powerful effects when cast at a
              higher level, as detailed in a spell's description.
            </li>
          </ul>
        )
      });
    } else if (name === "cantrips") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A cantrip is a spell that can be cast at will, without using a
              spell slot and without being prepared in advance. Repeated
              practice has fixed the spell in the caster's mind and infused the
              caster with the magic needed to produce the effect over and over.
              A cantrip's spell level is 0.
            </li>
          </ul>
        )
      });
    } else if (name === "rituals") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Certain spells have a special tag: ritual. Such a spell can be
              cast following the normal rules for spellcasting, or the spell can
              be cast as a ritual. The ritual version of the spell takes 10
              minutes longer to cast than normal. It also doesn't expend a spell
              slot, which means the ritual version of a spell can't be cast at a
              higher level.
            </li>
            <li>
              To cast a spell as a ritual, a spellcaster must have a feature
              that grants the ability to do so. The cleric and the druid, for
              example, have such a feature. The caster must also have the spell
              prepared or on his or her list of spells known, unless the
              character's ritual feature specifies otherwise, as the wizard's
              does.
            </li>
          </ul>
        )
      });
    } else if (name === "casting_time") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Most spells require a single action to cast, but some spells
              require a bonus action, a reaction, or much more time to cast.
            </li>
            <li>
              <div>Bonus Action</div>
              <div>
                A spell cast with a bonus action is especially swift. You must
                use a bonus action on your turn to cast the spell, provided that
                you haven't already taken a bonus action this turn. You can't
                cast another spell during the same turn, except for a cantrip
                with a casting time of 1 action.
              </div>
            </li>
            <li>
              <div>Reactions</div>
              <div>
                Some spells can be cast as reactions. These spelsl take a
                fraction of a second to bring about and are cast in response to
                some event. If a spell can be cast as a reaction, the spell
                description tells you exactly when you can do so.
              </div>
            </li>
            <li>
              <div>Longer Casting Times</div>
              <div>
                Certain spells (including spells cast as rituals) require more
                time to cast: minutes or even hours. When you cast a spell with
                a casting time longer than a single action or reaction, you must
                spend your action each turn casting the spell, and you must
                maintain your concentration while you do so (see "Concentration"
                below). If your concentration is broken, the spell fails, but
                you don't expend a spell slot. If you want to try casting the
                spell again, you must start over.
              </div>
            </li>
          </ul>
        )
      });
    } else if (name === "spell_range") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              The target of a spell must be within the spell's range. For a
              spell like <em>magic missile</em>, the target is a creature. For a
              spell like <em>fireball</em>, the target is the point in space
              where the ball of fire erupts.
            </li>
            <li>
              Most spells have ranges expressed in feet. Some spells can target
              only a creature (including you) that you touch. Other spells, such
              as the <em>shield</em> spell, affect only you. These spells have a
              range of self.
            </li>
            <li>
              Spells that create cones or lines of effect that originate from
              you also have a range of self, indicating that the origin point of
              the spell's effect must be you.
            </li>
            <li>
              Once a spell is cast, its effects aren't limited by its range,
              unless a spell's description says otherwise.
            </li>
          </ul>
        )
      });
    } else if (name === "components") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A spell's components are the physical requirements you must meet
              in order to cast it. Each spell's description indicates whether it
              requires verbal (V), somatic (S), or material (M) components. If
              you can't provide one or more of a spell's components, you are
              unable to cast the spell.
            </li>
            <li>
              <div>Verbal (V)</div>
              <div>
                Most spells require the chanting of mystical words. The words
                themselves aren't the source of the spell's power; rather, the
                particular combination of sounds, with specific pitch and
                resonance, sets the threads of magic in motion. Thus, a
                character who is gagged or in an area of silence, such as one
                created by the <em>silence</em> spell, can't cast a spell with a
                verbal component.
              </div>
            </li>
            <li>
              <div>Somatic (S)</div>
              <div>
                Spellcasting gestures might include a forceful gesticulation or
                an intricate set of gestures. If a spell requires a somatic
                component, the caster must have free use of at least one hand to
                perform these gestures.
              </div>
            </li>
            <li>
              <div>Material (M)</div>
              <div>
                Casting some spells requires particular objects, specified in
                parentheses in the component entry. A character can use a
                component pouch or a spellcasting focus in place of the
                components specified for a spell. But if a cost is indicated for
                a component, a character must have that specific component
                before he or she can cast the spell.
              </div>
              <div>
                If a spell states that a material component is consumed by the
                spell, the caster must provide this component for each casting
                of the spell.
              </div>
              <div>
                A spellcaster must have a hand free to access a spell's material
                components - or to hold a spellcasting focus - but it can be the
                same hand that he or she uses to perform somatic components.
              </div>
            </li>
          </ul>
        )
      });
    } else if (name === "duration") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A spell's duration is the length of time the spell persists. A
              duration can be expressed in rounds, minutes, hours, or even
              years. Some spells specify that their effects last until the
              spells are dispelled or destroyed.
            </li>
            <li>
              <div>Instantaneous</div>
              <div>
                Many spells are instantaneous. The spell harms, heals, creates,
                or alters a creature or an object in a way that can't be
                dispelled, because its magic exists only for an instant.
              </div>
            </li>
            <li>
              <div>Concentration</div>
              <div>
                Some spells require you to maintain concentration in order to
                keep their magic active. If you lose concentration, such a spell
                ends.
              </div>
              <div>
                If a spell must be maintained with concentration, that fact
                appears in its Duration entry, and the spell specifies how long
                you can concentrate on it. You can end concentration at any time
                (no action required).
              </div>
              <div>
                Normal activity, such as moving and attacking, doesn't interfere
                with concentration. The following factors can break
                concentration:
              </div>
              <div>
                <strong>
                  Casting another spell that requires concentration.
                </strong>{" "}
                You lose concentration on a spell if you cast another spell that
                requires concentration. You can't concentrate on two spells at
                once.
              </div>
              <div>
                <strong>Taking damage.</strong> Whenever you take damage while
                you are concentrating on a spell, you must make a Constitution
                saving throw to maintain your concentration. The DC equals 10 or
                half the damage you take, whichever number is higher. If you
                take damage from multiple sources, such as an arrow and a
                dragon's breath, you make a separate saving throw for each
                source of damage.
              </div>
              <div>
                <strong>Being incapacitated or killed.</strong> You lose
                concentration on a spell if you are incapacitated or if you die.
              </div>
              <div>
                The GM might also decide that certain environmental phenomena,
                such as a wave crashing over while you're on a storm-tossed
                ship, require you to succeed on a DC 10 Constitution saving
                throw to maintain concentration on a spell.
              </div>
            </li>
            <li>
              <div>Longer Casting Times</div>
              <div>
                Certain spells (including spells cast as rituals) require more
                time to cast: minutes or even hours. When you cast a spell with
                a casting time longer than a single action or reaction, you must
                spend your action each turn casting the spell, and you must
                maintain your concentration while you do so (see "Concentration"
                below). If your concentration is broken, the spell fails, but
                you don't expend a spell slot. If you want to try casting the
                spell again, you must start over.
              </div>
            </li>
          </ul>
        )
      });
    } else if (name === "targets") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              A typical spell requires you to pick one or more targets to be
              affected by the spell's magic. A spell's description tells you
              whetehr the spell targets creatures, objects, or a point of origin
              for an area of effect.
            </li>
            <li>
              Unless a spell has a perceptible effect, a creature might not know
              it was targeted by a spell at all. An effect like crackling
              lightning is obvious, but a more subtle effect, such as an attempt
              to read a creature's thoughts, typically goes unnoticed, unless a
              spell says otherwise.
            </li>
            <li>
              <div>A Clear Path to the Target</div>
              <div>
                To target something, you must have a clear path to it, so it
                can't be behind total cover.
              </div>
              <div>
                If you place an area of effect at a point that you can't see and
                an obstruction, such as a wall, is between you and that piont,
                the piont of origin comes into being on the near side of that
                obstruction.
              </div>
            </li>
            <li>
              <div>Targeting Yourself</div>
              <div>
                If a spell targets a creature of your choice, you can choose
                yourself, unless the creature must be hostile or specifically a
                creature other than you. If you are in the area of effect of a
                spell you cast, you can target yourself.
              </div>
            </li>
          </ul>
        )
      });
    } else if (name === "areas_of_effect") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Spells such as <em>burning hands</em> and <em>cone of cold</em>{" "}
              cover an area, allowing them to affect multiple creatures at once.
            </li>
            <li>
              A spell's description specifies its area of effect, which
              typically has one of five different shapes: cone, cube, cylinder,
              line, or sphere. Every area of effect has a point of origin, a
              location from which the spell's energy erupts. The rules for each
              shape specify how you position its point of origin. Typically, a
              point of origin is a point in space, but some spells have an area
              whose origin is a creature or an object.
            </li>

            <li>
              A spell's effect expands in straight lines from the point of
              origin. If no unblocked straight line extends from the point of
              origin to a location within the area of effect, that location
              isn't included in the spell's area. TO block one of these
              imaginary lines, an obstruction must provide total cover.
            </li>
            <li>
              <div>Cone</div>
              <div>
                A cone extends in a direction you chosoe from its point of
                origin. A cone's width at a given piont along its length is
                equal to that point's distance from the point of origin. A
                cone's area of effect specifies its maximum length.
              </div>
              <div>
                A cone's point of origin is not included in the cone's area of
                effect, unless you decide otherwise.
              </div>
            </li>
            <li>
              <div>Cube</div>
              <div>
                You select a cube's point of origin, which lies anywhere on a
                face of the cubic effect. The cube's size is expressed as the
                length of each side.
              </div>
              <div>
                A cube's point of origin is not included in the cube's area of
                effect, unless you decide otherwise.
              </div>
            </li>
            <li>
              <div>Cylinder</div>
              <div>
                A cylinder's point of origin is the center of a circle of a
                particular radius, as given in the spell description. The circle
                must either be on the ground or at the height of the spell
                effect. The energy in a cylinder expands in straight lines from
                the point of origin to the perimeter of the circle, forming the
                base of the cylinder. The spell's effect then shoots up from the
                base or down from the top, to a distance equal to the height of
                the cylinder.
              </div>
              <div>
                A cylinder's point of origin is included in the cylinder's area
                of effect.
              </div>
            </li>
            <li>
              <div>Line</div>
              <div>
                A line extends from its point of origin in a straight path up to
                its length and covers an area defined by its width.
              </div>
              <div>
                A line's point of origin is not included in the line's area of
                effect, unless you decide otherwise.
              </div>
            </li>
            <li>
              <div>Sphere</div>
              <div>
                You select a sphere's point of origin, and the sphere extends
                outward from that point. The sphere's size is expressed as a
                radius in feet that extends from the point.
              </div>
              <div>
                A sphere's point of origin is included in the sphere's area of
                effect.
              </div>
            </li>
          </ul>
        )
      });
    } else if (name === "saving_throws") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Many spells specify that a target can make a saving throw to avoid
              some or all of a spell's effects. The spell specifies the ability
              that the target uses for the save and what happens on a success or
              failure.
            </li>
            <li>
              The DC to resist one of your spells equals 8 + your spellcasting
              ability modifier + your proficiency bonus + any special modifiers.
            </li>
          </ul>
        )
      });
    } else if (name === "attack_rolls") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              Some spells require the caster to make an attack roll to determine
              whether the spell effect hits the intended target. Your attack
              bonus with a spell attack equals your spellcasting ability
              modifier + your proficiency bonus.
            </li>
            <li>
              Most spells that require attack rolls involve ranged attacks.
              Remember that you have disadvantage on a ranged attack roll if you
              are within 5 feet of a hostile creature that can see you and that
              isn't incapacitated.
            </li>
          </ul>
        )
      });
    } else if (name === "combining_magical_effects") {
      this.setState({
        displayBool: true,
        display: (
          <ul className="RulesHelperText">
            <li>
              The effects of different spells add together while the durations
              of those spells overlap. The effects of the same spell cast
              multiple times don't combine, however. Instead, the most potent
              effect - such as the highest bonus - from those castings appleis
              while their durations overlap.
            </li>
            <li>
              For example, if two clerics cast <em>bless</em> on teh same
              target, that character gains the spell's benefit only once; he or
              she doesn't get to roll two bonus dice.
            </li>
          </ul>
        )
      });
    }
  };

  mouseOverText = () => {
    this.setState({ displayShow: "show", displayBool: true });
  };

  mouseOverDisplay = () => {
    this.setState({ displayTextShow: "show", displayBool: true });
  };

  mouseExitText = () => {
    this.setState({ displayShow: "hidden" }, () => {
      if (
        this.state.displayShow === "hidden" &&
        this.state.displayTextShow === "hidden"
      ) {
        this.setState({ displayBool: false });
      }
    });
  };

  mouseExit = () => {
    this.setState({ displayTextShow: "hidden" }, () => {
      if (
        this.state.displayShow === "hidden" &&
        this.state.displayTextShow === "hidden"
      ) {
        this.setState({ displayBool: false });
      }
    });
  };

  render() {
    let display;
    let displayShow;
    if (!this.state.displayBool) {
      displayShow = <div className="Hidden" />;
    } else {
      displayShow = (
        <div
          className="RulesHelperTestText"
          onMouseEnter={this.mouseOverDisplay}
          onMouseLeave={this.mouseExit}
        >
          {this.state.display}
        </div>
      );
    }
    display = (
      <div>
        <div className="RulesHelper">
          <div className="RulesHelperBannerHolder">
            <img
              src={RulesHelperBanner}
              alt={"RulesHelper"}
              className="RulesHelperBannerImage"
            />
          </div>
          <div className="RulesHelperHeaderText">Rules Helper*</div>
          <div className="RulesHelperDisplayImageHolder">
            <img
              src={Page}
              alt={"RulesHelperPageImage"}
              className="ImageFill"
            />
          </div>

          <div className="RulesHelperDisplay">
            <div className="CombatHelperSubheader">Conditions:</div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Blinded}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("blinded")}
                  onMouseLeave={this.mouseExitText}
                >
                  Blinded
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Charmed}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("charmed")}
                  onMouseLeave={this.mouseExitText}
                >
                  Charmed
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Deafened}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("deafened")}
                  onMouseLeave={this.mouseExitText}
                >
                  Deafened
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Frightened}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("frightened")}
                  onMouseLeave={this.mouseExitText}
                >
                  Frightened
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Exhaustion}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("exhaustion")}
                  onMouseLeave={this.mouseExitText}
                >
                  Exhaustion
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={ExhaustionEffects}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("exhaustion_effects")}
                  onMouseLeave={this.mouseExitText}
                >
                  Exhaustion Effects
                </div>
              </div>
            </div>

            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Grappled}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("grappled")}
                  onMouseLeave={this.mouseExitText}
                >
                  Grappled
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Incapacitated}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("incapacitated")}
                  onMouseLeave={this.mouseExitText}
                >
                  Incapacitated
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Invisible}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("invisible")}
                  onMouseLeave={this.mouseExitText}
                >
                  Invisible
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Paralyzed}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("paralyzed")}
                  onMouseLeave={this.mouseExitText}
                >
                  Paralyzed
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Petrified}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("petrified")}
                  onMouseLeave={this.mouseExitText}
                >
                  Petrified
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Poisoned}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("poisoned")}
                  onMouseLeave={this.mouseExitText}
                >
                  Poisoned
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Prone}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("prone")}
                  onMouseLeave={this.mouseExitText}
                >
                  Prone
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Restrained}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("restrained")}
                  onMouseLeave={this.mouseExitText}
                >
                  Restrained
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Stunned}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("stunned")}
                  onMouseLeave={this.mouseExitText}
                >
                  Stunned
                </div>
              </div>
            </div>
            <div className="SpecificConditionDisplay RulesHelperPopup">
              <div className="ConditionIconHolder">
                <img
                  className="ConditionIcon"
                  src={Unconscious}
                  alt={<i className="fas fa-eye-slash" />}
                />
              </div>
              <div className="CenteredIcon">
                <div
                  className="ConditionText"
                  onMouseEnter={() => this.mouseOver("unconscious")}
                  onMouseLeave={this.mouseExitText}
                >
                  Unconscious
                </div>
              </div>
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("actions")}
              onMouseLeave={this.mouseExitText}
            >
              Actions
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("attack")}
              onMouseLeave={this.mouseExitText}
            >
              Attack
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("cast_a_spell")}
              onMouseLeave={this.mouseExitText}
            >
              Cast a Spell
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("dash")}
              onMouseLeave={this.mouseExitText}
            >
              Dash
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("disengage")}
              onMouseLeave={this.mouseExitText}
            >
              Disengage
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("dodge")}
              onMouseLeave={this.mouseExitText}
            >
              Dodge
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("help")}
              onMouseLeave={this.mouseExitText}
            >
              Help
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("hide")}
              onMouseLeave={this.mouseExitText}
            >
              Hide
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("ready")}
              onMouseLeave={this.mouseExitText}
            >
              Ready
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("search")}
              onMouseLeave={this.mouseExitText}
            >
              Search
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("use_an_object")}
              onMouseLeave={this.mouseExitText}
            >
              Use an Object
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("ranged_attacks")}
              onMouseLeave={this.mouseExitText}
            >
              Ranged Attacks
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("range")}
              onMouseLeave={this.mouseExitText}
            >
              Range
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() =>
                this.mouseOver("ranged_attacks_in_close_combat")
              }
            >
              Ranged Attacks in Close Combat
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("melee_attacks")}
              onMouseLeave={this.mouseExitText}
            >
              Melee Attacks
            </div>

            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("opportunity_attacks")}
              onMouseLeave={this.mouseExitText}
            >
              Opportunity Attacks
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("two_weapon_fighting")}
              onMouseLeave={this.mouseExitText}
            >
              Two-Weapon Fighting
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("grappling")}
              onMouseLeave={this.mouseExitText}
            >
              Grappling
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("shoving_a_creature")}
              onMouseLeave={this.mouseExitText}
            >
              Shoving a Creature
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("cover")}
              onMouseLeave={this.mouseExitText}
            >
              Cover
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("damage_and_healing")}
              onMouseLeave={this.mouseExitText}
            >
              Damage and Healing
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("hit_points")}
              onMouseLeave={this.mouseExitText}
            >
              Hit Points
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("damage_rolls")}
              onMouseLeave={this.mouseExitText}
            >
              Damage Rolls
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("critical_hits")}
              onMouseLeave={this.mouseExitText}
            >
              Critical Hits
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() =>
                this.mouseOver("damage_resistance_and_vulnerability")
              }
            >
              Damage Resistance and Vulnerability
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("healing")}
              onMouseLeave={this.mouseExitText}
            >
              Healing
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("dropping_to_0_hit_points")}
              onMouseLeave={this.mouseExitText}
            >
              Dropping to 0 Hit Points
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("instant_death")}
              onMouseLeave={this.mouseExitText}
            >
              Instant Death
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("falling_unconscious")}
              onMouseLeave={this.mouseExitText}
            >
              Falling Unconscious
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("death_saving_throws")}
              onMouseLeave={this.mouseExitText}
            >
              Death Saving Throws
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("stabilizing_a_creature")}
              onMouseLeave={this.mouseExitText}
            >
              Stabilizing a Creature
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("knocking_a_creature_out")}
              onMouseLeave={this.mouseExitText}
            >
              Knocking a Creature Out
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("temporary_hit_points")}
              onMouseLeave={this.mouseExitText}
            >
              Temporary Hit Points
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("mounted_combat")}
              onMouseLeave={this.mouseExitText}
            >
              Mounted Combat
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("mounting_and_dismounting")}
              onMouseLeave={this.mouseExitText}
            >
              Mounting and Dismounting
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("controlling_a_mount")}
              onMouseLeave={this.mouseExitText}
            >
              Controlling a Mount
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("underwater_combat")}
              onMouseLeave={this.mouseExitText}
            >
              Underwater Combat
            </div>
            <div
              className="CombatHelperSubheader RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("spellcasting")}
              onMouseLeave={this.mouseExitText}
            >
              Spellcasting
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("spell_level")}
              onMouseLeave={this.mouseExitText}
            >
              Spell Level
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("known_and_prepared_spells")}
              onMouseLeave={this.mouseExitText}
            >
              Known and Prepared Spells
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("spell_slots")}
              onMouseLeave={this.mouseExitText}
            >
              Spell Slots
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() =>
                this.mouseOver("casting_a_spell_at_a_higher_level")
              }
            >
              Casting a Spell at a Higher Level
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("cantrips")}
              onMouseLeave={this.mouseExitText}
            >
              Cantrips
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("rituals")}
              onMouseLeave={this.mouseExitText}
            >
              Rituals
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("casting_time")}
              onMouseLeave={this.mouseExitText}
            >
              Casting Time
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("spell_range")}
              onMouseLeave={this.mouseExitText}
            >
              Range
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("components")}
              onMouseLeave={this.mouseExitText}
            >
              Components
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("duration")}
              onMouseLeave={this.mouseExitText}
            >
              Duration
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("targets")}
              onMouseLeave={this.mouseExitText}
            >
              Targets
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("areas_of_effect")}
              onMouseLeave={this.mouseExitText}
            >
              Areas of Effect
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("saving_throws")}
              onMouseLeave={this.mouseExitText}
            >
              Saving Throws
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("attack_rolls")}
              onMouseLeave={this.mouseExitText}
            >
              Attack Rolls
            </div>
            <div
              className="SpecificCombatAction RulesHelperPopup"
              onMouseEnter={() => this.mouseOver("combining_magical_effects")}
              onMouseLeave={this.mouseExitText}
            >
              Combining Magical Effects
            </div>
          </div>
        </div>
        {displayShow}
      </div>
    );

    return <div>{display}</div>;
  }
}

export default RulesHelper;
