import { useState, useEffect } from "react";
import grabAndSlide from "../GrabAndSlide";
import styled from "styled-components/macro";
import { projects, TAG } from "../proejcts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../animation.css";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

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

export default function ProjectSlide({
  setPage,
  broken,
  theme,
  setBroken,
  screenwidth,
}) {
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
  const [brokenTicket, setBrokenTicket] = useState(800);
  const [showModal, setShowModal] = useState(false);

  const fadeIn_sortContainer = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  const fadeIn_projectContainer = useSpring({
    config: { duration: 200 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 800,
  });

  const fadeIn_ticket = useSpring({
    config: { duration: 1200 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 1800,
  });

  useEffect(() => {
    grabAndSlide("app", 1.2);
  }, []);

  const renderModal = () => {
    return (
      <ModalBackDrop
        onClick={(e) => {
          const condition = Array.from(e.target.classList);
          if (condition.length !== 0) {
            if (condition[0].includes("BackDrop")) {
              setShowModal(false);
            }
          }
        }}
      >
        <Modal>
          <p>You need bigger screen to access this. (1500px+)</p>
        </Modal>
      </ModalBackDrop>
    );
  };

  const renderProjectSlide = (project, state) => {
    const length = project.images.length;
    if (project.tag.includes(sortBy) || sortBy === "none") {
      return (
        <Project
          kokoatalk={project.name === "kokoatalk" ? "true" : "false"}
          theme={theme}
          style={fadeIn_projectContainer}
          screenwidth={screenwidth}
        >
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
                  show={project.name === showDetail}
                />
                <ProjectDescription
                  data-name={project.name}
                  onMouseEnter={(e) => setShowDetail(e.target.dataset.name)}
                  screenwidth={screenwidth}
                  show={
                    showDetail === project.name
                      ? false
                      : slide[state].index === index
                      ? true
                      : false
                  }
                >
                  <p
                    data-name={project.name}
                    onMouseEnter={(e) => setShowDetail(e.target.dataset.name)}
                  >
                    {project.description[index]}
                  </p>
                </ProjectDescription>
                <ProjectDetails
                  show={project.name === showDetail}
                  kokoatalk={project.name === "kokoatalk" ? "true" : "false"}
                  screenwidth={screenwidth}
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
      {showModal && renderModal()}
      <SortContainer
        theme={theme}
        style={fadeIn_sortContainer}
        screenwidth={screenwidth}
      >
        <h2>Sort by</h2>
        <div>
          <SortIcon
            src={react}
            alt="react icon"
            onClick={() => setSortBy(TAG.REACT)}
            name={"react"}
            selected={sortBy}
            className={broken ? "fly1" : ""}
            theme={theme}
            screenwidth={screenwidth}
          />
          <SortIcon
            src={reactNative}
            alt="reactNative icon"
            onClick={() => setSortBy(TAG.REACT_NATIVE)}
            name={"reactNative"}
            selected={sortBy}
            className={broken ? "fly2" : ""}
            theme={theme}
            screenwidth={screenwidth}
          />
          <SortIcon
            src={nodeJS}
            alt="nodeJS icon"
            onClick={() => setSortBy(TAG.NODE_JS)}
            name={"nodeJS"}
            selected={sortBy}
            className={broken ? "fly3" : ""}
            theme={theme}
            screenwidth={screenwidth}
          />
          <SortIcon
            src={vue}
            alt="vue icon"
            onClick={() => setSortBy(TAG.VUE)}
            name={"vue"}
            selected={sortBy}
            className={broken ? "fly4" : ""}
            theme={theme}
            screenwidth={screenwidth}
          />
          <SortIcon
            src={jquery}
            alt="jquery icon"
            onClick={() => setSortBy(TAG.JQUERY)}
            name={"jquery"}
            selected={sortBy}
            className={broken ? "fly5" : ""}
            theme={theme}
            screenwidth={screenwidth}
          />
        </div>
        <h2
          onClick={() => setSortBy("none")}
          className={broken ? "fly6" : ""}
          theme={theme}
        >
          Clear
        </h2>
      </SortContainer>
      <ProjectSlider screenwidth={screenwidth}>
        {renderProjectSlide(projects.gcBoard, "gcBoard")}
        {renderProjectSlide(projects.movieHunt, "movieHunt")}
        {renderProjectSlide(projects.pokedex, "pokedex")}
        {renderProjectSlide(projects.kokoatalk, "kokoatalk")}
        {renderProjectSlide(projects.watsPoppin, "watsPoppin")}
        {renderProjectSlide(projects.todo, "todo")}
      </ProjectSlider>
      <ToTheater
        broken={broken ? "true" : "false"}
        theme={theme}
        style={fadeIn_ticket}
        brokenticket={brokenTicket}
        screenwidth={screenwidth}
      >
        <FontAwesomeIcon
          icon={faTicketAlt}
          onClick={() => {
            if (broken) {
              setBrokenTicket(brokenTicket - 15);
              if (brokenTicket <= 25) {
                setBrokenTicket(brokenTicket - 1);
                if (brokenTicket <= 3.5) {
                  if (screenwidth !== "true") {
                    setBroken(false);
                    setPage("theater");
                  } else {
                    setShowModal(true);
                  }
                }
              }
            } else {
              if (window.innerWidth > 1500) {
                setPage("theater");
              } else {
                setShowModal(true);
              }
            }
          }}
        />
      </ToTheater>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.main`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  user-select: none;
`;

const SortContainer = styled(animated.section)`
  position: ${(props) =>
    props.screenwidth === "mobile" ? "relative" : "fixed"};
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.6rem;
  margin-top: ${(props) => {
    if (props.screenwidth === "small") {
      return "5rem";
    } else if (props.screenwidth === "mobile") {
      return "5rem";
    } else {
      return "";
    }
  }};
  margin-left: ${(props) =>
    props.screenwidth === "mobile" || props.screenwidth === "small"
      ? "0"
      : "3vw"};
  color: ${(props) => (props.theme ? props.theme.normalFontColor : "black")};

  h2:nth-child(3) {
    cursor: pointer;
    border-radius: 0.3rem;
    padding: 0.25rem 1rem;
    border: ${(props) =>
      props.theme ? "3px solid white" : "3px solid rgba(0, 0, 0, 0.6)"};
    box-shadow: ${(props) =>
      props.theme
        ? "5px 6px 5px rgba(255, 255, 255, 0.3)"
        : "5px 6px 5px rgba(0, 0, 0, 0.8)"};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.2rem;
    transition: 0.5s ease-in-out;

    &:active {
      transform: scale(0.95);
      box-shadow: ${(props) =>
        props.theme
          ? "3px 4px 1px rgba(255, 255, 255, 0.3)"
          : "3px 4px 1px rgba(0, 0, 0, 1)"};
      transition: 0.2s ease-in-out;
    }
  }
`;

const SortIcon = styled.img`
  width: ${(props) => {
    if (props.screenwidth === "mobile") {
      return "9vw";
    } else if (props.screenwidth === "small") {
      return "7vw";
    } else {
      return "4.5rem";
    }
  }};
  height: ${(props) => {
    if (props.screenwidth === "mobile") {
      return "9vw";
    } else if (props.screenwidth === "small") {
      return "7vw";
    } else {
      return "4.5rem";
    }
  }};
  min-width: 3rem;
  min-height: 3rem;
  margin: ${(props) => (props.screenwidth === "mobile" ? "0 1.5vw" : "0 1rem")};
  filter: ${(props) => props.theme && `drop-shadow(${props.theme.dropShadow})`};
  cursor: pointer;
  transition: 0.5s ease-in-out;
  opacity: ${(props) =>
    props.name === props.selected || props.selected === "none" ? 1 : 0.2};

  &:active {
    transform: scale(0.85);
    filter: ${(props) =>
      props.theme && `drop-shadow(${props.theme.dropShadowActive})`};
    transition: 0.2s ease-in-out;
  }
`;

const ProjectSlider = styled.section`
  margin-top: ${(props) => (props.screenwidth === "mobile" ? "0" : "8rem")};
  width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: ${(props) =>
    props.screenwidth === "mobile" ? "column" : "row"};
  padding: ${(props) =>
    props.screenwidth === "small" || props.screenwidth === "mobile"
      ? "5rem 0"
      : "5rem 1rem"};
  align-items: center;

  > div:nth-child(1) {
    margin: ${(props) => {
      if (props.screenwidth === "small") {
        return "0 8rem 0 2rem";
      } else if (props.screenwidth === "mobile") {
        return "0 0 4rem 0";
      } else {
        return "0 8rem";
      }
    }};
  }
`;

const Project = styled(animated.div)`
  display: flex;
  width: ${(props) => {
    if (props.kokoatalk === "true") {
      return "fit-content";
    } else if (props.screenwidth === "small") {
      return "95vw";
    } else if (props.screenwidth === "mobile") {
      return "100%";
    } else {
      return "70rem";
    }
  }};
  height: fit-content;
  margin: ${(props) => (props.screenwidth === "mobile" ? "4rem 0" : "0 8rem")};
  padding: ${(props) => (props.screenwidth === "mobile" ? "0" : "1rem 1rem")};
  transition: 0.5s ease-in-out;

  > button {
    border: none;
    outline: none;
    height: fit-content;
    align-self: center;
    padding: ${(props) =>
      props.screenwidth === "mobile" ? "2vw" : "2rem 1rem"};
    font-size: ${(props) => (props.screenwidth === "mobile" ? "1rem" : "3rem")};
    transition: 0.4s;
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => (props.theme ? props.theme.normalFontColor : "black")};

    &:active {
      font-size: 2.2rem;
      transition: 0.1s ease-in-out;
    }
  }
`;

const ProjectContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: relative;
  height: 100%;
`;

const ProjectImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  z-index: ${(props) => (props.show ? -1000 : 1)};
  box-shadow: ${(props) =>
    props.theme ? "0px 0px 50px rgba(255, 255, 255, 0.6)" : ""};
`;

const ProjectDetails = styled.div`
  backdrop-filter: blur(1.2px);
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  z-index: ${(props) => (props.show ? 100 : -100)};
  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;

    > h2 {
      text-align: center;
      font-size: ${(props) => {
        if (props.kokoatalk === "true") {
          return "2rem";
        } else if (props.screenwidth === "small") {
          return "2.5vw";
        } else if (props.screenwidth === "mobile") {
          return "4vw";
        } else {
          return "3rem";
        }
      }};
      margin: ${(props) =>
        props.screenwidth === "mobile" ? "0.5rem 0 0.5rem 0" : "1rem 0 1rem 0"};
      text-decoration: underline;
    }
  }
  > div:nth-child(2) {
    overflow: hidden;
    display: ${(props) => (props.kokoatalk === "true" ? "block" : "flex")};
    justify-content: space-between;
    ${(props) =>
      props.kokoatalk === "true" &&
      "> section{ font-size: 0.9rem; padding: 0 !important;  >h2 {font-size: 1.3rem;}}"}

    > section {
      padding: ${(props) =>
        props.screenwidth === "small" || props.screenwidth === "mobile"
          ? "0 1.5vw"
          : "0 3rem"};
      width: 100%;
      text-align: center;
      height: fit-content;
      > div {
        padding: ${(props) => (props.kokoatalk === "true" ? "0 0.2rem" : "")};
        font-size: ${(props) => {
          if (props.kokoatalk === "true") {
            return "0.9rem";
          } else if (props.screenwidth === "mobile") {
            return "2vw";
          } else if (props.screenwidth === "small") {
            return "1.5vw";
          } else {
            return "1rem";
          }
        }};
      }

      > h2 {
        text-decoration: underline;
        margin: ${(props) => {
          if (props.kokoatalk === "true") {
            return "2rem 0 1rem 0";
          } else if (props.screenwidth === "mobile") {
            return "0 0 1rem 0";
          } else if (props.screenwidth === "small") {
          } else {
            return "0 0 2rem 0";
          }
        }};
        font-size: ${(props) => {
          if (props.kokoatalk === "true") {
            return "1.3rem";
          } else if (props.screenwidth === "mobile") {
            return "3.2vw";
          } else if (props.screenwidth === "small") {
            return "2vw";
          } else {
            return "1.8rem";
          }
        }};
      }
      > a {
        color: white;
        margin: ${(props) =>
          props.screenwidth === "small" || props.screenwidth === "mobile"
            ? "1vw"
            : "2rem"};
        font-size: ${(props) => {
          if (props.kokoatalk === "true") {
            return "0.9rem";
          } else if (props.screenwidth === "mobile") {
            return "2vw";
          } else if (props.screenwidth === "small") {
            return "1.5vw";
          } else {
            return "1rem";
          }
        }};
      }
    }

    section:nth-child(3) > div {
      display: grid;
      grid-template-columns: ${(props) =>
        props.kokoatalk === "true" ? "1fr 1fr" : "1fr 1fr 1fr"};
      ${(props) =>
        props.kokoatalk === "true" && "grid-gap: 0; padding: 0 1rem;"}

      > p {
        margin: ${(props) =>
          props.screenwidth === "mobile" || props.screenwidth === "small"
            ? "0.2rem 0"
            : "0.5rem 0"};
      }
    }
  }
`;

const ProjectDescription = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.5s;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  > p {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1.2px);
    color: white;
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-size: ${(props) =>
      props.screenwidth === "mobile" ? "2vw" : "1.2rem"};
  }
`;

const Divider = styled.div`
  width: 3px;
  height: 20rem;
  background-color: rgba(255, 255, 255, 0.4);
  align-self: center;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ToTheater = styled(animated.div)`
  align-self: center;
  position: absolute;
  font-size: ${(props) =>
    props.broken === "true" ? `${props.brokenticket}px` : "3rem"};
  bottom: 5vh;
  text-align: center;
  color: ${(props) => (props.theme ? props.theme.normalFontColor : "black")};
  display: ${(props) => (props.screenwidth === "mobile" ? "none" : "")};

  > svg {
    cursor: pointer;
  }
`;

const ModalBackDrop = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  z-index: 2000;
  color: white;
  width: 45rem;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 3rem;
  padding: 2rem;
`;

ProjectSlide.propTypes = {
  setPage: PropTypes.func.isRequired,
  broken: PropTypes.bool.isRequired,
  setBroken: PropTypes.func.isRequired,
  screenwidth: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    name: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    normalFontColor: PropTypes.string,
    dropShadow: PropTypes.string.isRequired,
    dropShadowActive: PropTypes.string.isRequired,
    aboutCardShadow: PropTypes.string,
    textShadow: PropTypes.string,
  }),
};
