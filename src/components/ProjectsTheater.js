import { useEffect, useState } from "react";
import { projects } from "../proejcts";
import "../animation.css";

import styled, { keyframes } from "styled-components/macro";
import projector from "../assets/projector.webp";

export default function ProjectTheater() {
  const [selected, setSelected] = useState("");
  const [screenReady, setScreenReady] = useState(false);
  const [showing, setShowing] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const shootIcons = async () => {
    if (showIcon) {
      const icons = Array.from(document.querySelectorAll(".projectIcons"));

      for (let i in icons) {
        setTimeout(() => {
          icons[i].classList.add("shoot");
          icons[i].classList.remove("hide");
          setTimeout(() => {
            icons[i].classList.remove("shoot");
            icons[i].classList.add("hide");
          }, i - 1 + 800 + i * 150);
        }, i * 500);
      }
    }
  };

  useEffect(() => {
    shootIcons();
  }, [showIcon]);

  return (
    <TheaterContainer>
      <ProjectList>
        <ProjectTitles
          onClick={() => {
            setScreenReady(true);
            setShowIcon(false);
          }}
        >
          <p onClick={() => setSelected(projects.gcBoard)}>
            {projects.gcBoard.name.toUpperCase()}
          </p>
          <p onClick={() => setSelected(projects.movieHunt)}>
            {projects.movieHunt.name.toUpperCase()}
          </p>
          <p onClick={() => setSelected(projects.pokedex)}>
            {projects.pokedex.name.toUpperCase()}
          </p>
          <p onClick={() => setSelected(projects.watsPoppin)}>
            {projects.watsPoppin.name.toUpperCase()}
          </p>
          <p onClick={() => setSelected(projects.todo)}>
            {projects.todo.name.toUpperCase()}
          </p>
        </ProjectTitles>
        <Divider />
        <ProjectDetails projectName={selected.name}>
          <p>{selected && selected.info.summary}</p>
          <div>
            {selected && selected.info.tech.map((item) => <p>#{item}</p>)}
          </div>
          <div>
            {selected && (
              <>
                <a
                  rel="noopener"
                  onClick={() => {
                    setShowing("");
                    setTimeout(() => {
                      setShowing(selected.project_src);
                    }, selected.icons.length * 900);
                    setShowIcon(true);
                  }}
                >
                  See Project
                </a>
                <a target="_blank" href={selected.project_code}>
                  See Code
                </a>
                <a target="_blank" href={selected.project_src}>
                  Open Project
                </a>
              </>
            )}
          </div>
        </ProjectDetails>
      </ProjectList>
      <Projector src={projector} />
      {selected.icons &&
        selected.icons.map((item) => (
          <>
            <ProjectIcon
              className="projectIcons hide"
              src={item}
              show={showIcon}
            />
          </>
        ))}
      <Screen
        screenReady={screenReady}
        src={showing === "" ? "" : showing}
      ></Screen>
    </TheaterContainer>
  );
}

const screenDrop = keyframes`
   0% {
      height: 0;
      opacity: 0;
   }
   50%{
      height: 0;
      opacity: 0;
   }
   51%{
      opacity: 1;
   }
   100%{
      height: 80vh;
      opacity: 1;
   }
`;

const blackOut = keyframes`
   from{
      opacity: 0;
   }
   to{
      opacity: 1;
   }
`;

const TheaterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  animation: ${blackOut} 3s ease-in-out;
`;

const Screen = styled.iframe`
  margin: 10vh 0 0 33vw;
  height: 80vh;
  width: 60vw;
  border: none;
  background-color: ${(props) => (props.screenReady ? "#242424" : "white")};
  transition: 2s;
  animation: ${screenDrop} 6s ease-in-out;
  transform: perspective(1000px) rotateY(-15deg);
`;

const ProjectList = styled.div`
  position: absolute;
  width: 30vw;
  height: 35vh;
  margin: 25vh 0 0 5vw;
  transform: perspective(1000px) rotateY(15deg);
  display: flex;
`;

const ProjectTitles = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: white;

  > p {
    cursor: pointer;
  }
`;

const ProjectDetails = styled.section`
  flex: 3;
  padding: 1rem;
  color: white;
  font-size: 1.1rem;

  > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 3rem;
    > p {
      margin: ${(props) =>
        props.projectName === "movieHunt"
          ? "0.2rem 1rem 0.5rem 0"
          : "0.5rem 1rem 0.5rem 0"};
    }
  }

  > div:nth-child(3) {
    margin-top: ${(props) =>
      props.projectName === "movieHunt" ? "2rem" : "5rem"};
    display: flex;

    > a {
      margin-right: 1.5rem;
      text-decoration: underline;
      color: white;
      cursor: pointer;
      font-weight: 600;
    }
  }
`;

const Projector = styled.img`
  width: 5vw;
  transform: perspective(1000px) rotateY(180deg);
  position: absolute;
  bottom: 15vh;
  left: 5vw;
`;

const Divider = styled.div`
  width: 2px;
  height: 30rem;
  background-color: rgba(255, 255, 255, 0.4);
  align-self: center;
`;

const ProjectIcon = styled.img`
  width: 3rem;
  position: fixed;
  left: 9.5vw;
  top: 70vh;
`;
