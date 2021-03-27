import { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import javascript from "../assets/icons/javascript.webp";

export default function Home({ theme }) {
  const typing = useRef(false);
  const txt = useRef("");
  const deleteWord = useRef(false);
  const wordIndex = useRef(0);

  const typeWords = () => {
    const words = [
      "const sayHello = () => {</br> &nbsp&nbsp console.log('Hello world!);</br>}</br></br>sayHello();",
      "import axios from 'axios';</br>import { useState, useEffect } from 'react';</br></br>const [portfolio, setPortfolio] = useState();</br></br>async function getCoolWebsite() {</br>&nbsp const result = await axios.get('www.api.superawesomewebsite.com/data?id=isaac');</br>&nbsp setPortfolio(result.data);</br>}</br></br>useEffect(()=>{</br>&nbsp getCoolWebsite();</br>}, [])",
    ];
    let wait = 4000;

    const currentIndex = wordIndex.current % words.length;
    const fullText = words[currentIndex];
    const txtElement = document.querySelector(".txtElement");

    if (deleteWord.current) {
      txt.current = fullText.substring(0, txt.current.length - 1);
    } else {
      txt.current = fullText.substring(0, txt.current.length + 1);
    }

    txtElement && (txtElement.innerHTML = txt.current);

    let speed = 50;

    if (deleteWord.current) {
      speed /= 5;
    }

    if (!deleteWord.current && txt.current === fullText) {
      speed = wait;
      deleteWord.current = true;
    } else if (deleteWord.current && txt.current === "") {
      deleteWord.current = false;
      wordIndex.current++;
      speed = 500;
    }

    setTimeout(() => {
      typing.current && typeWords();
    }, speed);
  };

  useEffect(() => {
    typing.current = true;
    txt.current = "";
    deleteWord.current = false;
    wordIndex.current = 0;
    typing.current && typeWords();

    return () => {
      typing.current = false;
    };
  }, []);

  return (
    <HomeContainer>
      <TypingContainer>
        <header>
          <WindowMenu>
            <div></div>
            <div></div>
            <div></div>
          </WindowMenu>
          <WindowTab>
            <div>
              <img src={javascript} alt="javascript icon" />
            </div>
            <div>index.js</div>
          </WindowTab>
        </header>
        <TextContent>
          <LineNumber>
            <ol>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
            </ol>
          </LineNumber>
          <section className="txtElement">{txt.current}</section>
        </TextContent>
      </TypingContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 10rem;
`;

const TypingContainer = styled.div`
  position: fixed;
  opacity: 0.7;
  left: 55vw;
  width: 40vw;
  height: 35vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  > header {
    display: flex;
    width: 100%;
    height: 4vh;
    background-color: rgba(19, 22, 51, 0.82);
  }
`;

const WindowMenu = styled.section`
  display: flex;

  > div:nth-child(1) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem 0 0.5rem;
    background-color: rgba(183, 66, 66, 0.8);
  }
  > div:nth-child(2) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem 0 0.5rem;
    background-color: rgba(231, 186, 30, 1);
  }
  > div:nth-child(3) {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    margin: 0.5rem 0.2rem 0 0.5rem;
    background-color: rgba(84, 139, 17, 1);
  }
`;

const WindowTab = styled.section`
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  margin-left: 1rem;
  background-color: #2d2d2d;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0 1rem;
  height: 80%;

  > div:nth-child(1) > img {
    width: 1.8rem;
  }
  > div:nth-child(2) {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem;
  }
`;

const LineNumber = styled.section`
  > ol {
    padding: 1rem 1rem 0 1rem;
    margin: 0;
    > li {
      list-style: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  height: 100%;
  background-color: #2d2d2d;
  color: rgba(255, 255, 255, 0.8);
  > section:nth-child(2) {
    padding-top: 1rem;
    word-spacing: 4px;
    letter-spacing: 2px;
  }
`;
