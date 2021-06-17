import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import displayFlex from "../fp/displayFlex";
import remsize from "../fp/remsize";
import { ArrowForward } from "@material-ui/icons";

const Container = styled.div`
  ${boxProperty(remsize(250), remsize(40), 0, 0, "skyblue")};
  border-radius: 10px;
  color: white;
  ${displayFlex(`center`, "center", "row nowrap ")};
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 2px;

  a {
    text-decoration: none;
  }
`;

const Contacts: FC = () => (
  <a href="https://wa.me/qr/MXJFOMEQ7O2ML1">
    <Container>
      Contact Us
      <ArrowForward />
    </Container>
  </a>
);

export default Contacts;
