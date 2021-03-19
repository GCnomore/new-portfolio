import SideBarMenu from "./components/SideBarMenu";
import Home from "./components/Home";
import About from "./components/About";
import ProjectSlide from "./components/ProjectsSlide";

import { useState } from "react";

import styled from "styled-components";

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
  height: 100vh;
  width: 100%;
`;

const SideBar = styled.div`
  width: 3.5vw;
`;

const ContentsContainer = styled.div`
  width: 96.5vw;
`;
