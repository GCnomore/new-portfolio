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

export default function About({ broken, theme, screenWidth }) {
  const [flipCard, setFlipCard] = useState("");
  const [levelUp, setLevelUp] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const fadeIn = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
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
            <Level2Crown
              screenWidth={screenWidth}
              src={lvl_2_crown}
              alt="gold crown"
            />
          </>
        );

      if (levelUp === 2)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
          </>
        );
      if (levelUp === 3)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
          </>
        );
      if (levelUp === 4)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
            <GoldFrame
              screenWidth={screenWidth}
              src={goldFrame}
              alt="gold frame"
            />
          </>
        );
      if (levelUp === 5)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
            <GoldFrame
              screenWidth={screenWidth}
              src={goldFrame}
              alt="gold frame"
            />
            <GoldRod screenWidth={screenWidth} src={goldRod} alt="gold rod" />
          </>
        );
      if (levelUp === 6)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
            <GoldFrame
              screenWidth={screenWidth}
              src={goldFrame}
              alt="gold frame"
            />
            <GoldRod screenWidth={screenWidth} src={goldRod} alt="gold rod" />
            <GoldBar screenWidth={screenWidth} src={goldBar} alt="gold bar" />
          </>
        );
      if (levelUp === 7)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
            <GoldFrame
              screenWidth={screenWidth}
              src={goldFrame}
              alt="gold frame"
            />
            <GoldRod screenWidth={screenWidth} src={goldRod} alt="gold rod" />
            <GoldBar screenWidth={screenWidth} src={goldBar} alt="gold bar" />
            <GoldChest
              screenWidth={screenWidth}
              src={goldChest}
              alt="gold chest"
            />
          </>
        );
      if (levelUp === 8)
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
            <GoldFrame
              screenWidth={screenWidth}
              src={goldFrame}
              alt="gold frame"
            />
            <GoldRod screenWidth={screenWidth} src={goldRod} alt="gold rod" />
            <GoldBar screenWidth={screenWidth} src={goldBar} alt="gold bar" />
            <GoldChest
              screenWidth={screenWidth}
              src={goldChest}
              alt="gold chest"
            />
            <GoldCastle
              screenWidth={screenWidth}
              src={goldCastle}
              alt="gold castle"
            />
          </>
        );
    }

    if (!broken) {
      if (levelUp >= 6) {
        return (
          <>
            <Level3Crown
              screenWidth={screenWidth}
              src={lvl_3_crown}
              alt="gold crown"
            />
            <GoldBrooch
              screenWidth={screenWidth}
              src={lvl_3_brooch}
              alt="gold brooch"
            />
          </>
        );
      } else if (levelUp >= 3) {
        return (
          <>
            <Level2Crown
              screenWidth={screenWidth}
              src={lvl_2_crown}
              alt="gold crown"
            />
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
              level 3 for now!!
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
    <AboutContainer theme={theme} style={fadeIn} screenWidth={screenWidth}>
      <ProfileContainer theme={theme} screenWidth={screenWidth}>
        <Crown
          className={flipCard === "" ? "bounce" : flipCard}
          lvl={broken ? null : levelUp}
          onClick={() => {
            broken ? setFlipCard("lvlUp") : setFlipCard("flip");
            setLevelUp(levelUp + 1);
            setTimeout(() => {
              setFlipCard("");
            }, 1000);
          }}
        >
          <div>{renderCrown()}</div>
        </Crown>
        <ProfileCard
          screenWidth={screenWidth}
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
        <SummaryContainer
          broken={broken}
          theme={theme}
          screenWidth={screenWidth}
        >
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
      <Divider
        broken={broken}
        className={broken && "rotate"}
        theme={theme}
        screenWidth={screenWidth}
      />
      <SkillContainer theme={theme} screenWidth={screenWidth}>
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
                <img alt="mongodb icon" src={mongodb} />
                <p>MongoDB</p>
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
      {showModal && renderModal()}
    </AboutContainer>
  );
}

const AboutContainer = styled(animated.main)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "column"
      : "row"};
  margin-left: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? ""
      : "2vw"};
  background-color: ${(props) => props.theme.backgroundColor};

  > section:nth-child(3) {
    width: 100%;
  }
