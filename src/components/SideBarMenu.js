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
  faEllipsisH,
  faHome,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

import logo1 from "../assets/easterEggs/logo1.webp";
import logo2 from "../assets/easterEggs/logo2.webp";
import logo3 from "../assets/easterEggs/logo3.webp";
import logo4 from "../assets/easterEggs/logo4.webp";
import logo5 from "../assets/easterEggs/logo5.webp";
import logo6 from "../assets/easterEggs/logo6.webp";
import logo7 from "../assets/easterEggs/logo7.webp";
import logo8 from "../assets/easterEggs/logo8.webp";
import logo9 from "../assets/easterEggs/logo9.webp";
import logo10 from "../assets/easterEggs/logo10.webp";
import { animated, useSpring } from "react-spring";

export default function SideBarMenu({ setPage, light, setLight, screenWidth }) {
  const [easter, setEaster] = useState(false);
  const [showContactIcons, setShowContactIcons] = useState(false);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo10,
  ];

  const stretch = useSpring({
    config: { duration: 1200 },
    height: "100%",
    from: { height: "100%" },
    delay: 500,
  });

  const fadeIn = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 1 },
    delay: 1800,
  });

  return (
    <SideBarContainer style={stretch} screenWidth={screenWidth}>
      <MenuHeader
        screenWidth={screenWidth}
        style={fadeIn}
        onClick={() => {
          light >= 11 ? setLight(0) : setLight(light + 1);
        }}
      >
        <img alt="site logo" src={light === 0 ? logo : logos[light]} />
      </MenuHeader>
      <SideMenuList style={fadeIn} screenWidth={screenWidth}>
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
        <EasterEggList show={easter} screenWidth={screenWidth}>
          <h2>Easter Egg List</h2>
          <ul>
            <li>
              1. Find a movie ticket and click it!
              <br />
              (Web only)
            </li>
            <li>2. Try to turn off the lights and see what happens</li>
            <li>3. Spin my card 3 times!</li>
            <li>
              4. Type "break" and see what happens
              <br />
              (Web only. Esc to escape)
            </li>
          </ul>
        </EasterEggList>
      </SideMenuList>
      <ContactIcons style={fadeIn} screenWidth={screenWidth}>
        {screenWidth === "mobile" ? (
          <>
            <FontAwesomeIcon
              icon={faEllipsisH}
              onClick={() => setShowContactIcons(!showContactIcons)}
            />
            <MobileContactIcons show={showContactIcons}>
              <div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/GCnomore"
                >
                  <img alt="github icon" src={github} />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/isaac-choi-6a68bb1b4/"
                >
                  <img alt="linkedin icon" src={linkedin} />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:isaacgc08@gmail.com"
                >
                  <img alt="gmail icon" src={gmail} />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/IsaacCh99785355"
                >
                  <img alt="twitter icon" src={twitter} />
                </a>
              </div>
            </MobileContactIcons>
          </>
        ) : (
          <>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/GCnomore"
            >
              <img alt="github icon" src={github} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/isaac-choi-6a68bb1b4/"
            >
              <img alt="linkedin icon" src={linkedin} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:isaacgc08@gmail.com"
            >
              <img alt="gmail icon" src={gmail} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/IsaacCh99785355"
            >
              <img alt="twitter icon" src={twitter} />
            </a>
          </>
        )}
      </ContactIcons>
    </SideBarContainer>
  );
}

const SideBarContainer = styled(animated.section)`
  width: 100%;
  height: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "8vh"
      : "100vh"};
  background-color: rgb(0, 0, 0, 0.7);
  backdrop-filter: blur(1.5px);
  color: white;
  display: flex;
  flex-direction: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "row"
      : "column"};
  justify-content: space-between;
`;

const MenuHeader = styled(animated.header)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "flex-start"
      : "center"};
  align-items: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "center"
      : ""};

  > img {
    width: ${(props) => {
      if (props.screenWidth === "small") {
        return "3.5rem";
      } else if (props.screenWidth === "mobile") {
        return "2.5rem";
      } else {
        return "4rem";
      }
    }};
    margin-left: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0.5rem"
        : "0"};
    margin-top: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0"
        : "0.5rem"};
    height: ${(props) => {
      if (props.screenWidth === "small") {
        return "3.5rem";
      } else if (props.screenWidth === "mobile") {
        return "2.5rem";
      } else {
        return "4rem";
      }
    }};
  }
`;

const SideMenuList = styled(animated.ul)`
  height: 100%;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "0"
      : "-15vh 0 0 0"};
  display: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "flex"
      : ""};
  align-items: center;
  justify-content: space-between;

  > li {
    font-size: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "1.5rem"
        : "2rem"};
    margin: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0 0.8rem"
        : " 3rem 0"};
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

    &:hover {
      filter: drop-shadow(3px 1px 15px rgba(255, 255, 255, 1));
    }

    > p {
      font-size: ${(props) =>
        props.screenWidth === "mobile" ? "2.5vw" : "1rem"};
      margin: 0;
    }
  }
`;

const ContactIcons = styled(animated.footer)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "row"
      : "column"};
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "0"
      : "5vh"};

  > a > img {
    width: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "2.5vw"
        : "2rem"};
    min-width: 1.5rem;
    height: auto;
    margin: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0 0.5rem"
        : "0.5rem 0"};
  }
  > a:nth-child(1) > img {
    border-radius: 3rem;
  }
`;

const EasterEggList = styled.div`
  color: white;
  position: fixed;
  left: ${(props) => {
    if (props.screenWidth === "small") {
      return "55vw";
    } else if (props.screenWidth === "mobile") {
      return "";
    } else {
      return "100%";
    }
  }};
  top: ${(props) =>
    props.screenWidth === "small" || props.screenWidth === "mobile"
      ? "100%"
      : "40vh"};
  background-color: rgba(0, 0, 0, 0.6);
  width: ${(props) => (props.screenWidth === "mobile" ? "" : "18rem")};
  padding: 2rem;
  display: ${(props) => (props.show ? "block" : "none")};

  > h2 {
    margin: 0;
    font-size: ${(props) => {
      if (props.screenWidth === "small") {
        return "";
      } else if (props.screenWidth === "mobile") {
        return "3.5vw";
      } else {
        return "";
      }
    }};
  }

  > ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;

    > li {
      margin: 1rem 0;
      font-size: ${(props) => {
        if (props.screenWidth === "small") {
          return "";
        } else if (props.screenWidth === "mobile") {
          return "2.5vw";
        } else {
          return "";
        }
      }};
    }
  }
`;

const MobileContactIcons = styled.div`
  margin-right: 4.2vw;

  > div {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    right: 1.5vw;
    top: 4rem;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
  }

  > div > a > img {
    width: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "2.5vw"
        : "2rem"};
    min-width: 1.5rem;
    height: auto;
    margin: ${(props) =>
      props.screenWidth === "small" || props.screenWidth === "mobile"
        ? "0.5rem"
        : "0.5rem 0"};
  }
  > div > a:nth-child(1) > img {
    border-radius: 3rem;
  }
`;
