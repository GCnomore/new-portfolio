import SideBarMenu from "./components/SideBarMenu";
import Home from "./components/Home";
import About from "./components/About";
import ProjectSlide from "./components/ProjectsSlide";
import ProjectTheater from "./components/ProjectsTheater";

import { useEffect, useRef, useState } from "react";

import styled from "styled-components/macro";

function App() {
  const [page, setPage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
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
    <AppContainer>
      <SideBar broken={broken}>
        <SideBarMenu
          setPage={setPage}
          setDarkMode={setDarkMode}
          broken={broken}
        />
      </SideBar>
      {page === "theater" ? (
        <>
          <ProjectTheater broken={broken} darkMode={darkMode} />
        </>
      ) : (
        <ContentsContainer>
          {page === "" && (
            <>
              <Home broken={broken} darkMode={darkMode} />
            </>
          )}
          {page === "About" && (
            <>
              <About broken={broken} darkMode={darkMode} />
            </>
          )}
          {page === "Projects" && (
            <>
              <ProjectSlide
                setPage={setPage}
                broken={broken}
                setBroken={setBroken}
                darkMode={darkMode}
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
`;
