import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import GetTime from "./GetTime";
import Typography from "./Typography";
import styled from "styled-components/macro";
import javascript from "../assets/icons/javascript.webp";
import phoneImg from "../assets/undraw_my_app_re_gxtj.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faSignal,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import "../animation.css";

export default function Home({ theme, broken, screenWidth }) {
  const typing = useRef(false);
  const txt = useRef("");
  const deleteWord = useRef(false);
  const wordIndex = useRef(0);

  const typeWords = () => {
    const words = broken
      ? [
          "Ad sunt velit $^()$eiusmod irure sin---#5**-t. Laboris ea cillum of()(@@@ficia enim esse inci#%(_#''#_@+$=diduMollit exercita$7^#%@#$@6tion nulla reprehenderit 47$%$()ad aliquip esse ut.Ad sunt velit ei#%#%FDusm@%%(L:D>DFJood irure sint. Lab7#oris ea cillum o7$Wfficia enim esse incididunt aliqua nosiqua nostrud ip$^%sum adipisi#^P%(JDJ)@!cing culpa id es37%%%%%se ipsum. Mollit exercita$7^#%@#$@6tion nulla reprehenderit 47$%$()ad aliquip esse ut.Ad sunt velit ei#%#%FDusm@%%(L:D>DFJood irure sint. Lab7#oris ea cillum o7$Wfficia enim esse incididunt aliqua nosMollit exercita$7^#%@#$@6tion nulla reprehenderit 47$%$()ad aliquip esse ut.Ad sunt velit ei#%#%FDusm@%%(L:D>DFJood irure sint. Lab7#oris ea cillum o7$Wfficia enim esse incididunt aliqua nost!!!GL$@6tion nulla reprehenderit 47$%$()ad aliquip esse ut.Ad sunt velit ei#%#%FDusm@%%(L:D>DFJood irure sint. Lab7$@6tion nulla reprehenderit 47$%$()ad aliquip esse ut.Ad sunt velit ei#%#%FDusm@%%(L:D>DFJood irure sint. Lab7#oris ea cillum o7$Wfficia enim esse incididunt aliqua nost!!!GL#oris ea cillum o7$Wfficia enim esse incididunt aliqua nost!!!GLDJ(S!1rud ipsum adipi%#)%(TELJ0sicing ETE#$#culpa id esse ipsum. Mollit exercitat)@(&@#ion nulla reprehenderit ad aliquip esse ut.",
        ]
      : [
          "const sayHello = () => {</br> &nbsp&nbsp console.log('Hello world!);</br>}</br></br>sayHello();",
          "import axios from 'axios';</br>import { useState, useEffect } from 'react';</br></br>const [portfolio, setPortfolio] = useState();</br></br>async function getCoolWebsite() {</br>&nbsp const result = await axios.get('www.api.superawesomewebsite.com/data?id=isaac');</br>&nbsp setPortfolio(result.data);</br>}</br></br>useEffect(()=>{</br>&nbsp getCoolWebsite();</br>}, [])",
        ];
    let wait = 4000;

    const currentIndex = wordIndex.current % words.length;
    const fullText = words[currentIndex];
    const txtElement = document.querySelector(".txtElement");

    if (deleteWord.current) {
      txt.current = fullText.substring(0, txt.current.length - 1);
    } else {
      txt.current = fullText.substring(0, txt.current.length + 1);
    }

    txtElement && (txtElement.innerHTML = txt.current);

    let speed = broken ? 10 : 50;

    if (deleteWord.current) {
      speed /= 5;
    }

    if (!deleteWord.current && txt.current === fullText) {
      speed = wait;
      deleteWord.current = true;
    } else if (deleteWord.current && txt.current === "") {
      deleteWord.current = false;
      wordIndex.current++;
      speed = 500;
    }

    setTimeout(() => {
      typing.current && typeWords();
    }, speed);
  };

  useEffect(() => {
    setTimeout(() => {
      typing.current = true;
      txt.current = "";
      deleteWord.current = false;
      wordIndex.current = 0;
      typing.current && typeWords();
    }, 5000);

    return () => {
      typing.current = false;
      clearTimeout(typeWords());
    };
  }, []);

  const fadeIn_rest = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    delay: 4500,
    from: { opacity: 0 },
  });

  const fadeIn_firstName = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    delay: 500,
    from: { opacity: 0 },
  });

  const fadeIn_lastName = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    delay: 1500,
    from: { opacity: 0 },
  });

  const fadeIn_title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    delay: 2500,
    from: { opacity: 0 },
  });

  return (
    <HomeContainer small={screenWidth}>
      <TypographyContainer style={fadeIn_rest} small={screenWidth}>
        <Typography theme={theme} broken={broken} />
      </TypographyContainer>
      <NameContainer theme={theme} small={screenWidth}>
        <div>
          <FirstName style={fadeIn_firstName}>Isaac</FirstName>
          <LastName style={fadeIn_lastName}>Choi</LastName>
        </div>
        <MyTitle theme={theme} style={fadeIn_title} small={screenWidth}>
          <h1>Front End Developer</h1>
        </MyTitle>
      </NameContainer>
      <PhoneContainer small={screenWidth}>
        <div>
          <Phone
            src={phoneImg}
            alt="phone illustration"
            style={fadeIn_rest}
            className={broken ? "shake" : ""}
            small={screenWidth}
          />
          <PhoneScreen
            style={fadeIn_rest}
            className={broken ? "shakeScreen" : ""}
            small={screenWidth}
          >
            <AppBar small={screenWidth}>
              <section>{<GetTime />}</section>
              <section>
                <FontAwesomeIcon icon={faSignal} />
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBatteryFull} />
              </section>
            </AppBar>
            <PhoneContent small={screenWidth}>
              <h1>Isaac Choi Portfolio</h1>
              <span>Welcome to my website!</span>
              <span>I am a front end developer based in LA</span>
              <span>I hope my webiste provides great user experience!</span>
            </PhoneContent>
          </PhoneScreen>
        </div>
      </PhoneContainer>
      <TypingContainer style={fadeIn_rest} theme={theme} small={screenWidth}>
        <header>
          <WindowMenu>
            <div></div>
            <div></div>
            <div></div>
          </WindowMenu>
          <WindowTab>
            <div>
              <img src={javascript} alt="javascript icon" />
            </div>
            <div>index.js</div>
          </WindowTab>
        </header>
        <TextContent>
          <LineNumber>
            <ol>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
            </ol>
          </LineNumber>
          <section className="txtElement">{txt.current}</section>
        </TextContent>
      </TypingContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.small === "true" ? "0" : "0 0 0 10rem")};
  display: flex;
  flex-direction: ${(props) => (props.small === "true" ? "column" : "row")};
  user-select: none;
