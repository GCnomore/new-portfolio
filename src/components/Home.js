import { useEffect, useState } from "react";
import styled from "styled-components/macro";

export default function Home() {
  // const [deleteWord, setDeleteWord] = useState(false);
  let deleteWord = false;
  // const [wordIndex, setWordIndex] = useState(0);
  let wordIndex = 0;
  const words = ["Hello </br> My name is@", "My name@", "is ddd@"];
  let wait = 2000;

  let txt = "";

  const typeWords = () => {
    const currentIndex = wordIndex % words.length;
    const fullText = words[currentIndex];
    const txtElement = document.querySelector(".txtElement");

    if (deleteWord) {
      txt = fullText.substring(0, txt.length - 1);
    } else {
      txt = fullText.substring(0, txt.length + 1);
    }

    txtElement.innerHTML = txt;

    let speed = 300;

    if (deleteWord) {
      speed /= 2;
    }

    if (!deleteWord && txt === fullText) {
      speed = wait;
      deleteWord = true;
    } else if (deleteWord && txt === "") {
      deleteWord = false;
      wordIndex++;
      speed = 500;
    }

    setTimeout(() => {
      typeWords();
    }, speed);
  };

  useEffect(() => {
    typeWords();
  }, []);

  return (
    <HomeContainer>
      <div>This is home</div>
      <Typing className="txtElement">{txt}</Typing>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 10rem;
`;

const Typing = styled.div`
  border-right: 3px solid black;
  width: fit-content;
  height: 1rem;
`;
