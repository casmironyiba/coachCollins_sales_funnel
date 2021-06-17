import { FC } from "react";
import styled from "styled-components";
import displayFlex from "../fp/displayFlex";
import { mediaQueries } from "../fp/mediaQueries";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${displayFlex(`space-around`, `center`, `row wrap`)};
  }

                          `)}
`;
const TestimonialVideos: FC = () => (
  <Container>
    <div>
      <iframe
        width="280"
        height="315"
        src="https://www.youtube.com/embed/baVZQ_NvFec"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div>
      <iframe
        width="280"
        height="315"
        src="https://www.youtube.com/embed/MlFlejYzbTw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </Container>
);

export default TestimonialVideos;
