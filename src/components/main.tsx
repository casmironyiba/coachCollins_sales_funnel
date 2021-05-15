import { CallReceived } from "@material-ui/icons";
import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import MainSection from "./mainSection";

const theme = {
  $white: "white",
  $red: "red",
  $purple: "purple",
  $yellow: "yellow",
  $black: "black",
  $grey: "grey",
};

const Container = styled.div`
  ${boxProperty(`100%`, remsize(1500), 0, remsize(10), theme.$black)};
  padding-top: 0;
  section video {
    width: 300px;
  }
  mark {
    color: ${theme.$red};
    background: inherit;
  }
`;

const DIV = styled.div`
  width: 80vw;
  height: 100%;
  padding: ${remsize(10)};
  padding-top: 3px;
  margin: auto;
  background: ${theme.$purple};

  div#icon1 {
    rotate: 90deg;
  }
`;

const H4 = styled.h4`
  color: ${theme.$white};
  font-size: 0.8rem;
  font-weight: 50;
  letter-spacing: ${remsize(2)};
`;

const P = styled.p`
  color: ${theme.$yellow};
  font-size: 0.8rem;
  font-weight: 50;
  letter-spacing: ${remsize(2)};
`;

const Main: FC = () => (
  <Container>
    <DIV>
      <H4>
        <mark>WARNING !!!</mark> Don't Even Think Of Buying Your Next Airtime or
        Data Untill You Watch This...
      </H4>

      <div>
        <CallReceived id="icon1" />
        <CallReceived />
        <CallReceived />
        <P>
          REOWNED VTU EXPERT REVEALS INSIDER'S SECRETS TO GETTING PAID FOR EVERY
          AIRTIME RECHARGE ON DAILY BASIS
        </P>
      </div>

      <MainSection />
    </DIV>
  </Container>
);
export default Main;
