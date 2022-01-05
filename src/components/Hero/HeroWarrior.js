import React from "react";
import SequenceAnimator from "react-sequence-animator/SequenceAnimator";
import "./Hero.css";
// https://github.com/wix-incubator/react-sequence-animator

const heroIdleBlinking = [
  <img
    key={1}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_000.png"
  />,
  <img
    key={2}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_001.png"
  />,
  <img
    key={3}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_002.png"
  />,
  <img
    key={4}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_003.png"
  />,
  <img
    key={5}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_004.png"
  />,
  <img
    key={6}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_005.png"
  />,
  <img
    key={7}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_006.png"
  />,
  <img
    key={8}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_007.png"
  />,
  <img
    key={9}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_008.png"
  />,
  <img
    key={10}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_009.png"
  />,
  <img
    key={11}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_010.png"
  />,
  <img
    key={12}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_011.png"
  />,
  <img
    key={13}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_012.png"
  />,
  <img
    key={14}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_013.png"
  />,
  <img
    key={15}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_014.png"
  />,
  <img
    key={16}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_015.png"
  />,
  <img
    key={17}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_016.png"
  />,
  <img
    key={18}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_017.png"
  />,
  <img
    key={19}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_018.png"
  />,
  <img
    key={20}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_019.png"
  />,
  <img
    key={21}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_020.png"
  />,
  <img
    key={22}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_021.png"
  />,
  <img
    key={23}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_022.png"
  />,
  <img
    key={24}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_023.png"
  />,
  <img
    key={25}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_024.png"
  />,
  <img
    key={26}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_025.png"
  />,
  <img
    key={27}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_026.png"
  />,
  <img
    key={28}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_027.png"
  />,
  <img
    key={29}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_028.png"
  />,
  <img
    key={30}
    alt="HeroWarrior"
    src="/heroWarrior/images/IdleBlinking/0_Warrior_IdleBlinking_029.png"
  />,
];

const heroLogOut = [
  <img
    key={1}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_000.png"
  />,
  <img
    key={2}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_001.png"
  />,
  <img
    key={3}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_002.png"
  />,
  <img
    key={4}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_003.png"
  />,
  <img
    key={5}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_004.png"
  />,
  <img
    key={6}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_005.png"
  />,
  <img
    key={7}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_006.png"
  />,
  <img
    key={8}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_007.png"
  />,
  <img
    key={9}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_008.png"
  />,
  <img
    key={10}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_009.png"
  />,
  <img
    key={11}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_010.png"
  />,
  <img
    key={12}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_011.png"
  />,
  <img
    key={13}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_012.png"
  />,
  <img
    key={14}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_013.png"
  />,
  <img
    key={15}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_014.png"
  />,
  <img
    key={16}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_015.png"
  />,
  <img
    key={17}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_016.png"
  />,
  <img
    key={18}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_017.png"
  />,
  <img
    key={19}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_018.png"
  />,
  <img
    key={20}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_019.png"
  />,
  <img
    key={21}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_020.png"
  />,
  <img
    key={22}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_021.png"
  />,
  <img
    key={23}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_022.png"
  />,
  <img
    key={24}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_023.png"
  />,
  <img
    key={25}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_024.png"
  />,
  <img
    key={26}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_025.png"
  />,
  <img
    key={27}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_026.png"
  />,
  <img
    key={28}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_027.png"
  />,
  <img
    key={29}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_028.png"
  />,
  <img
    key={30}
    alt="HeroWarrior"
    src="/heroWarrior/images/Died/0_Warrior_LOGOUT_029.png"
  />,
];

const defaultStates = ["default", "heroIdleBlinking"];

class HeroWarrior extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentState: "default" };
  }

  async componentDidMount() {
    this.timerComponentDidMount = setTimeout(
      function () {
        this.heroRotateState();
      }.bind(this),
      5000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timerComponentDidMount);
    clearTimeout(this.timerHeroRotateState);
  }

  setCurrentHeroState(currentHeroState) {
    this.setState({
      currentState: currentHeroState,
    });
  }

  heroRotateState() {
    this.setCurrentHeroState(
      defaultStates[Math.floor(Math.random() * defaultStates.length)]
    );
    this.timerHeroRotateState = setTimeout(
      function () {
        this.heroRotateState();
      }.bind(this),
      10000
    );
  }

  render() {
    return (
      <div className="hero hero-warrior">
        {
          {
            default: (
              <div className="default">
                <img
                  src="/heroWarrior/images/Attack_1/0_Warrior_Attack_1_002.png"
                  alt="hero"
                />
              </div>
            ),
            heroLogOut: (
              <SequenceAnimator
                children={heroLogOut}
                duration={5000}
                autoplay={true}
              />
            ),
            heroIdleBlinking: (
              <SequenceAnimator children={heroIdleBlinking} duration={5000} />
            ),
          }[this.props.heroState]
        }

        <div className="hidden">
          {heroIdleBlinking}
          {heroLogOut}
        </div>
      </div>
    );
  }
}

export default HeroWarrior;