`;

const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "100%"
      : "65%"};
  padding: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "5rem 0"
      : "3rem 5rem"};
`;

const ProfileCard = styled(animated.div)`
  font-family: "Exo", sans-serif;
  width: fit-content;
  padding: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "0.5rem 0"
      : "1rem 0"};
  margin: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "0 7vw"
      : ""};
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
    padding: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0.1rem 0.5rem"
        : "0.5rem 1rem"};
    align-items: center;
    z-index: 400;

    > p:nth-child(1) {
      margin: 0;
      font-size: ${(props) => {
        if (props.screenWidth === "small") {
          return "2vw";
        } else if (props.screenWidth === "mobile") {
          return "1.3rem";
        } else {
          return "1.2rem";
        }
      }};
      font-weight: 600;
    }

    > p:nth-child(2) {
      margin: 0;
      font-size: ${(props) => {
        if (props.screenWidth === "small") {
          return "1.5vw";
        } else if (props.screenWidth === "mobile") {
          return "1rem";
        } else {
          return "1.1rem";
        }
      }};
      font-weight: 600;
    }
  }

  > h1 {
    font-size: ${(props) => {
      if (props.screenWidth === "small") {
        return "2.5vw";
      } else if (props.screenWidth === "mobile") {
        return "1.3rem";
      } else {
        return "1.2rem";
      }
    }};

    margin: 0 1.5rem;
    z-index: 200;
  }

  > img {
    width: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "25vw"
        : "13vw"};
    min-width: 8rem;
    border-radius: 50%;
    align-self: center;
    opacity: 0.9;
    z-index: 200;
    padding: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0 2rem"
        : "0 4rem"};
  }

  > p {
    font-size: ${(props) => {
      if (props.screenWidth === "small") {
        return "2vw";
      } else if (props.screenWidth === "mobile") {
        return "1rem";
      } else {
        return "1.1rem";
      }
    }};

    margin: 0;
    z-index: 200;
  }

  > div {
    z-index: 400;
    > h2 {
      font-size: ${(props) => {
        if (props.screenWidth === "small") {
          return "1.8vw";
        } else if (props.screenWidth === "mobile") {
          return "1.2rem";
        } else {
          return "1.1rem";
        }
      }};

      margin-top: 2rem;
      z-index: 200;
    }
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.5rem;
      margin-bottom: 1rem;
      z-index: 200;
      font-size: ${(props) => {
        if (props.screenWidth === "small") {
          return "1.5vw";
        } else if (props.screenWidth === "mobile") {
          return "1rem";
        } else {
          return "1rem";
        }
      }};
      > p {
        margin: 0;
        z-index: 400;
      }
    }
  }
`;

const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
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
    font-size: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0.9rem"
        : "1rem"};
    width: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "70vw"
        : "35vw"};
  }
