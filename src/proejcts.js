import bootstrap from "./assets/icons/Bootstrap.webp";
import expo from "./assets/icons/expo.webp";
import cssIcon from "./assets/icons/css.webp";
import html from "./assets/icons/html.webp";
import javascript from "./assets/icons/javascript.webp";
import jquery from "./assets/icons/Jquery.webp";
import nodejs from "./assets/icons/nodejs.webp";
import react from "./assets/icons/react.webp";
import reactnative from "./assets/icons/reactnative.webp";
import vue from "./assets/icons/Vue.webp";
import materialdesign from "./assets/icons/materialdesign.webp";

const importAllImages = (r) => {
  return r.keys().map(r);
};

const images = importAllImages(
  require.context("./assets/project_img", false, /\.(png|jpe?g|svg|PNG|webp)$/)
);

export const TAG = {
  REACT: "react",
  REACT_NATIVE: "reactNative",
  NODE_JS: "nodeJS",
  VUE: "vue",
  JQUERY: "jquery",
};

export const projects = {
  gcBoard: {
    name: "gcBoard",
    tag: [TAG.REACT],
    icons: [react, javascript],
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
    project_src: "https://gcnomore.github.io/gcboard/",
    project_code: "https://github.com/GCnomore/gcboard",
  },
  movieHunt: {
    name: "movieHunt",
    tag: [TAG.REACT, TAG.NODE_JS],
    icons: [react, nodejs, javascript, cssIcon, bootstrap],
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
    project_src: "https://moviehunt-gc.herokuapp.com/client/",
    project_code: "https://github.com/GCnomore/movieHunt",
  },
  pokedex: {
    name: "pokedex",
    tag: [TAG.JQUERY],
    icons: [html, cssIcon, javascript, jquery, bootstrap],
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
    project_src: "https://gcnomore.github.io/pokedex/",
    project_code: "https://github.com/GCnomore/pokedex",
  },
  kokoatalk: {
    name: "kokoatalk",
    tag: [TAG.REACT_NATIVE],
    icons: [reactnative, javascript, expo],
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
    project_src: "",
    project_code: "https://github.com/GCnomore/chatApp",
  },
  todo: {
    name: "todo",
    tag: [TAG.VUE],
    icons: [vue, javascript, materialdesign],
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
    project_src: "https://gcnomore.github.io/todoApp/",
    project_code: "https://github.com/GCnomore/todoApp",
  },
  watsPoppin: {
    name: "watsPoppin",
    tag: [TAG.REACT],
    icons: [react, javascript, cssIcon, materialdesign],
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
    project_src: "https://gcnomore.github.io/watspoppin/",
    project_code: "https://github.com/GCnomore/watspoppin",
  },
};
