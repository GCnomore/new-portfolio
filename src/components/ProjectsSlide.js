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
  };
  const movieHunt = {
    name: "movieHunt",
    tag: [TAG.REACT, TAG.NODE_JS],
    images: [...images.filter((item) => item.default.includes("moviehunt"))],
  };
  const pokedex = {
    name: "pokedex",
    tag: [TAG.JQUERY],
    images: [...images.filter((item) => item.default.includes("pokedex"))],
  };
  const kokoatalk = {
    name: "kokoatalk",
    tag: [TAG.REACT_NATIVE],
    images: [...images.filter((item) => item.default.includes("kokoa"))],
  };
  const todo = {
    name: "todo",
    tag: [TAG.VUE],
    images: [...images.filter((item) => item.default.includes("todo"))],
  };
  const watsPoppin = {
    name: "watsPoppin",
    tag: [TAG.REACT],
    images: [...images.filter((item) => item.default.includes("watspoppin"))],
  };

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
              <ProjectImg
                src={item.default}
                key={index}
                alt={project.name}
                show={slide[state].index === index ? true : false}
                width={item.default.includes("kokoa") ? "20rem" : null}
              />
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

  const sortProject = (sortBy) => {
    setSortBy(sortBy);
  };
  console.log(sortBy);
  return (
    <ProjectContainer className="app">
      <SortContainer>
        <h2>Sort by</h2>
        <div>
          <SortIcon
            src={react}
            alt="react icon"
            onClick={() => sortProject(TAG.REACT)}
            name={"react"}
            selected={sortBy}
          />
          <SortIcon
            src={reactNative}
            alt="reactNative icon"
            onClick={() => sortProject(TAG.REACT_NATIVE)}
            name={"reactNative"}
            selected={sortBy}
          />
          <SortIcon
            src={nodeJS}
            alt="nodeJS icon"
            onClick={() => sortProject(TAG.NODE_JS)}
            name={"nodeJS"}
            selected={sortBy}
          />
          <SortIcon
            src={vue}
            alt="vue icon"
            onClick={() => sortProject(TAG.VUE)}
            name={"vue"}
            selected={sortBy}
          />
          <SortIcon
            src={jquery}
            alt="jquery icon"
            onClick={() => sortProject(TAG.JQUERY)}
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
  margin-top: 15rem;
  width: fit-content;
  height: 100vh;
  display: flex;
  padding: 5rem 1rem;
`;

const Project = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "50vw")};
  height: fit-content;
  margin: 0 10rem;

  > button {
    border: none;
    outline: none;
    background-color: red;
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

const ProjectImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 35rem;
  display: ${(props) => (props.show ? "block" : "none")};
`;
