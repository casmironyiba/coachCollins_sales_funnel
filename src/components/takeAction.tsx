import { FC } from "react";
import styled from "styled-components";
import SignupLink from "../components/signupLink";
import Contacts from "../components/contacts";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import displayFlex from "../fp/displayFlex";

const Container = styled.div`
  ${boxProperty(`100%`, remsize(120), 0, 0)};
  ${displayFlex(`space-around`, `center`, `row wrap`)};
  a {
    text-decoration: none;
  }
`;

const TakeAction: FC = () => (
  <Container>
    <SignupLink />
    <Contacts />
  </Container>
);

export default TakeAction;
