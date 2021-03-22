import SideBarMenu from "./components/SideBarMenu";
import Home from "./components/Home";
import About from "./components/About";
import ProjectSlide from "./components/ProjectsSlide";

import { useState } from "react";

import styled from "styled-components/macro";

function App() {
  const [page, setPage] = useState("");

  return (
    <AppContainer>
      <SideBar>
        <SideBarMenu setPage={setPage} />
      </SideBar>
      <ContentsContainer>
        {page === "" && (
          <>
            <Home />
          </>
        )}
        {page === "About" && (
          <>
            <About />
          </>
        )}
        {page === "Projects" && (
          <>
            <ProjectSlide />
          </>
        )}
      </ContentsContainer>
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
  width: 3.5vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
`;

const ContentsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
