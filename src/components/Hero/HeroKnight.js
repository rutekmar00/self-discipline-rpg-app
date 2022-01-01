import React from "react";
import SequenceAnimator from "react-sequence-animator/SequenceAnimator";
import "./Hero.css";
// https://github.com/wix-incubator/react-sequence-animator

const heroIdleBlinking = [
  <img key={1} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_000.png" />,
  <img key={2} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_001.png" />,
  <img key={3} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_002.png" />,
  <img key={4} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_003.png" />,
  <img key={5} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_004.png" />,
  <img key={6} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_005.png" />,
  <img key={7} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_006.png" />,
  <img key={8} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_007.png" />,
  <img key={9} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_008.png" />,
  <img key={10} alt="Hero" src="/heroKnight/images/Knight_03__IDLE_009.png" />,
];

const heroDied = [
  <img key={1} alt="Hero" src="/heroKnight/images/Knight_03__DIE_000.png" />,
  <img key={2} alt="Hero" src="/heroKnight/images/Knight_03__DIE_001.png" />,
  <img key={3} alt="Hero" src="/heroKnight/images/Knight_03__DIE_002.png" />,
  <img key={4} alt="Hero" src="/heroKnight/images/Knight_03__DIE_003.png" />,
  <img key={5} alt="Hero" src="/heroKnight/images/Knight_03__DIE_004.png" />,
  <img key={6} alt="Hero" src="/heroKnight/images/Knight_03__DIE_005.png" />,
  <img key={7} alt="Hero" src="/heroKnight/images/Knight_03__DIE_006.png" />,
  <img key={8} alt="Hero" src="/heroKnight/images/Knight_03__DIE_007.png" />,
  <img key={9} alt="Hero" src="/heroKnight/images/Knight_03__DIE_008.png" />,
  <img key={10} alt="Hero" src="/heroKnight/images/Knight_03__DIE_009.png" />,
];

const defaultStates = ["default", "heroIdleBlinking"];

class HeroKnight extends React.Component {
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
      <div className="hero hero-knight">
        {
          {
            default: (
              <div className="default">
                <img
                  src="/heroKnight/images/Knight_03__ATTACK_003.png"
                  alt="hero"
                />
              </div>
            ),
            heroDied: (
              <SequenceAnimator
                children={heroDied}
                duration={1000}
                autoplay={true}
              />
            ),
            heroIdleBlinking: (
              <SequenceAnimator children={heroIdleBlinking} duration={1000} />
            ),
          }[this.props.heroState]
        }
        <div className="hidden">
          {heroIdleBlinking}
          {heroDied}
        </div>
      </div>
    );
  }
}

export default HeroKnight;
