import styled from "styled-components";
import "../animation.css";

export default function Typography({ theme, broken }) {
  return (
    <TypographyContainer theme={theme}>
      <div className={broken ? "fly5" : ""}>Javascript</div>
      <div>HTML</div>
      <div>CSS</div>
      <div>React</div>
      <div className={broken ? "fly3" : ""}>ReactNative</div>
      <div className={broken ? "fly4" : ""}>Linux</div>
      <div>UBUNTU</div>
      <div>EXPO</div>
      <div>GitHub</div>
      <div>NODE JS</div>
      <div>EXPRESS</div>
      <div>Bootstrap</div>
      <div className={broken ? "fly3" : ""}>NextJS</div>
      <div className={broken ? "fly4" : ""}>Styled-Components</div>
      <div>VSCode</div>
      <div>Flutter</div>
      <div>Dart</div>
      <div>Heroku</div>
      <div className={broken ? "fly3" : ""}>TypeScript</div>
      <div>Material Design</div>
      <div>Firebase</div>
      <div>Vue</div>
      <div>MongoDB</div>
      <div>Puppeteer</div>
      <div>Oauth</div>
      <div>Passport</div>
      <div className={broken ? "fly1" : ""}>Jquery</div>
    </TypographyContainer>
  );
}

const TypographyContainer = styled.div`
  position: absolute;
  font-weight: 600;
  z-index: 100;
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.normalFontColor : "black"};
  > div {
    opacity: 0.2;
    user-select: none;
    &:hover {
      opacity: 1;
      transition: 0.3s ease-in-out;
    }
  }
  // JS
  > div:nth-child(1) {
    font-size: 5vw;
    position: fixed;
    left: 10vw;
    top: 19vh;
  }
  // HTML
  > div:nth-child(2) {
    font-size: 2.2vw;
    position: fixed;
    left: 19vw;
    top: 31vh;
  }
  // CSS
  > div:nth-child(3) {
    font-size: 2.2vw;
    position: fixed;
    left: 14vw;
    top: 31vh;
  }
  // React
  > div:nth-child(4) {
    font-size: 4.2vw;
    position: fixed;
    transform: rotateZ(-90deg) skewX(180deg);
    left: 12vw;
    top: 43vh;
  }
  // React Native
  > div:nth-child(5) {
    font-size: 2.9vw;
    position: fixed;
    top: 35vh;
    left: 0vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Linux
  > div:nth-child(6) {
    font-size: 1.4vw;
    position: fixed;
    left: 11vw;
    top: 29vh;
  }
  // Ubuntu
  > div:nth-child(7) {
    font-size: 1.5vw;
    position: fixed;
    left: 10vw;
    top: 45vh;
  }
  // Expo
  > div:nth-child(8) {
    font-size: 1.4vw;
    position: fixed;
    left: 13vw;
    top: 40vh;
  }
  // Github
  > div:nth-child(9) {
    font-size: 0.8vw;
    position: fixed;
    top: 35vh;
    left: 12vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Node
  > div:nth-child(10) {
    font-size: 1.1vw;
    position: fixed;
    top: 37vh;
    left: 10vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Express
  > div:nth-child(11) {
    font-size: 1.4vw;
    position: fixed;
    top: 37vh;
    left: 8vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Bootstrap
  > div:nth-child(12) {
    font-size: 1.4vw;
    position: fixed;
    top: 37vh;
    left: 38vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Nextjs
  > div:nth-child(13) {
    font-size: 2.3vw;
    position: fixed;
    top: 37vh;
    left: 42vw;
  }
  // Styled-Comp
  > div:nth-child(14) {
    font-size: 2.2vw;
    position: fixed;
    top: 37vh;
    left: 43vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // VScode
  > div:nth-child(15) {
    font-size: 0.95vw;
    position: fixed;
    top: 23vh;
    left: 44vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Flutter
  > div:nth-child(16) {
    font-size: 1.4vw;
    position: fixed;
    top: 25vh;
    left: 37vw;
  }
  // Dart
  > div:nth-child(17) {
    font-size: 1.4vw;
    position: fixed;
    top: 34vh;
    left: 45vw;
  }
  // Heroku
  > div:nth-child(18) {
    font-size: 1.3vw;
    position: fixed;
    top: 21vh;
    left: 40vw;
  }
  // Typescript
  > div:nth-child(19) {
    font-size: 2.8vw;
    position: fixed;
    top: 26vh;
    left: 35vw;
  }
  // Material Design
  > div:nth-child(20) {
    font-size: 1.1vw;
    position: fixed;
    top: 23vh;
    left: 35vw;
  }
  // Firebase
  > div:nth-child(21) {
    font-size: 1.45vw;
    position: fixed;
    top: 23vh;
    left: 46.5vw;
  }
  // Vue
  > div:nth-child(22) {
    font-size: 1vw;
    position: fixed;
    top: 32vh;
    left: 48vw;
  }
  // MongoDB
  > div:nth-child(23) {
    font-size: 1.2rem;
    position: fixed;
    top: 32vh;
    left: 35vw;
  }
  // Puppeteer
  > div:nth-child(24) {
    font-size: 1.85vw;
    position: fixed;
    top: 40vh;
    left: 46vw;
    transform: rotateZ(-90deg) skewX(180deg);
  }
  // Oauth
  > div:nth-child(25) {
    font-size: 0.85vw;
    position: fixed;
    top: 26vh;
    left: 49vw;
  }
  // Passport
  > div:nth-child(26) {
    font-size: 2vw;
    position: fixed;
    top: 47vh;
    left: 40vw;
  }
  // Jquery
  > div:nth-child(27) {
    font-size: 3vw;
    position: fixed;
    top: 50vh;
    left: 42vw;
  }
`;