`;

const SkillContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.normalFontColor};
  padding: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "3rem 0"
      : "1rem"};

  > section:nth-child(1) {
    width: 100%;
    text-align: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        font-size: ${(props) =>
          props.screenWidth === "mobile" ? "4vw" : "2vw"};
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 2px;
        word-spacing: 0.5rem;
      }

      > div {
        display: grid;
        grid-template-columns: ${(props) =>
          props.screenWidth === "small" || props.screenWidth === "mobile"
            ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr"
            : "1fr 1fr 1fr 1fr 1fr"};
        justify-content: center;
        align-items: center;
        grid-gap: ${(props) =>
          props.screenWidth === "small" || props.screenWidth === "mobile"
            ? "0"
            : "1rem 0.25rem"};
        margin-bottom: 3rem;

        > div {
          > img {
            width: ${(props) =>
              props.screenWidth === "small" || props.screenWidth === "mobile"
                ? "7vw"
                : "3.5vw"};
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
            font-size: ${(props) =>
              props.screenWidth === "mobile" ? "2.5vw" : "1rem"};
          }
        }
      }
    }
  }

  > section:nth-child(2) {
    display: flex;
    justify-content: space-evenly;

    > div {
      display: flex;
      flex-direction: column;
      text-align: center;

      > h2 {
        font-size: ${(props) =>
          props.screenWidth === "mobile" ? "3vw" : "1.45vw"};
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 2px;
        word-spacing: 0.5rem;
      }

      > div {
        display: grid;
        grid-template-columns: ${(props) => {
          if (props.screenWidth === "mobile") {
            return "1fr 1fr 1fr";
          } else if (props.screenWidth === "small") {
            return "1fr 1fr 1fr 1fr 1fr";
          } else {
            return "1fr 1fr 1fr 1fr";
          }
        }};
        grid-gap: ${(props) =>
          props.screenWidth === "small" || props.screenWidth === "mobile"
            ? "0.8vw 1vw"
            : "0.8vw 0.5vw"};
        font-size: 1rem;

        > div {
          > img {
            width: ${(props) => {
              if (props.screenWidth === "mobile") {
                return "6vw";
              } else if (props.screenWidth === "small") {
                return "4vw";
              } else {
                return "2.5vw";
              }
            }};
            filter: ${(props) => `drop-shadow(${props.theme.dropShadow})`};
            margin-bottom: 0.5rem;
          }
          > p {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            text-shadow: ${(props) =>
              props.theme.name === "dark" && `${props.theme.textShadow}`};
            font-size: ${(props) =>
              props.screenWidth === "mobile" ? "2.25vw" : "0.9rem"};
          }
        }
      }
    }
  }
`;

const Divider = styled.div`
  width: ${(props) =>
    ((props.broken ? "30px" : "2px") && props.screenWidth === "small") ||
    props.screenWidth === "mobile"
      ? "60%"
      : "2px"};
  height: ${(props) =>
    ((props.broken ? "50vh" : "85vh") && props.screenWidth === "small") ||
    props.screenWidth === "mobile"
      ? "2px"
      : "85vh"};
  background-color: ${(props) =>
    props.theme.name === "dark" ? "white" : "rgba(0, 0, 0, 0.2)"};
  border-radius: 10rem;
  box-shadow: ${(props) =>
    props.theme.name === "dark"
      ? "0px 0px 8px 1px rgba(255, 255, 255, 0.7)"
      : ""};
  align-self: center;
  position: ${(props) => (props.broken ? "fixed" : "relative")};
`;

const Crown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 250;
  cursor: pointer;
  user-select: none;
  > div {
    position: absolute;
    top: -4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Level2Crown = styled.img`
  z-index: 100;
  margin-top: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "1vw"
      : "2vw"};
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "20vw"
      : "12vw"};
  min-width: 8rem;
`;
const Level3Crown = styled.img`
  position: absolute;
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "18vw"
      : "10.5vw"};
  margin-top: 6vw;
  min-width: 8rem;
`;

const GoldBrooch = styled.img`
  position: absolute;
  margin-top: ${(props) => (props.screenWidth === "mobile" ? "4rem" : "7.5vw")};
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "32vw"
      : "18vw"};
  min-width: 11rem;
`;

const GoldFrame = styled.img`
  z-index: 100;
  margin-left: 1.5rem;
  margin-top: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "-5vw"
      : "-1vw"};
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "55.5vw"
      : "31vw"};
  align-self: right;
`;
const GoldBar = styled.img`
  position: absolute;
  z-index: 101;
  top: 20vw;
  left: -5vw;
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "25vw"
      : "14.5vw"};
`;
const GoldRod = styled.img`
  position: absolute;
  z-index: 101;
  top: 2vw;
  left: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "38vw"
      : "20vw"};
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "20vw"
      : "15vw"};
`;
const GoldChest = styled.img`
  position: absolute;
  z-index: 101;
  top: 20vw;
  left: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "45vw"
      : "20vw"};
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "30vw"
      : "23vw"};
`;
const GoldCastle = styled.img`
  position: absolute;
  z-index: -1000;
  top: -4vw;
  left: 10vw;
  width: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "100vw"
      : "80vw"};
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
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 3rem;
  padding: 2rem;
`;

const GithubIcon = styled.img`
  border-radius: ${(props) => props.name === "github" && "5rem"};
`;
