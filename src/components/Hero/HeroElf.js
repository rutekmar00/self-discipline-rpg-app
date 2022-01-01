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

const heroDied = [
  <img key={1} alt="Hero" src="/heroElf/images/Elf_03__DIE_000.png" />,
  <img key={2} alt="Hero" src="/heroElf/images/Elf_03__DIE_001.png" />,
  <img key={3} alt="Hero" src="/heroElf/images/Elf_03__DIE_002.png" />,
  <img key={4} alt="Hero" src="/heroElf/images/Elf_03__DIE_003.png" />,
  <img key={5} alt="Hero" src="/heroElf/images/Elf_03__DIE_004.png" />,
  <img key={6} alt="Hero" src="/heroElf/images/Elf_03__DIE_005.png" />,
  <img key={7} alt="Hero" src="/heroElf/images/Elf_03__DIE_006.png" />,
  <img key={8} alt="Hero" src="/heroElf/images/Elf_03__DIE_007.png" />,
  <img key={9} alt="Hero" src="/heroElf/images/Elf_03__DIE_008.png" />,
  <img key={10} alt="Hero" src="/heroElf/images/Elf_03__DIE_009.png" />,
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
            heroDied: (
              <SequenceAnimator
                children={heroDied}
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
          {heroDied}
        </div>
      </div>
    );
  }
}

export default HeroElf;
