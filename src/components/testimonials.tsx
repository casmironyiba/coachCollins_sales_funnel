import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import { mediaQueries } from "../fp/mediaQueries";
import TestimonialImage from "./testimonialImage";
import TestimonialVideos from "./testimonialVideos";

const Container = styled.div`
  ${mediaQueries("mobileS")(`
 ${boxProperty(`100%`)};
  margin-top: ${remsize(50)};

`)};
`;

const H6 = styled.div`
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: ${remsize(10)};
  color: yellow;
  margin-top: 30px;
`;

const Testimonys: FC = () => (
  <Container>
    <H6>Testimonials</H6>
    <TestimonialVideos />
    <TestimonialImage />
  </Container>
);

export default Testimonys;
