import { useState } from "react";
import styled from "styled-components/macro";
import logo from "../assets/logo.webp";
import gmail from "../assets/icons/gmail.webp";
import twitter from "../assets/icons/twitter_icon.svg";
import linkedin from "../assets/icons/linkedin_icon.svg";
import github from "../assets/icons/github1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faEgg,
  faHome,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBarMenu({ setPage }) {
  const [easter, setEaster] = useState(false);

  return (
    <SideBarContainer>
      <MenuHeader>
        <img alt="site logo" src={logo} />
      </MenuHeader>
      <SideMenuList>
        <li onClick={() => setPage("")}>
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </li>
        <li onClick={() => setPage("About")}>
          <FontAwesomeIcon icon={faIdBadge} />
          <p>Profile</p>
        </li>
        <li onClick={() => setPage("Projects")}>
          <FontAwesomeIcon icon={faBoxOpen} />
          <p>Works</p>
        </li>
        <li onClick={() => setEaster(!easter)}>
          <FontAwesomeIcon icon={faEgg} />
        </li>
        <EasterEgg show={easter}>
          <h2>Easter Egg List</h2>
          <ul>
            <li>1. Find a movie ticket and click it!</li>
            <li>2. Try to turn off the lights and see what happens</li>
            <li>3. Spin my card 3 times!</li>
            <li>4. Type "break" and see what happens</li>
          </ul>
        </EasterEgg>
      </SideMenuList>
      <ContactIcons>
        <a rel="noreferrer" target="_blank" href="https://github.com/GCnomore">
          <img alt="github icon" src={github} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/isaac-choi-6a68bb1b4/"
        >
          <img alt="linkedin icon" src={linkedin} />
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:isaacgc08@gmail.com">
          <img alt="gmail icon" src={gmail} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/IsaacCh99785355"
        >
          <img alt="twitter icon" src={twitter} />
        </a>
      </ContactIcons>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  backdrop-filter: blur(1.5px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuHeader = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  > img {
    width: 80%;
    margin-top: 0.5rem;
    height: fit-content;
  }
`;

const SideMenuList = styled.ul`
  height: 100%;
  list-style: none;
  margin: 0 0 20rem 0;
  padding: 0;

  > li {
    margin: 3rem 0;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
    filter: drop-shadow(6px 4px 4px rgba(255, 255, 255, 0.5));
    text-shadow: 4px 4px 3px rgba(255, 255, 255, 0.5);
    transition: 0.2s;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;

    &:active {
      transform: scale(0.95);
      transition: 0s;
      color: rgba(255, 255, 255, 0.75);
      filter: drop-shadow(3px 1px 3px rgba(255, 255, 255, 0.9));
      text-shadow: 3px 1px 3px rgba(255, 255, 255, 0.9);
    }

    > p {
      font-size: 1rem;
      margin: 0;
    }
  }
`;

const ContactIcons = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > a > img {
    width: 2.5rem;
    height: auto;
    margin: 0.5rem 0;
  }
`;

const EasterEgg = styled.div`
  color: white;
  position: fixed;
  left: 5vw;
  top: 40vh;
  background-color: rgba(0, 0, 0, 0.6);
  width: 18vw;
  padding: 1rem;
  display: ${(props) => (props.show ? "block" : "none")};

  > h2 {
    margin: 0;
  }

  > ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;

    > li {
      margin: 1rem 0;
    }
  }
`;
