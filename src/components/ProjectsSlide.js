import { useState, useEffect } from "react";
import grabAndSlide from "../GrabAndSlide";
import styled from "styled-components/macro";
import { projects, TAG } from "../proejcts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../animation.css";

import jquery from "../assets/icons/Jquery.webp";
import react from "../assets/icons/react.webp";
import reactNative from "../assets/icons/reactnative.webp";
import vue from "../assets/icons/Vue.webp";
import nodeJS from "../assets/icons/nodejs.webp";
import {
  faChevronLeft,
  faChevronRight,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About({ setPage, broken, theme, setBroken }) {
  const [slide, setSlide] = useState({
    gcBoard: {
      index: 0,
    },
    movieHunt: {
      index: 0,
    },
    pokedex: {
      index: 0,
    },
    kokoatalk: {
      index: 0,
    },
    todo: {
      index: 0,
    },
    watsPoppin: {
      index: 0,
    },
  });
  const [sortBy, setSortBy] = useState("none");
  const [showDetail, setShowDetail] = useState("");

  useEffect(() => {
    grabAndSlide("app", 1.2);
  }, []);

  const renderProjectSlide = (project, state) => {
    const length = project.images.length;
    if (project.tag.includes(sortBy) || sortBy === "none") {
      return (
        <Project width={project.name === "kokoatalk" ? "fit-content" : null}>
          <button
            onClick={() => {
              setSlide((prev) =>
                prev[state].index === 0
                  ? {
                      ...prev,
                      [state]: { index: length - 1 },
                    }
                  : {
                      ...prev,
                      [state]: { index: prev[state].index - 1 },
                    }
              );
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {project.images.map((item, index) => {
            return (
              <ProjectContent
                key={index}
                show={slide[state].index === index ? true : false}
              >
                <ProjectImg
                  src={item.default}
                  alt={project.name}
                  width={item.default.includes("kokoa") ? "20rem" : null}
                  data-name={project.name}
                  onMouseEnter={(e) => setShowDetail(e.target.dataset.name)}
                  show={project.name === showDetail}
                />
                <ProjectDescription
                  show={
                    showDetail === project.name
                      ? false
                      : slide[state].index === index
                      ? true
                      : false
                  }
                >
                  <p>{project.description[index]}</p>
                </ProjectDescription>
                <ProjectDetails
                  show={project.name === showDetail}
                  kokoatalk={project.name === "kokoatalk"}
                  onMouseLeave={() => setShowDetail("")}
                >
                  <div>
                    <h2>{project.name.toUpperCase()}</h2>
                  </div>
                  <div>
                    <section>
                      <h2>Summary</h2>
                      <div>{project.info.summary}</div>
                      <a
                        target="_blank"
                        href={project.project_src}
                        rel="noreferrer"
                      >
                        See App
                      </a>
                      <a
                        target="_blank"
                        href={project.project_code}
                        rel="noreferrer"
                      >
                        See Code
                      </a>
                    </section>
                    <Divider
                      show={project.name === "kokoatalk" ? false : true}
                    ></Divider>
                    <section>
                      <h2>Used Techs</h2>
                      <div>
                        {project.info.tech &&
                          project.info.tech.map((item, index) => (
                            <p key={index}>#{item}</p>
                          ))}
                      </div>
                    </section>
                  </div>
                </ProjectDetails>
              </ProjectContent>
            );
          })}

          <button
            onClick={() => {
              setSlide((prev) =>
                prev[state].index === length - 1
                  ? {
                      ...prev,
                      [state]: { index: 0 },
                    }
                  : {
                      ...prev,
                      [state]: { index: prev[state].index + 1 },
                    }
              );
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Project>
      );
    } else {
      return null;
    }
  };

  return (
    <ProjectContainer className="app">
      <SortContainer>
        <h2>Sort by</h2>
        <div>
          <SortIcon
            src={react}
            alt="react icon"
            onClick={() => setSortBy(TAG.REACT)}
            name={"react"}
            selected={sortBy}
            className={broken ? "fly1" : ""}
          />
          <SortIcon
            src={reactNative}
            alt="reactNative icon"
            onClick={() => setSortBy(TAG.REACT_NATIVE)}
            name={"reactNative"}
            selected={sortBy}
            className={broken ? "fly2" : ""}
          />
          <SortIcon
            src={nodeJS}
            alt="nodeJS icon"
            onClick={() => setSortBy(TAG.NODE_JS)}
            name={"nodeJS"}
            selected={sortBy}
            className={broken ? "fly3" : ""}
          />
          <SortIcon
            src={vue}
            alt="vue icon"
            onClick={() => setSortBy(TAG.VUE)}
            name={"vue"}
            selected={sortBy}
            className={broken ? "fly4" : ""}
          />
          <SortIcon
            src={jquery}
            alt="jquery icon"
            onClick={() => setSortBy(TAG.JQUERY)}
            name={"jquery"}
            selected={sortBy}
            className={broken ? "fly5" : ""}
          />
        </div>
        <h2 onClick={() => setSortBy("none")} className={broken ? "fly6" : ""}>
          Clear
        </h2>
      </SortContainer>
      <ProjectSlider>
        {renderProjectSlide(projects.gcBoard, "gcBoard")}
        {renderProjectSlide(projects.movieHunt, "movieHunt")}
        {renderProjectSlide(projects.pokedex, "pokedex")}
        {renderProjectSlide(projects.kokoatalk, "kokoatalk")}
        {renderProjectSlide(projects.watsPoppin, "watsPoppin")}
        {renderProjectSlide(projects.todo, "todo")}
      </ProjectSlider>
      <ToTheater broken={broken}>
        <FontAwesomeIcon
          icon={faTicketAlt}
          onClick={() => {
            if (broken) {
              setBroken(false);
              setPage("theater");
            } else {
              setPage("theater");
            }
          }}
        />
      </ToTheater>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  user-select: none;
`;

const SortContainer = styled.section`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.6rem;
  margin-left: 3vw;

  h2:nth-child(3) {
    cursor: pointer;
    border-radius: 0.3rem;
    padding: 0.25rem 1rem;
    border: 3px solid rgba(0, 0, 0, 0.6);
    box-shadow: 10px 8px 5px rgba(0, 0, 0, 0.8);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.2rem;
    transition: 0.5s ease-in-out;

    &:active {
      transform: scale(0.95);
      box-shadow: 6px 4px 1px rgba(0, 0, 0, 1);
      transition: 0.2s ease-in-out;
    }
  }
`;

const SortIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 1rem;
  filter: drop-shadow(10px 8px 3px rgba(0, 0, 0, 0.8));
  cursor: pointer;
  transition: 0.5s ease-in-out;
  opacity: ${(props) =>
    props.name === props.selected || props.selected === "none" ? 1 : 0.2};

  &:active {
    transform: scale(0.85);
    filter: drop-shadow(6px 4px 1px rgba(0, 0, 0, 1));
    transition: 0.2s ease-in-out;
  }
`;

const ProjectSlider = styled.section`
  margin-top: 8rem;
  width: fit-content;
  height: 100vh;
  display: flex;
  padding: 5rem 1rem;
  align-items: center;
`;

const Project = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "50vw")};
  height: fit-content;
  margin: 0 8rem;
  padding: 1rem 1rem;

  > button {
    border: none;
    outline: none;
    height: fit-content;
    align-self: center;
    padding: 2rem 1rem;
    font-size: 3rem;
    transition: 0.4s;
    cursor: pointer;

    &:active {
      font-size: 2.2rem;
      transition: 0.1s ease-in-out;
    }
  }
`;

const ProjectContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: relative;
`;

const ProjectImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  z-index: ${(props) => (props.show ? -1000 : 1)};
`;

const ProjectDetails = styled.div`
  backdrop-filter: blur(1.2px);
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: absolute;
  left: 0;
  top: 0;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  z-index: ${(props) => (props.show ? 100 : -100)};

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;

    > h2 {
      text-align: center;
      font-size: ${(props) => (props.kokoatalk ? "2rem" : "3rem")};
      margin: 1rem 0 1rem 0;
      text-decoration: underline;
    }
  }
  > div:nth-child(2) {
    overflow: hidden;
    display: ${(props) => (props.kokoatalk ? "block" : "flex")};
    justify-content: space-between;
    font-size: 1.2rem;
    ${(props) =>
      props.kokoatalk &&
      "> section{ font-size: 0.8rem; padding: 0 !important;  >h2 {font-size: 1.3rem;}}"}

    > section {
      padding: 0 3rem;
      width: 100%;
      text-align: center;
      height: fit-content;

      > h2 {
        text-decoration: underline;
        margin: ${(props) => (props.kokoatalk ? "3rem 0 1rem 0" : "2rem 0")};
      }
      > a {
        color: white;
        margin: 2rem;
      }
    }

    section:nth-child(3) > div {
      display: grid;
      grid-template-columns: ${(props) =>
        props.kokoatalk ? "1fr 1fr" : "1fr 1fr 1fr"};
      ${(props) => props.kokoatalk && "grid-gap: 0; padding: 0 1rem;"}

      > p {
        margin: 0.5rem 0;
      }
    }
  }
`;

const ProjectDescription = styled.div`
  backdrop-filter: blur(1.2px);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.5s;
  > p {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1.2px);
    color: white;
    margin: 0;
    padding: 0.3rem 0;
    top: -5rem;
    width: 100%;
    font-size: 1.2rem;
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 20rem;
  background-color: rgba(255, 255, 255, 0.4);
  align-self: center;
  /* margin-bottom: -10rem; */
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ToTheater = styled.div`
  width: 100vw;
  position: absolute;
  font-size: ${(props) => (props.broken ? "50rem" : "3rem")};
  bottom: 5vh;
  text-align: center;
  > svg {
    cursor: pointer;
  }
`;
