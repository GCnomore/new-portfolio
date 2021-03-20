import { useState, useEffect } from "react";
import grabAndSlide from "../GrabAndSlide";

import styled from "styled-components/macro";

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

  useEffect(() => {
    grabAndSlide("projectSlider", 1.3);
  }, []);

  const importAllImage = (r) => {
    return r.keys().map(r);
  };

  const images = importAllImage(
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
      <Project>
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
    <ProjectContainer>
      <SortContainer>
        <div>sort by</div>
      </SortContainer>
      <ProjectSlider className="projectSlider">
        <div>
          {renderProjectSlide(gcBoardImg, "gcBoard")}
          {renderProjectSlide(movieHuntImg, "movieHunt")}
          {renderProjectSlide(pokedexImg, "pokedex")}
          {renderProjectSlide(kokoatalkImg, "kokoatalk")}
          {renderProjectSlide(watsPoppinImg, "watsPoppin")}
          {renderProjectSlide(todoImg, "todo")}
        </div>
      </ProjectSlider>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SortContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ProjectSlider = styled.section`
  width: fit-content;
  height: 100%;
  display: flex;
  > div {
    position: absolute;
  }
`;

const Project = styled.div`
  display: flex;
`;

const ProjectImg = styled.img`
  width: 20rem;
  display: ${(props) => (props.show ? "block" : "none")};
`;
