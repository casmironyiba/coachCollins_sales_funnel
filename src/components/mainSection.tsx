import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import TimingLogic from "./timingLogic";
import SignupLink from "../components/signupLink";
import Testimonials from "../components/testimonials";

const theme = {
  $white: "white",
};

const Section = styled.section`
  ${boxProperty(remsize(300), "", `auto`, 0)};

  a {
    text-decoration: none;
  }
`;

const H6 = styled.h6`
  position: relative;
  top: 10px;
  left: 80px;
  color: orange;
`;

const DIV = styled.div`
  width: ${remsize(300)};
  height: ${remsize(300)};
  position: relative;
`;

const H4 = styled.h4`
  color: ${theme.$white};
  font-size: 0.8rem;
  font-weight: 50;
  letter-spacing: ${remsize(2)};
  text-align: center;
`;

const MainSection: FC = () => (
  <Section>
    <H6>Click on the below video</H6>
    <video src="Top.mp4"></video>
    <DIV>
      <H4>Next Training Starts in ...</H4>
      <TimingLogic />
      <SignupLink />
    </DIV>
    <Testimonials />
  </Section>
);

export default MainSection;
