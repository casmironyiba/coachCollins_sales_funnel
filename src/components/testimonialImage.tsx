import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import displayFlex from "../fp/displayFlex";
import { mediaQueries } from "../fp/mediaQueries";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`)};
    ${displayFlex(`space-around`, `center`, `row wrap`)};
    img {
      width: 280px;
      height:280px;
      margin-bottom:5px;
      border-radius:50px 0px;
    }

  `)}
`;

const TestimonialImage: FC = () => (
  <Container>
    <img src="images/image1.jpg" alt="image1" />
    <img src="images/image2.jpg" alt="image1" />
    <img src="images/image3.jpg" alt="image1" />
    <img src="images/image4.jpg" alt="image1" />
    <img src="images/image5.jpg" alt="image1" />
  </Container>
);

export default TestimonialImage;
