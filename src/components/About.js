import { useState } from "react";

import styled, { keyframes, css } from "styled-components/macro";
import portrait from "../assets/profile_cut.webp";

import angular from "../assets/icons/Angular.webp";
import aws from "../assets/icons/aws.webp";
import bootstrap from "../assets/icons/Bootstrap.webp";
import cssIcon from "../assets/icons/css.webp";
import expo from "../assets/icons/expo.webp";
import flutter from "../assets/icons/flutter.webp";
import github from "../assets/icons/github1.webp";
import html from "../assets/icons/html.webp";
import javascript from "../assets/icons/javascript.webp";
import jquery from "../assets/icons/Jquery.webp";
import materialdesign from "../assets/icons/materialdesign.webp";
import mongodb from "../assets/icons/MongoDB.webp";
import mysql from "../assets/icons/mysql.webp";
import nextjs from "../assets/icons/nextjs.webp";
import nodejs from "../assets/icons/nodejs.webp";
import react from "../assets/icons/react.webp";
import reactnative from "../assets/icons/reactnative.webp";
import vue from "../assets/icons/Vue.webp";
import typescript from "../assets/icons/typescript.webp";
import oauth from "../assets/icons/oauth.webp";
import passport from "../assets/icons/passport.webp";
import puppeteer from "../assets/icons/puppeteer.webp";
import cucumber from "../assets/icons/cucumber.webp";
import firebase from "../assets/icons/firebase.webp";
import heroku from "../assets/icons/heroku.svg";
import semanticui from "../assets/icons/semanticui.webp";
import jest from "../assets/icons/jest.webp";
import express from "../assets/icons/express.webp";

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
          <img src={portrait} alt="author" />
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
      <Divider />
      <SkillContainer>
        <section>
          <div>
            <h2>Confident Skills</h2>
            <div>
              <div>
                <img alt="html icon" src={html} />
                <p>HTML</p>
              </div>
              <div>
                <img alt="css icon" src={cssIcon} />
                <p>CSS</p>
              </div>
              <div>
                <img alt="javascript icon" src={javascript} />
                <p>Javascript</p>
              </div>
              <div>
                <img alt="react icon" src={react} />
                <p>React</p>
              </div>
              <div>
                <img alt="nextjs icon" src={nextjs} />
                <p>Next JS</p>
              </div>
              <div>
                <img alt="reactnative icon" src={reactnative} />
                <p>React Native</p>
              </div>
              <div>
                <img alt="expo icon" src={expo} />
                <p>Expo</p>
              </div>
              <div>
                <img alt="nodejs icon" src={nodejs} />
                <p>Node JS</p>
              </div>
              <div>
                <img alt="bootstrap icon" src={bootstrap} />
                <p>Bootstrap</p>
              </div>
              <div>
                <img alt="materialdesign icon" src={materialdesign} />
                <p>Material Design</p>
              </div>
              <div>
                <img alt="github icon" src={github} />
                <p>Github</p>
              </div>
              <div>
                <img alt="mongodb icon" src={mongodb} />
                <p>Mongo DB</p>
              </div>
              <div>
                <img alt="firebase icon" src={firebase} />
                <p>Firebase</p>
              </div>
              <div>
                <img alt="heroku icon" src={heroku} />
                <p>Heroku</p>
              </div>
              <div>
                <img alt="puppeteer icon" src={puppeteer} />
                <p>Puppeteer</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>Have experienced</h2>
            <div>
              <div>
                <img alt="express icon" src={express} />
                <p>Express</p>
              </div>
              <div>
                <img alt="oauth icon" src={oauth} />
                <p>Oauth</p>
              </div>
              <div>
                <img alt="passport icon" src={passport} />
                <p>Passport</p>
              </div>
              <div>
                <img alt="jest icon" src={jest} />
                <p>Jest</p>
              </div>
              <div>
                <img alt="cucumber icon" src={cucumber} />
                <p>Cucumber</p>
              </div>
              <div>
                <img alt="semanticui icon" src={semanticui} />
                <p>Semantic UI</p>
              </div>
              <div>
                <img alt="typescript icon" src={typescript} />
                <p>Typescript</p>
              </div>
              <div>
                <img alt="angular icon" src={angular} />
                <p>Angular</p>
              </div>
              <div>
                <img alt="aws icon" src={aws} />
                <p>AWS</p>
              </div>
              <div>
                <img alt="flutter icon" src={flutter} />
                <p>Flutter</p>
              </div>
              <div>
                <img alt="jquery icon" src={jquery} />
                <p>Jquery</p>
              </div>
              <div>
                <img alt="mysql icon" src={mysql} />
                <p>MySQL</p>
              </div>
              <div>
                <img alt="vue icon" src={vue} />
                <p>Vue</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Currently improving</h2>
            <div>
              <div>
                <img alt="flutter icon" src={flutter} />
                <p>Flutter</p>
              </div>
              <div>
                <img alt="mysql icon" src={mysql} />
                <p>MySQL</p>
              </div>
              <div>
                <img alt="nodejs icon" src={nodejs} />
                <p>Node JS</p>
              </div>
              <div>
                <img alt="express icon" src={express} />
                <p>Express</p>
              </div>
              <div>
                <img alt="oauth icon" src={oauth} />
                <p>Oauth</p>
              </div>
              <div>
                <img alt="passport icon" src={passport} />
                <p>Passport</p>
              </div>
              <div>
                <img alt="typescript icon" src={typescript} />
                <p>Typescript</p>
              </div>
            </div>
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
  > section {
    width: 100%;
    padding: 0 5rem;
  }
`;

const ProfileContainer = styled.section`
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

const bounce = keyframes`
  0%{
     transform: translateY(0);
   }
  50%{
     transform: translateY(5px);
   }
  100%{
     transform: translateY(0);
   }
`;

const bounceCard = css`
  animation: ${bounce} 1.3s ease-in-out infinite;
`;

const ProfileCard = styled.div`
  font-family: "Exo", sans-serif;
  width: 25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 8px 10px 8px 1px black;
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
  ${(props) => (props.flipCard ? flipCard : bounceCard)};
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  > h2 {
    margin: 0 0 2rem 0;
    text-decoration: underline;
    font-family: "Exo", sans-serif;
    font-family: "Luckiest Guy", cursive;
  }
`;

const SkillContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > section:nth-child(1) {
    width: 100%;
    text-align: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        font-size: 3rem;
        font-family: "Exo", sans-serif;
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 2px;
        word-spacing: 0.5rem;
      }

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 1rem 0.25rem;
        font-size: 1rem;
        margin-bottom: 3rem;

        > div {
          > img {
            width: 5rem;
            padding: 0.5rem;
          }
          > p {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
        }
      }
    }
  }

  > section:nth-child(2) {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      text-align: center;

      > h2 {
        font-size: 2rem;
        font-family: "Exo", sans-serif;
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 2px;
        word-spacing: 0.5rem;
      }

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem 2rem;
        font-size: 1rem;

        > div {
          > img {
            width: 3rem;
          }
          > p {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
        }
      }
    }
  }
`;

const Divider = styled.div`
  width: 5px;
  height: 85vh;
  background-color: rgba(0, 0, 0, 0.2);
  align-self: center;
`;
