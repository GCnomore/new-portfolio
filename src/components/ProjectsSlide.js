import { useState, useEffect } from "react";
import grabAndSlide from "../GrabAndSlide";
import styled from "styled-components/macro";

import jquery from "../assets/icons/Jquery.webp";
import react from "../assets/icons/react.webp";
import reactNative from "../assets/icons/reactnative.webp";
import vue from "../assets/icons/Vue.webp";
import nodeJS from "../assets/icons/nodejs.webp";

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

  const gcBoardImg = {
    name: "gcBoard",
    images: [...images.filter((item) => item.default.includes("gcboard"))],
  };
  const movieHuntImg = {
    name: "movieHunt",
    images: [...images.filter((item) => item.default.includes("moviehunt"))],
  };
  const pokedexImg = {
    name: "pokedex",
    images: [...images.filter((item) => item.default.includes("pokedex"))],
  };
  const kokoatalkImg = {
    name: "kokoatalk",
    images: [...images.filter((item) => item.default.includes("kokoa"))],
  };
  const todoImg = {
    name: "todo",
    images: [...images.filter((item) => item.default.includes("todo"))],
  };
  const watsPoppinImg = {
    name: "watsPoppin",
    images: [...images.filter((item) => item.default.includes("watspoppin"))],
  };

  const renderProjectSlide = (project, state) => {
    const length = project.images.length;
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
          Prev
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
          Next
        </button>
      </Project>
    );
  };

  return (
    <ProjectContainer className="app">
      <SortContainer>
        <h2>Sort by</h2>
        <div>
          <SortIcon
            src={react}
            alt="react icon"
            onClick={() => setSortBy("react")}
            name={"react"}
            selected={sortBy}
          />
          <SortIcon
            src={reactNative}
            alt="reactNative icon"
            onClick={() => setSortBy("reactNative")}
            name={"reactNative"}
            selected={sortBy}
          />
          <SortIcon
            src={nodeJS}
            alt="nodeJS icon"
            onClick={() => setSortBy("nodeJS")}
            name={"nodeJS"}
            selected={sortBy}
          />
          <SortIcon
            src={vue}
            alt="vue icon"
            onClick={() => setSortBy("vue")}
            name={"vue"}
            selected={sortBy}
          />
          <SortIcon
            src={jquery}
            alt="jquery icon"
            onClick={() => setSortBy("jquery")}
            name={"jquery"}
            selected={sortBy}
          />
        </div>
        <h2 onClick={() => setSortBy("none")}>Clear</h2>
      </SortContainer>
      <ProjectSlider>
        {renderProjectSlide(gcBoardImg, "gcBoard")}
        {renderProjectSlide(movieHuntImg, "movieHunt")}
        {renderProjectSlide(pokedexImg, "pokedex")}
        {renderProjectSlide(kokoatalkImg, "kokoatalk")}
        {renderProjectSlide(watsPoppinImg, "watsPoppin")}
        {renderProjectSlide(todoImg, "todo")}
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
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2:nth-child(3) {
    cursor: pointer;
    border-radius: 0.3rem;
    padding: 0.25rem 1rem;
    border: 3px solid rgba(0, 0, 0, 0.6);
    box-shadow: 10px 8px 5px rgba(0, 0, 0, 0.8);

    &:active {
      transform: scale(0.95);
      box-shadow: 6px 4px 1px rgba(0, 0, 0, 1);
      transition: 1s;
    }
  }
`;

const SortIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 1rem;
  filter: drop-shadow(10px 8px 3px rgba(0, 0, 0, 0.8));
  cursor: pointer;
  transition: 0.5s;
  opacity: ${(props) =>
    props.name === props.selected || props.selected === "none" ? 1 : 0.2};

  &:active {
    transform: scale(0.85);
    filter: drop-shadow(6px 4px 1px rgba(0, 0, 0, 1));
    transition: 1s;
  }
`;

const ProjectSlider = styled.section`
  width: fit-content;
  height: 100vh;
  display: flex;
  padding: 5rem 1rem;
`;

const Project = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "50vw")};
  height: fit-content;
  margin: 0 5rem;
`;

const ProjectImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 35rem;
  display: ${(props) => (props.show ? "block" : "none")};
`;
