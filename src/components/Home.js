import { useEffect, useRef } from "react";
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

export default function Home({ theme, broken }) {
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
    };
  }, []);

  const fadeIn_rest = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    delay: 4500,
    from: { opacity: 1 },
  });

  const fadeIn_firstName = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    delay: 500,
    from: { opacity: 1 },
  });

  const fadeIn_lastName = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    delay: 1500,
    from: { opacity: 1 },
  });

  const fadeIn_title = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    delay: 2500,
    from: { opacity: 1 },
  });

  return (
    <HomeContainer>
      <TypographyContainer style={fadeIn_rest}>
        <Typography theme={theme} broken={broken} />
      </TypographyContainer>
      <NameContainer theme={theme}>
        <div>
          <FirstName style={fadeIn_firstName}>Isaac</FirstName>
          <LastName style={fadeIn_lastName}>Choi</LastName>
        </div>
        <Phone
          src={phoneImg}
          alt="phone illustration"
          style={fadeIn_rest}
          className={broken ? "shake" : ""}
        />
        <PhoneScreen
          style={fadeIn_rest}
          className={broken ? "shakeScreen" : ""}
        >
          <AppBar>
            <section>{<GetTime />}</section>
            <section>
              <FontAwesomeIcon icon={faSignal} />
              <FontAwesomeIcon icon={faWifi} />
              <FontAwesomeIcon icon={faBatteryFull} />
            </section>
          </AppBar>
          <PhoneContent>
            <h1>Isaac Choi Portfolio</h1>
            <span>Welcome to my website!</span>
            <span>I am a front end developer based in LA</span>
            <span>I hope my webiste provides great user experience!</span>
          </PhoneContent>
        </PhoneScreen>
        <MyTitle theme={theme} style={fadeIn_title}>
          <h1>Front End Developer</h1>
        </MyTitle>
      </NameContainer>
      <TypingContainer style={fadeIn_rest} theme={theme}>
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
  padding: 0 0 0 10rem;
  display: flex;
  user-select: none;
`;

const TypingContainer = styled(animated.div)`
  position: fixed;
  opacity: 0.7;
  left: 55vw;
  top: 5vh;
  width: 40vw;
  height: fit-content;

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
  flex-direction: column;
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.normalFontColor : "black"};
  font-family: "Chango", cursive;
  > div {
    display: flex;
    margin-bottom: 5rem;
  }

  > img {
    position: fixed;
    top: 35vh;
    left: 0;
    width: 40vw;
  }
`;
const FirstName = styled(animated.h1)`
  font-size: 6vw;
  margin-right: 2vw;
`;
const LastName = styled(animated.h1)`
  font-size: 6vw;
`;
const MyTitle = styled(animated.div)`
  height: 100%;
  margin: 0 0 1rem 0;
  align-items: center;
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.normalFontColor : "black"};
  > h1 {
    text-align: right;
    font-size: 7.5vw;
    margin: 20vh 14vw 0 0;
  }
`;

const PhoneScreen = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 29.8vh;
  left: 23.2vw;
  transform: perspective(1000px) rotateX(28deg) rotateY(-6deg) rotateZ(6.5deg);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* background-color: green; */
  width: 14.5vw;
  height: 61vh;
`;
const AppBar = styled(animated.header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5.5vh;
  color: black;
  font-size: 0.8vw;
  }
  > section:nth-child(2) {
    margin-right: -0.2vw;
    >* {
      margin-right: 0.2vw;
    }
  }
`;
const PhoneContent = styled(animated.div)`
  transform: perspective(1000px) rotateX(-5deg) rotateY(0deg) rotateZ(0deg);
  width: 90%;
  display: flex;
  flex-direction: column;
  color: black;
  > h1 {
    font-size: 2vw;
  }
  > span {
    font-size: 1.1vw;
    margin-bottom: 1vh;
  }
`;

const Phone = styled(animated.img)``;
const TypographyContainer = styled(animated.div)``;
