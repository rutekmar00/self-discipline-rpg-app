import React from "react";
import SequenceAnimator from "react-sequence-animator/SequenceAnimator";
import "./Hero.css";
// https://github.com/wix-incubator/react-sequence-animator

const heroIdleBlinking = [
  <img key={1} alt="Hero" src="/heroElf/images/Elf_03__IDLE_000.png" />,
  <img key={2} alt="Hero" src="/heroElf/images/Elf_03__IDLE_001.png" />,
  <img key={3} alt="Hero" src="/heroElf/images/Elf_03__IDLE_002.png" />,
  <img key={4} alt="Hero" src="/heroElf/images/Elf_03__IDLE_003.png" />,
  <img key={5} alt="Hero" src="/heroElf/images/Elf_03__IDLE_004.png" />,
  <img key={6} alt="Hero" src="/heroElf/images/Elf_03__IDLE_005.png" />,
  <img key={7} alt="Hero" src="/heroElf/images/Elf_03__IDLE_006.png" />,
  <img key={8} alt="Hero" src="/heroElf/images/Elf_03__IDLE_007.png" />,
  <img key={9} alt="Hero" src="/heroElf/images/Elf_03__IDLE_008.png" />,
  <img key={10} alt="Hero" src="/heroElf/images/Elf_03__IDLE_009.png" />,
];

const heroLogOut = [
  <img key={1} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_000.png" />,
  <img key={2} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_001.png" />,
  <img key={3} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_002.png" />,
  <img key={4} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_003.png" />,
  <img key={5} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_004.png" />,
  <img key={6} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_005.png" />,
  <img key={7} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_006.png" />,
  <img key={8} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_007.png" />,
  <img key={9} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_008.png" />,
  <img key={10} alt="Hero" src="/heroElf/images/Elf_03__LOGOUT_009.png" />,
];

class HeroElf extends React.Component {
  render() {
    return (
      <div className="hero hero-elf">
        {
          {
            default: (
              <div className="default">
                <img src="/heroElf/images/Elf_03__ATTACK_003.png" alt="hero" />
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

export default HeroElf;
