import { useState } from "react";

import styled, { keyframes, css } from "styled-components/macro";
import portrait from "../assets/profile_cut.jpg";

import angular from "../assets/icons/Angular.png";
import aws from "../assets/icons/aws.png";
import bootstrap from "../assets/icons/Bootstrap.png";
import cssIcon from "../assets/icons/css.png";
import expo from "../assets/icons/expo_icon_132404.png";
import flutter from "../assets/icons/flutter.webp";
import github from "../assets/icons/github1.jpg";
import html from "../assets/icons/html-5.png";
import javascript from "../assets/icons/javascript.png";
import jquery from "../assets/icons/Jquery.png";
import materialdesign from "../assets/icons/materialdesign.png";
import mongodb from "../assets/icons/MongoDB.png";
import mysql from "../assets/icons/mysql.png";
import nextjs from "../assets/icons/nextjs.webp";
import nodejs from "../assets/icons/nodejs.png";
import react from "../assets/icons/React.png";
import reactnative from "../assets/icons/reactnative.webp";
import vue from "../assets/icons/Vue.png";

export default function About() {
  const [flipCard, setFlipCard] = useState(false);
  return (
    <AboutContainer>
      <ProfileContainer>
        <ProfileCard
          onClick={() => {
            setFlipCard(true);
            setTimeout(() => {
              setFlipCard(false);
            }, 1000);
          }}
          flipCard={flipCard}
        >
          <header>
            <p>LV. 1</p>
            <p>ALL ROUNDER</p>
          </header>
          <img src={portrait} />
          <h1>FRONT END DEVELOPER</h1>
          <p>READY FOR ANYTHING</p>
          <div>
            <h2>Top Skills</h2>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>React Native</p>
              <p>Node JS</p>
              <p>Next JS</p>
            </div>
          </div>
        </ProfileCard>
        <SummaryContainer>
          <h2>A BIT ABOUT ME</h2>
          <p>
            I’ve always admired programmers since I noticed that almost
            everything I use in my daily life was created by them. As a 90’s
            kid, I grew up playing countless games and advents of new
            technologies which eventually caught my interest in programming.
            Doing something productive rather than just playing games with a
            computer was enough reason for me to dive in. I am a very curious
            person and eager to know how things around me work fundamentally.
            Being a developer is a fun adventure for me!
          </p>
        </SummaryContainer>
      </ProfileContainer>
      <SkillContainer>
        <section>
          <h2>Confident Skills</h2>
          <div>
            <img src={angular} />
            <img src={aws} />
            <img src={bootstrap} />
            <img src={cssIcon} />
            <img src={expo} />
            <img src={flutter} />
            <img src={github} />
            <img src={html} />
            <img src={javascript} />
            <img src={jquery} />
            <img src={materialdesign} />
            <img src={mongodb} />
            <img src={mysql} />
            <img src={nextjs} />
            <img src={nodejs} />
            <img src={react} />
            <img src={reactnative} />
            <img src={vue} />
          </div>
        </section>
      </SkillContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.section`
  width: 100%;
  padding: 0 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const flip = keyframes`
   from {
      transform: rotateY(0deg);
   }
   to{
      transform: rotateY(360deg);
   }
`;

const flipCard = css`
  animation: ${flip} 1s ease-in-out;
`;

const ProfileCard = styled.div`
  width: 25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
  border: 5px solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  text-align: center;
  ${(props) => (props.flipCard ? flipCard : null)};
  cursor: pointer;
  user-select: none;

  > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    align-items: center;

    > p:nth-child(1) {
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
    }
    > p:nth-child(2) {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  > h1 {
    font-size: 2rem;
    margin: 0;
  }

  > img {
    width: 18rem;
    border-radius: 50%;
    align-self: center;
    opacity: 0.9;
  }

  > p {
    font-size: 1.6rem;
    margin: 0;
  }

  > div {
    > h2 {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.5rem;
      margin-bottom: 1rem;

      > p {
        margin: 0;
      }
    }
  }
`;

const SummaryContainer = styled.section`
  margin-top: 5rem;
  font-size: 1.2rem;

  > h2 {
    margin: 0 0 2rem 0;
    text-decoration: underline;
  }
`;

const SkillContainer = styled.section`
  display: flex;
`;
