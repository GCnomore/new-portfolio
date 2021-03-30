import SideBarMenu from "./components/SideBarMenu";
import Home from "./components/Home";
import About from "./components/About";
import ProjectSlide from "./components/ProjectsSlide";
import ProjectTheater from "./components/ProjectsTheater";
import theme from "./theme";
import { useEffect, useRef, useState } from "react";

import styled from "styled-components/macro";
import { useSpring, animated } from "react-spring";
import "./animation.css";

function App() {
  const [page, setPage] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [broken, setBroken] = useState(false);
  const easterEggCode = useRef([]);

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
      <SideBar broken={broken}>
        <SideBarMenu
          setPage={setPage}
          setDarkMode={setDarkMode}
          broken={broken}
        />
      </SideBar>
      {page === "theater" ? (
        <>
          <ProjectTheater
            broken={broken}
            theme={darkMode ? theme.dark : theme.normal}
          />
        </>
      ) : (
        <ContentsContainer theme={darkMode ? theme.dark : theme.normal}>
          {page === "" && (
            <>
              <Home
                broken={broken}
                theme={darkMode ? theme.dark : theme.normal}
              />
            </>
          )}
          {page === "About" && (
            <>
              <About
                broken={broken}
                theme={darkMode ? theme.dark : theme.normal}
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
  height: 10vh;
  width: 100%;
`;

const SideBar = styled.div`
  width: ${(props) => (props.broken ? "10vw;" : "3.5vw")};
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
