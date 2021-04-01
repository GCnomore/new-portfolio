import { useEffect, useState } from "react";

import { useSpring, animated } from "react-spring";
import styled from "styled-components/macro";
import "../animation.css";
import portrait from "../assets/profile_cut.webp";
import lvl_2_crown from "../assets/easterEggs/lvl2crown.webp";
import lvl_3_crown from "../assets/easterEggs/lvl3crown.webp";
import lvl_3_brooch from "../assets/easterEggs/lvl3brooch.webp";
import goldFrame from "../assets/easterEggs/goldframe.webp";
import goldBar from "../assets/easterEggs/goldbar.webp";
import goldRod from "../assets/easterEggs/goldrod.webp";
import goldCastle from "../assets/easterEggs/goldcastle.webp";
import goldChest from "../assets/easterEggs/goldchest.webp";

import angular from "../assets/icons/Angular.webp";
import aws from "../assets/icons/aws.webp";
import bootstrap from "../assets/icons/Bootstrap.webp";
import cssIcon from "../assets/icons/css.webp";
import expo from "../assets/icons/expo.webp";
import flutter from "../assets/icons/flutter.webp";
import github from "../assets/icons/github1.webp";
import html from "../assets/icons/html.webp";
import javascript from "../assets/icons/javascript.webp";
import jquery from "../assets/icons/Jquery.webp";
import materialdesign from "../assets/icons/materialdesign.webp";
import mongodb from "../assets/icons/MongoDB.webp";
import mysql from "../assets/icons/mysql.webp";
import nextjs from "../assets/icons/nextjs.webp";
import nodejs from "../assets/icons/nodejs.webp";
import react from "../assets/icons/react.webp";
import reactnative from "../assets/icons/reactnative.webp";
import vue from "../assets/icons/Vue.webp";
import typescript from "../assets/icons/typescript.webp";
import oauth from "../assets/icons/oauth.webp";
import passport from "../assets/icons/passport.webp";
import puppeteer from "../assets/icons/puppeteer.webp";
import cucumber from "../assets/icons/cucumber.webp";
import firebase from "../assets/icons/firebase.webp";
import heroku from "../assets/icons/heroku.svg";
import semanticui from "../assets/icons/semanticui.webp";
import jest from "../assets/icons/jest.webp";
import express from "../assets/icons/express.webp";

