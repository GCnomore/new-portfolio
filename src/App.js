import SideBarMenu from "./components/SideBarMenu";
import Home from "./components/Home";
import About from "./components/About";
import ProjectSlide from "./components/ProjectsSlide";
import ProjectTheater from "./components/ProjectsTheater";
import theme from "./theme";
import { useEffect, useRef, useState } from "react";

import styled from "styled-components/macro";
import "./animation.css";

function App() {
  const [page, setPage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [broken, setBroken] = useState(false);
  const [light, setLight] = useState(0);
  const [screenWidth, setScreenWidth] = useState("normal");
  const easterEggCode = useRef([]);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1118 && window.innerWidth > 840) {
      setScreenWidth("small");
    } else if (window.innerWidth <= 840) {
      setScreenWidth("mobile");
    } else {
      setScreenWidth("normal");
    }
  });

  if (light === 9) {
    setLight(10);
    setDarkMode(true);
  } else if (light >= 11) {
    setDarkMode(false);
    setLight(0);
  }

  useEffect(() => {
    if (window.innerWidth <= 1118 && window.innerWidth > 840) {
      setScreenWidth("small");
    } else if (window.innerWidth <= 840) {
      setScreenWidth("mobile");
    } else {
      setScreenWidth("normal");
    }
    window.addEventListener("keydown", (e) => {
      easterEggCode.current.push(e.key);
      if (e.key === "Escape") {
        easterEggCode.current = [];
        setBroken(false);
      }
      if (easterEggCode.current.join("").includes("break")) {
        setBroken(true);
      }
    });
  }, []);

  return (
    <AppContainer
      className={darkMode ? "lightsOnOff" : ""}
      screenWidth={screenWidth}
    >
      <SideBar broken={broken} screenWidth={screenWidth}>
        <SideBarMenu
          setPage={setPage}
          setDarkMode={setDarkMode}
          broken={broken}
          setLight={setLight}
          light={light}
          screenWidth={screenWidth}
        />
      </SideBar>
      {page === "theater" ? (
        <>
          <ProjectTheater
            broken={broken}
            theme={darkMode ? theme.dark : theme.normal}
            screenWidth={screenWidth}
          />
        </>
      ) : (
        <ContentsContainer
          theme={darkMode ? theme.dark : theme.normal}
          screenWidth={screenWidth}
        >
          {page === "" && (
            <>
              <Home
                broken={broken}
                theme={darkMode ? theme.dark : theme.normal}
                screenWidth={screenWidth}
              />
            </>
          )}
          {page === "About" && (
            <>
              <About
                broken={broken}
                theme={darkMode ? theme.dark : theme.normal}
                screenWidth={screenWidth}
              />
            </>
          )}
          {page === "Projects" && (
            <>
              <ProjectSlide
                setPage={setPage}
                broken={broken}
                setBroken={setBroken}
                theme={darkMode ? theme.dark : theme.normal}
                screenWidth={screenWidth}
              />
            </>
          )}
        </ContentsContainer>
      )}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "column"
      : "row"};
`;

const SideBar = styled.aside`
  width: ${(props) => {
    if (props.screenWidth === "small" || props.screenWidth === "mobile") {
      if (props.broken) {
        return "80%";
      }
      return "100%";
    } else if (props.broken) {
      return "14rem";
    } else {
      return "4.8rem";
    }
  }};
  height: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "4rem"
      : "100%"};
  position: fixed;
  top: ${(props) => (props.broken ? "10rem" : "")};
  z-index: 1005;
  left: ${(props) => (props.broken ? "10vw;" : "0")};
  transform: perspective(1000)
    ${(props) => (props.broken ? "rotateX(20deg) rotateZ(10deg)" : "")};
`;

const ContentsContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.backgroundColor};
`;
