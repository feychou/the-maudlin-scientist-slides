// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import toshino from '../assets/toshino.gif';
import text from '../assets/text.png';
import intuitive from '../assets/intuitive.png';
import wordList from '../assets/word_list.png';
import wordChain from '../assets/word_chain.png';
import walk from '../assets/walk.png';
import tweets from '../assets/tweets.png';
import thanks from '../assets/thanks.gif';

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#ECEDEE",
  secondary: "#FFBDCA",
  tertiary: "#50DBD9",
  quarternary: "#9799C7"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Introduction
          </Heading>
          <img src={toshino} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">About the project</Heading>
          <Text margin={"10px 0 0 0"} size={1} textColor="tertiary" fit bold>
            Maudlin Scientist is a young lady who's into
          </Text>
          <Text size={1} textColor="tertiary" fit bold>
            hard science and emotional turmoil at the same time.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quarternary">
          <Heading size={2} fit textColor="secondary">In about 280 words</Heading>
          <img src={tweets} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">It works with</Heading>
          <List>
            <ListItem>Science article and papers</ListItem>
            <ListItem>More-or-less-Victorian novels by women</ListItem>
            <ListItem>Markov Chain</ListItem>
            <ListItem>Twitter API</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="quarternary">
          <Heading size={3} fit textColor="secondary">Let's take a closer look</Heading>
          <Appear>
            <img src={text} />
          </Appear>
          <Appear>
            <img src={intuitive} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <img src={text} />
          <Appear>
            <img src={wordList} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <img src={text} />
          <Appear>
            <img src={wordChain} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <img src={text} />
          <Appear>
            <img src={walk} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">Sources and Creds</Heading>
          <List>
            <ListItem>https://twitter.com/MaudlinThe</ListItem>
            <ListItem>https://github.com/feychou/maudlin-scientist</ListItem>
            <ListItem>https://github.com/feychou/the-maudlin-scientist-slides</ListItem>
          </List>
          <List>
            <ListItem>http://howistart.org/posts/clojure/1/</ListItem>
            <ListItem>https://twitter.com/aerinthenniel</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary">Thank you!</Heading>
          <img src={thanks} />
        </Slide>
      </Deck>
    );
  }
}