export default function About({ broken, theme }) {
  const [flipCard, setFlipCard] = useState("");
  const [levelUp, setLevelUp] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const fadeIn = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const fadeIn_card = useSpring({
    config: { duration: 800 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 1400,
  });

  const renderCrown = () => {
    if (broken) {
      console.log(levelUp);
      if (levelUp === 1)
        return (
          <>
            <Level2Crown src={lvl_2_crown} alt="gold crown" />
          </>
        );

      if (levelUp === 2)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
          </>
        );
      if (levelUp === 3)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
          </>
        );
      if (levelUp === 4)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
            <GoldFrame src={goldFrame} alt="gold frame" />
          </>
        );
      if (levelUp === 5)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
            <GoldFrame src={goldFrame} alt="gold frame" />
            <GoldRod src={goldRod} alt="gold rod" />
          </>
        );
      if (levelUp === 6)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
            <GoldFrame src={goldFrame} alt="gold frame" />
            <GoldRod src={goldRod} alt="gold rod" />
            <GoldBar src={goldBar} alt="gold bar" />
          </>
        );
      if (levelUp === 7)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
            <GoldFrame src={goldFrame} alt="gold frame" />
            <GoldRod src={goldRod} alt="gold rod" />
            <GoldBar src={goldBar} alt="gold bar" />
            <GoldChest src={goldChest} alt="gold chest" />
          </>
        );
      if (levelUp === 8)
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
            <GoldFrame src={goldFrame} alt="gold frame" />
            <GoldRod src={goldRod} alt="gold rod" />
            <GoldBar src={goldBar} alt="gold bar" />
            <GoldChest src={goldChest} alt="gold chest" />
            <GoldCastle src={goldCastle} alt="gold castle" />
          </>
        );
    }

    if (!broken) {
      if (levelUp >= 6) {
        return (
          <>
            <Level3Crown src={lvl_3_crown} alt="gold crown" />
            <GoldBrooch src={lvl_3_brooch} alt="gold brooch" />
          </>
        );
      } else if (levelUp >= 3) {
        return (
          <>
            <Level2Crown src={lvl_2_crown} alt="gold crown" />
          </>
        );
      }
    }
  };

  const renderLevel = () => {
    if (levelUp >= 6) {
      return 3;
    } else if (levelUp >= 3) {
      return 2;
    } else {
      return 1;
    }
  };

  const renderModal = () => {
    return (
      <ModalBackDrop
        onClick={(e) => {
          const condition = Array.from(e.target.classList);
          if (condition.length !== 0) {
            if (condition[0].includes("BackDrop")) {
              setShowModal(false);
            }
          }
        }}
      >
        <Modal>
          {broken ? (
            <p>I still can't go more than this...</p>
          ) : (
            <p>
              Sorry, my conscience is telling me that I shouldn't be more than
              level 3 for now!
            </p>
          )}
        </Modal>
      </ModalBackDrop>
    );
  };

  if (!broken && levelUp >= 9) {
    setLevelUp(6);
    setShowModal(true);
  }
  if (broken && levelUp >= 9) {
    setLevelUp(8);
    setShowModal(true);
  }

  useEffect(() => {
    broken && setLevelUp(0);
  }, [broken]);

  return (
    <AboutContainer theme={theme} style={fadeIn}>
      {showModal && renderModal()}
      <ProfileContainer theme={theme}>
        <ProfileCard
          theme={theme}
          onClick={() => {
            broken ? setFlipCard("lvlUp") : setFlipCard("flip");
            setLevelUp(levelUp + 1);
            setTimeout(() => {
              setFlipCard("");
            }, 1000);
          }}
          className={flipCard === "" ? "bounce" : flipCard}
          style={fadeIn_card}
        >
          <header>
            <p>LV. {broken ? levelUp : renderLevel()}</p>
            <p>ALL ROUNDER</p>
          </header>
          <Crown lvl={broken ? null : levelUp}>{renderCrown()}</Crown>
          <img src={portrait} alt="author" />
          <h1>FRONT END DEVELOPER</h1>
          <p>READY FOR ANYTHING</p>
          <div>
            <h2>Top Skills</h2>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>React Native</p>
              <p>Node JS</p>
              <p>Next JS</p>
            </div>
          </div>
        </ProfileCard>
        <SummaryContainer broken={broken} theme={theme}>
          <h2>A BIT ABOUT ME</h2>
          <p>
            I’ve always admired programmers since I noticed that almost
            everything I use in my daily life was created by them. As a 90’s
            kid, I grew up playing countless games and advents of new
            technologies which eventually caught my interest in programming.
            Doing something productive rather than just playing games with a
            computer was enough reason for me to dive in. I am a very curious
            person and eager to know how things around me work fundamentally.
            Being a developer is a fun adventure for me!
          </p>
        </SummaryContainer>
      </ProfileContainer>
      <Divider broken={broken} className={broken && "rotate"} theme={theme} />
      <SkillContainer theme={theme}>
        <section>
          <div>
            <h2 className={broken ? "shake" : ""}>Confident Skills</h2>
            <div>
              <div className={broken ? "pop" : ""}>
                <img alt="html icon" src={html} />
                <p>HTML</p>
              </div>
              <div>
                <img alt="css icon" src={cssIcon} />
                <p>CSS</p>
              </div>
              <div>
                <img alt="javascript icon" src={javascript} />
                <p>Javascript</p>
              </div>
              <div className={broken ? "fly6" : ""}>
                <img alt="react icon" src={react} />
                <p>React</p>
              </div>
              <div>
                <img alt="nextjs icon" src={nextjs} />
                <p>Next JS</p>
              </div>
              <div>
                <img alt="reactnative icon" src={reactnative} />
                <p>React Native</p>
              </div>
              <div className={broken ? "pop" : ""}>
                <img alt="expo icon" src={expo} />
                <p>Expo</p>
              </div>
              <div className={broken ? "fly3" : ""}>
                <img alt="nodejs icon" src={nodejs} />
                <p>Node JS</p>
              </div>
              <div className={broken ? "fly7" : ""}>
                <img alt="bootstrap icon" src={bootstrap} />
                <p>Bootstrap</p>
              </div>
              <div>
                <img alt="materialdesign icon" src={materialdesign} />
                <p>Material Design</p>
              </div>
              <div className={broken ? "fly3" : ""}>
                <GithubIcon alt="github icon" src={github} name="github" />
                <p>Github</p>
              </div>
              <div>
                <img alt="mongodb icon" src={mongodb} />
                <p>Mongo DB</p>
              </div>
              <div>
                <img alt="firebase icon" src={firebase} />
                <p>Firebase</p>
              </div>
              <div className={broken ? "fly8" : ""}>
                <img alt="heroku icon" src={heroku} />
                <p>Heroku</p>
              </div>
              <div>
                <img alt="puppeteer icon" src={puppeteer} />
                <p>Puppeteer</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={broken ? "pop" : ""}>
            <h2 className={broken ? "shake" : ""}>Have experienced</h2>
            <div>
              <div>
                <img
                  className={broken ? "fly4" : ""}
                  alt="express icon"
                  src={express}
                />
                <p>Express</p>
              </div>
              <div>
                <img alt="oauth icon" src={oauth} />
                <p>Oauth</p>
              </div>
              <div>
                <img alt="passport icon" src={passport} />
                <p>Passport</p>
              </div>
              <div>
                <img alt="jest icon" src={jest} />
                <p>Jest</p>
              </div>
              <div>
                <img alt="cucumber icon" src={cucumber} />
                <p>Cucumber</p>
              </div>
              <div className={broken ? "fly3" : ""}>
                <img alt="semanticui icon" src={semanticui} />
                <p>Semantic UI</p>
              </div>
              <div className={broken ? "fly4" : ""}>
                <img alt="typescript icon" src={typescript} />
                <p>Typescript</p>
              </div>
              <div>
                <img alt="angular icon" src={angular} />
                <p>Angular</p>
              </div>
              <div className={broken ? "fly5" : ""}>
                <img alt="aws icon" src={aws} />
                <p>AWS</p>
              </div>
              <div>
                <img alt="flutter icon" src={flutter} />
                <p>Flutter</p>
              </div>
              <div>
                <img alt="jquery icon" src={jquery} />
                <p>Jquery</p>
              </div>
              <div className={broken ? "fly3" : ""}>
                <img alt="mysql icon" src={mysql} />
                <p>MySQL</p>
              </div>
              <div>
                <img alt="vue icon" src={vue} />
                <p>Vue</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className={broken ? "fly3" : ""}>Currently improving</h2>
            <div>
              <div className={broken ? "fly9" : ""}>
                <img alt="flutter icon" src={flutter} />
                <p>Flutter</p>
              </div>
              <div>
                <img alt="mysql icon" src={mysql} />
                <p>MySQL</p>
              </div>
              <div>
                <img alt="nodejs icon" src={nodejs} />
                <p>Node JS</p>
              </div>
              <div className={broken ? "fly9" : ""}>
                <img alt="express icon" src={express} />
                <p>Express</p>
              </div>
              <div className={broken ? "fly5" : ""}>
                <img alt="oauth icon" src={oauth} />
                <p>Oauth</p>
              </div>
              <div>
                <img alt="passport icon" src={passport} />
                <p>Passport</p>
              </div>
              <div>
                <img alt="typescript icon" src={typescript} />
                <p>Typescript</p>
              </div>
            </div>
          </div>
        </section>
      </SkillContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled(animated.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-left: 2vw;
  background-color: ${(props) => props.theme.backgroundColor};
  > section {
    width: 100%;
    padding: 0 5rem;
  }
`;

const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ProfileCard = styled(animated.div)`
  font-family: "Exo", sans-serif;
  width: 25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 8px 10px 8px 1px black;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  border: 5px solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  z-index: 200;
  filter: ${(props) =>
    props.theme && `drop-shadow(${props.theme.abouCardShadow})`};

  > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    align-items: center;
    z-index: 400;

    > p:nth-child(1) {
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
    }
    > p:nth-child(2) {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  > h1 {
    font-size: 2rem;
    margin: 0;
    z-index: 200;
  }

  > img {
    width: 18rem;
    border-radius: 50%;
    align-self: center;
    opacity: 0.9;
    z-index: 200;
  }

  > p {
    font-size: 1.6rem;
    margin: 0;
    z-index: 200;
  }

  > div {
    z-index: 400;
    > h2 {
      font-size: 1.2rem;
      margin-top: 2rem;
      z-index: 200;
    }
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.5rem;
      margin-bottom: 1rem;
      z-index: 200;

      > p {
        margin: 0;
        z-index: 400;
      }
    }
  }
`;

const SummaryContainer = styled.section`
  margin-top: 5rem;
  font-size: ${(props) => (props.broken ? "1px;" : "1.2rem")};
  color: ${(props) => {
    if (props.broken) {
      return "green";
    } else if (props.theme) {
      return props.theme.normalFontColor;
    } else {
      return "black";
    }
  }};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  > h2 {
    margin: 0 0 2rem 0;
    text-decoration: underline;
    font-family: "Luckiest Guy", cursive;
    color: ${(props) => {
      if (props.broken) {
        return "purple";
      } else if (props.theme) {
        return props.theme.normalFontColor;
      } else {
        return "black";
      }
    }};
    font-size: ${(props) => (props.broken ? "10rem" : "1.2rem")};
    position: ${(props) => (props.broken ? "fixed" : "relative")};
    transform: perspective(1000px)
      ${(props) => (props.broken ? "rotateX(-60deg)" : "")};
  }

  > p {
    text-shadow: ${(props) =>
      props.theme.name === "dark" && `${props.theme.textShadow}`};
  }
`;

const SkillContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.normalFontColor};

  > section:nth-child(1) {
    width: 100%;
    text-align: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        font-size: 3rem;
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 2px;
        word-spacing: 0.5rem;
      }

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 1rem 0.25rem;
        font-size: 1rem;
        margin-bottom: 3rem;

        > div {
          > img {
            width: 5rem;
            padding: 0.5rem;
            filter: ${(props) => `drop-shadow(${props.theme.dropShadow})`};
          }
          > p {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            text-shadow: ${(props) =>
              props.theme.name === "dark" && `${props.theme.textShadow}`};
          }
        }
      }
    }
  }

  > section:nth-child(2) {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      text-align: center;

      > h2 {
        font-size: 2rem;
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 2px;
        word-spacing: 0.5rem;
      }

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem 2rem;
        font-size: 1rem;

        > div {
          > img {
            width: 3rem;
            filter: ${(props) => `drop-shadow(${props.theme.dropShadow})`};
          }
          > p {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            text-shadow: ${(props) =>
              props.theme.name === "dark" && `${props.theme.textShadow}`};
          }
        }
      }
    }
  }
`;

const Divider = styled.div`
  width: ${(props) => (props.broken ? "30px" : "5px")};
  height: ${(props) => (props.broken ? "50vh" : "85vh")};
  background-color: rgba(0, 0, 0, 0.2);
  align-self: center;
  position: ${(props) => (props.broken ? "fixed" : "relative")};
`;

const Crown = styled.div`
  position: absolute;
  z-index: 300;
`;

const Level2Crown = styled.img`
  position: absolute;
  z-index: 100;
  top: -30vh;
  left: 3.5vw;
  width: 15rem;
`;
const Level3Crown = styled.img`
  position: absolute;
  width: 14rem;
  top: -23vh;
  left: 4vw;
`;

const GoldBrooch = styled.img`
  position: absolute;
  left: 0;
  top: -20vh;
  width: 25rem;
`;

const GoldFrame = styled.img`
  position: absolute;
  z-index: 100;
  top: -38vh;
  left: -6vw;
  width: 43rem;
`;
const GoldBar = styled.img`
  position: absolute;
  z-index: 101;
  top: 0;
  left: -10vw;
  width: 20rem;
`;
const GoldRod = styled.img`
  position: absolute;
  z-index: 101;
  top: -40vh;
  left: 10vw;
  width: 20rem;
`;
const GoldChest = styled.img`
  position: absolute;
  z-index: 101;
  top: 5vh;
  left: 10vw;
  width: 30rem;
`;
const GoldCastle = styled.img`
  position: absolute;
  z-index: 1;
  top: -50vh;
  left: 0vw;
  width: 100rem;
`;

const ModalBackDrop = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  z-index: 2000;
  color: white;
  width: 45rem;
  height: 25rem;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 3rem;
  padding: 2rem;
`;

const GithubIcon = styled.img`
  border-radius: ${(props) => props.name === "github" && "5rem"};
`;
