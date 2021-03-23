import { useState, useEffect } from "react";
import grabAndSlide from "../GrabAndSlide";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jquery from "../assets/icons/Jquery.webp";
import react from "../assets/icons/react.webp";
import reactNative from "../assets/icons/reactnative.webp";
import vue from "../assets/icons/Vue.webp";
import nodeJS from "../assets/icons/nodejs.webp";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
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
    grabAndSlide("app", 1.3);
  }, []);

  const importAllImages = (r) => {
    return r.keys().map(r);
  };

  const images = importAllImages(
    require.context(
      "../assets/project_img",
      false,
      /\.(png|jpe?g|svg|PNG|webp)$/
    )
  );

  const TAG = {
    REACT: "react",
    REACT_NATIVE: "reactNative",
    NODE_JS: "nodeJS",
    VUE: "vue",
    JQUERY: "jquery",
  };

  const gcBoard = {
    name: "gcBoard",
    tag: [TAG.REACT],
    images: [...images.filter((item) => item.default.includes("gcboard"))],
    description: [
      "[On-going Project] Project management app inspired by Trello. This app will provide various templates of work flow management.",
      "It currently stores data into local storage",
    ],
    info: {
      summary: (
        <p>
          <strong>[On-going Project]</strong>
          <br />
          <br /> Project management app inspired by Trello. This app will
          provide various templates of work flow management.
        </p>
      ),
      tech: [
        "Javascript",
        "React",
        "Styled-Component",
        "Prop-types",
        "UUID",
        "Babel",
      ],
    },
  };
  const movieHunt = {
    name: "movieHunt",
    tag: [TAG.REACT, TAG.NODE_JS],
    images: [...images.filter((item) => item.default.includes("moviehunt"))],
    description: [
      "Users can login using their existing account",
      "Users can register if they don't have an account",
      "List of some of my favorite movies",
      "Click the movie card to see details. Users can add selected movie to their favorite list.",
      "Click on Genre to see other movies with same genre",
      "Click on Director to see other movies filmed by the same director",
      "Showing user account page. Users can update their info and favorite list.",
    ],
    info: {
      summary: (
        <p>
          Full stack project made with <strong>MERN stack</strong> This project
          uses database I reated with some of my favorite movies. It can
          register a user and save their account info to the database. Used
          Heroku to host this app.
          <br />
          <br /> <strong>Use a test account to try it out!</strong>
          <br />
          <strong>Account: test</strong>
          <br />
          <strong>Password: 111111 ---> (Six ones)</strong>
        </p>
      ),
      tech: [
        "Javascript",
        "React",
        "React Router Dom",
        "SCSS",
        "Redux",
        "Babel",
        "Parcel",
        "NodeJS",
        "Express",
        "Passport",
        "Heroku",
        "JWT",
        "UUID",
        "MongoDB",
        "Mongoose",
        "CORS",
        "Bcrypt",
        "Prop-types",
        "JS Doc",
        "BootStrap",
      ],
    },
  };
  const pokedex = {
    name: "pokedex",
    tag: [TAG.JQUERY],
    images: [...images.filter((item) => item.default.includes("pokedex"))],
    description: [
      "List of Pokemon cards colored by their types",
      "Click the cards to see their details",
    ],
    info: {
      summary: (
        <p>
          A simple <strong>Jquery</strong> project to build PokeDex. Displays
          Pokemons in their number order with detailed information in modal
          window. Applied infinite scroll function.
        </p>
      ),
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "Jqeury",
        "Bootstrap",
        "Animate.css",
        "ES Lint",
      ],
    },
  };
  const kokoatalk = {
    name: "kokoatalk",
    tag: [TAG.REACT_NATIVE],
    images: [...images.filter((item) => item.default.includes("kokoa"))],
    description: [
      "Users can enter their name and select color of chat screen on main screen",
      "Three actions are available",
      "Example view of messages",
    ],
    info: {
      summary: (
        <p>
          Chat app made with <strong>React Native and GiftedChat</strong> with
          given design instruction. Users have option to change the color of the
          chat screen. Photo from library, directly from camera, and current
          location can be sent as a message. Message data will be stored in{" "}
          <strong>asyncstorage and Firebase.</strong>
        </p>
      ),
      tech: [
        "Javascript",
        "React Native",
        "Expo",
        "React Navigation: Stack",
        "Gifted Chat",
        "Firebase/Firestore",
        "Prop-types",
        "Async-storage",
        "NetInfo",
      ],
    },
  };
  const todo = {
    name: "todo",
    tag: [TAG.VUE],
    images: [...images.filter((item) => item.default.includes("todo"))],
    description: [
      "Users can add to-dos with title and content",
      "To do will be added as a card",
      "User can edit, delete, drage and drop cards",
    ],
    info: {
      summary: (
        <p>
          To do list app built with <strong>Vue.</strong> Its data will be
          stored in local storage. It provides drag and drop feature to sort
          to-dos in user's priority.
        </p>
      ),
      tech: ["Javascript", "Vue", "Material Deisgn", "Draggable"],
    },
  };
  const watsPoppin = {
    name: "watsPoppin",
    tag: [TAG.REACT],
    images: [...images.filter((item) => item.default.includes("watspoppin"))],
    description: [
      "Authenticate user with their Google account",
      "Main page shows all available events with pie chart and scatter chart",
      "List of events - details are collapsed by default - can be expanded with show detail button",
      "Search events by city name",
    ],
    info: {
      summary: (
        <p>
          Event searching application made with Careerfoundry's Google Calander
          API. Applied OAuth for user authentication. Some commponents were
          coded as object oriented programming.
        </p>
      ),
      tech: [
        "Javascript",
        "React",
        "Rechart",
        "AWS",
        "Atatus",
        "OAuth",
        "Material Deisgn",
        "PWA",
        "Enzyme",
        "Cucumber",
        "Jest",
        "Puppeteer",
      ],
    },
  };

  const renderProjectSlide = (project, state) => {
    const length = project.images.length;
    if (project.tag.includes(sortBy) || sortBy === "none") {
      return (
        <Project
          data-name={project.name}
          width={project.name === "kokoatalk" ? "fit-content" : null}
          onMouseEnter={(e) => setShowDetail(e.target.dataset.name)}
        >
          <button
            data-name={project.name}
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
                data-name={project.name}
                onMouseLeave={() => setShowDetail()}
              >
                <ProjectDetails
                  show={project.name === showDetail}
                  kokoatalk={project.name === "kokoatalk"}
                >
                  <div>
                    <section>
                      <h2>Summary</h2>
                      <div>{project.info.summary}</div>
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
                <ProjectImg
                  data-name={project.name}
                  src={item.default}
                  alt={project.name}
                  width={item.default.includes("kokoa") ? "20rem" : null}
                  onMouseEnter={(e) => setShowDetail(e.target.dataset.name)}
                />
                <ProjectDescription
                  show={
                    showDetail === project.name
                      ? false
                      : slide[state].index === index
                      ? true
                      : false
                  }
                  data-name={project.name}
                  onMouseEnter={(e) => setShowDetail(e.target.dataset.name)}
                >
                  <p>{project.description[index]}</p>
                </ProjectDescription>
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
          />
          <SortIcon
            src={reactNative}
            alt="reactNative icon"
            onClick={() => setSortBy(TAG.REACT_NATIVE)}
            name={"reactNative"}
            selected={sortBy}
          />
          <SortIcon
            src={nodeJS}
            alt="nodeJS icon"
            onClick={() => setSortBy(TAG.NODE_JS)}
            name={"nodeJS"}
            selected={sortBy}
          />
          <SortIcon
            src={vue}
            alt="vue icon"
            onClick={() => setSortBy(TAG.VUE)}
            name={"vue"}
            selected={sortBy}
          />
          <SortIcon
            src={jquery}
            alt="jquery icon"
            onClick={() => setSortBy(TAG.JQUERY)}
            name={"jquery"}
            selected={sortBy}
          />
        </div>
        <h2 onClick={() => setSortBy("none")}>Clear</h2>
      </SortContainer>
      <ProjectSlider>
        {renderProjectSlide(gcBoard, "gcBoard")}
        {renderProjectSlide(movieHunt, "movieHunt")}
        {renderProjectSlide(pokedex, "pokedex")}
        {renderProjectSlide(kokoatalk, "kokoatalk")}
        {renderProjectSlide(watsPoppin, "watsPoppin")}
        {renderProjectSlide(todo, "todo")}
      </ProjectSlider>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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
  margin: 0 10rem;

  > button {
    border: none;
    outline: none;
    height: fit-content;
    align-self: center;
    padding: 2rem 1rem;
    font-size: 3rem;
    transition: 0.4s;

    &:active {
      font-size: 2.2rem;
      transition: 0.1s ease-in-out;
    }
  }
`;

const ProjectContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ProjectImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 35rem;
`;

const ProjectDetails = styled.div`
  backdrop-filter: blur(1.2px);
  width: 100%;
  position: relative;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.5s ease-in-out;

  > div {
    position: fixed;
    left: 0;
    top: 0;
    color: white;
    width: 100%;
    height: 35rem;
    background-color: rgba(0, 0, 0, 0.6);
    display: ${(props) => (props.kokoatalk ? "block" : "flex")};
    justify-content: space-between;
    font-size: 1.2rem;
    ${(props) =>
      props.kokoatalk &&
      "> section{ font-size: 0.8rem; padding: 0 !important;  >h2 {font-size: 1.3rem;}}"}

    > section {
      padding: 1rem 3rem;
      width: 100%;
      text-align: center;

      > h2 {
        text-decoration: underline;
        margin-bottom: 2rem;
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
  display: ${(props) => (props.show ? "block" : "none")};
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
  height: 25rem;
  background-color: rgba(255, 255, 255, 0.4);
  align-self: center;
  margin-bottom: 5rem;
  display: ${(props) => (props.show ? "block" : "none")};
`;
