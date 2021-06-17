import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import MainSection from "./mainSection";
import Notification from "./notification";
import { mediaQueries } from "../fp/mediaQueries";
import TakeAction from "./takeAction";

const theme = {
  $red: "red",
  $dark: "#333333",
};

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`100%`, `100%`, 0, remsize(10), theme.$dark)};
  padding-top: 0;

  section video {
    width: 300px;
  }

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  `)};
`;

const Main: FC = () => (
  <Container>
    <Notification />
    <MainSection />
    <TakeAction />
  </Container>
);
export default Main;
