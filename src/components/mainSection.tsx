import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import Testimonials from "../components/testimonials";
import { mediaQueries } from "../fp/mediaQueries";
import displayFlex from "../fp/displayFlex";

const Section = styled.section`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, `100%`, 0, 0)};
    ${displayFlex(`flex-start`, `center`, `column nowrap`)};
    a {
      text-decoration: none;
    }
                          `)};
`;

const MainSection: FC = () => (
  <Section>
    <Testimonials />
  </Section>
);

export default MainSection;