`;

const TypingContainer = styled(animated.div)`
  position: fixed;
  opacity: 0.7;
  left: 55vw;
  top: 5vh;
  width: 40vw;
  height: fit-content;
  display: ${(props) => (props.small === "true" ? "none" : "block")};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  > header {
    display: flex;
    width: 40vw;
    height: 4vh;
    background-color: rgb(104, 98, 219, 0.7);
  }
`;

const WindowMenu = styled.section`
  display: flex;

  > div:nth-child(1) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem 0 0.5rem;
    background-color: rgba(183, 66, 66, 0.8);
  }
  > div:nth-child(2) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem 0 0.5rem;
    background-color: rgba(231, 186, 30, 1);
  }
  > div:nth-child(3) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem 0 0.5rem;
    background-color: rgba(84, 139, 17, 1);
  }
`;

const WindowTab = styled.section`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-left: 1rem;
  background-color: #2d2d2d;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0 1rem;
  height: 80%;

  > div:nth-child(1) > img {
    width: 1.5vw;
  }
  > div:nth-child(2) {
    font-size: 0.9vw;
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem;
  }
`;

const LineNumber = styled.section`
  > ol {
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 3rem 0;
    > li {
      list-style: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9vw;
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  height: 100%;
  background-color: #2d2d2d;

  color: rgba(255, 255, 255, 0.8);
  > section:nth-child(2) {
    padding-top: 1rem;
    word-spacing: 4px;
    letter-spacing: 2px;
    background-color: #2d2d2d;
    font-size: 0.8vw;
  }
`;

const NameContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: ${(props) => (props.small === "true" ? "center" : "")};
  align-items: ${(props) => (props.small === "true" ? "center" : "")};
  flex-direction: column;
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.normalFontColor : "black"};
  font-family: "Chango", cursive;
  margin-top: ${(props) => (props.small === "true" ? "4rem" : "")};
  > div {
    display: flex;
    margin-bottom: 5rem;
  }
`;
const FirstName = styled(animated.h1)`
  font-size: 6vw;
  margin: 3.5vw 2vw 0 -2vw;
`;
const LastName = styled(animated.h1)`
  font-size: 6vw;
`;
const MyTitle = styled(animated.div)`
  height: 100%;
  margin: 0 0 1rem 0;
  align-items: ${(props) => (props.small === "true" ? "" : "center")};
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.normalFontColor : "black"};
  display: ${(props) => (props.small === "true" ? "flex" : "block")};

  > h1 {
    text-align: ${(props) => (props.small === "true" ? "center" : "right")};
    font-size: 7.5vw;
    margin: ${(props) => (props.small === "true" ? "0" : "20vh 14vw 0 0")};
  }
`;

const PhoneContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.small === "true" ? "center" : "")};
  position: ${(props) => (props.small === "true" ? "" : "absolute")};
  left: ${(props) => (props.small === "true" ? "" : "0")};
  top: ${(props) => (props.small === "true" ? "" : "35vh")};

  > div {
    width: fit-content;
    display: flex;
    justify-content: right;
    position: absolute;
  }
