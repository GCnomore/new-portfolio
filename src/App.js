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
  const easterEggCode = useRef([]);
  const [light, setLight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth <= 1118 ? "true" : "false"
  );

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth <= 1118 ? "true" : "false");
  });

  if (light === 9) {
    setLight(10);
    setDarkMode(true);
  } else if (light >= 11) {
    setDarkMode(false);
    setLight(0);
  }

  useEffect(() => {
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
    <AppContainer className={darkMode ? "lightsOnOff" : ""}>
      <SideBar broken={broken} screenWidth={screenWidth}>
        <SideBarMenu
          setPage={setPage}
          setDarkMode={setDarkMode}
          broken={broken}
          setLight={setLight}
          light={light}
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
`;

const SideBar = styled.div`
  width: ${(props) => (props.broken ? "14rem;" : "4.8rem")};
  height: 100vh;
  position: fixed;
  z-index: 1005;
  left: ${(props) => (props.broken ? "10vw;" : "0")};
  transform: perspective(1000)
    ${(props) => (props.broken ? "rotateX(20deg) rotateZ(10deg)" : "")};
`;

const ContentsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor};
`;