`;

const Phone = styled(animated.img)`
  width: ${(props) => (props.small === "true" ? "50vw" : "40vw")};
`;

const PhoneScreen = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${(props) => (props.small === "true" ? "30vw" : "23.2vw")};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: ${(props) => (props.small === "true" ? "17vw" : "14.5vw")};
`;
const AppBar = styled(animated.header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: ${(props) =>
    props.small === "true" ? "1vh 0 1vh 2.4vw" : "2vh 0 0 2.4vw"};
  color: black;
  transform: perspective(1000px) rotateX(35deg) rotateY(-8deg) rotateZ(6deg);

  > section:nth-child(1) {
    font-size: ${(props) => (props.small === "true" ? "1.2vw" : "0.9vw")};
  }
  > section:nth-child(2) {
    margin-right: 1.5vw;
    font-size: ${(props) => (props.small === "true" ? "0.8vw" : "0.7vw")};
    > * {
      margin-right: 0.2vw;
    }
  }
`;
const PhoneContent = styled(animated.div)`
  transform: ${(props) =>
    props.small === "true"
      ? "rotateX(30deg) rotateY(-20deg) rotateZ(12.5deg)"
      : "rotateX(30deg) rotateY(-20deg) rotateZ(13.5deg)"};
  width: 90%;
  display: flex;
  flex-direction: column;
  color: black;
  margin: ${(props) =>
    props.small === "true" ? "0.5vh 0 0 0.6vw" : "2vh 0 0 0.6vw"};
  > h1 {
    font-size: ${(props) => (props.small === "true" ? "1.6vw" : "1.4vw")};
  }
  > span {
    font-size: ${(props) => (props.small === "true" ? "1.2vw" : "1vw")};
    margin-bottom: 0.7vh;
  }
`;

const TypographyContainer = styled(animated.div)`
  display: ${(props) => (props.small === "true" ? "none" : "block")};
`;
