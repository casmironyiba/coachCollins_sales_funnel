import { FC } from "react";
import styled from "styled-components";
import remsize from "../fp/remsize";
import boxProperty from "../fp/boxProperty";
import displayFlex from "../fp/displayFlex";
const Container = styled.div``;

const theme = {
  $red: "red",
  $white: "white",
  $black: "black",
};

const DIV = styled.div`
  ${boxProperty(`80vw`, `100`, `auto`, remsize(10))};
  padding-top: 3px;
  ${displayFlex(`flex-start`, `center`, `column nowrap`)};

  div#icon1 {
    rotate: 90deg;
  }
`;

const H4 = styled.h4`
  color: ${theme.$red};
  font-size: 1.2rem;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  font-weight: 50;
  letter-spacing: ${remsize(2)};

  & > span {
    background: ${theme.$black};
  }
  &mark {
    color: ${theme.$red};
    background: inherit;
  }
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: normal;
  line-height: ${remsize(22)};
  color: ${theme.$white};

  & > span {
    background-color: teal;
  }
`;
const Notification: FC = () => (
  <Container>
    <DIV>
      <H4>
        <span>
          <mark>WARNING !!!</mark> Don't Even Think Of Buying Your Next Airtime
          If You Will Not Get Paid For It
        </span>
      </H4>

      <P>
        <span>
          DO YOU KNOW ABOUT THE LATEST OPPORTUNITY IN THE TELECOM SPACE THAT
          GIVES YOU AN ACCESS TO START MAKING THOUSANDS AND MILLIONS OF MONEY
          DAILY AS YOU AND OTHER PEOPLE BUY AIRTIME, DATA, RENEW DSTV, GOTV,
          STARTIME, AND PAY FOR ELECTRICITY BILLS? THIS IS THE BEST OPPORTUNITY
          IN THE TELECOM SPACE RIGHT NOW, ONE OF MY FRIENDS JUST MADE OVER
          #70,000,000 WITHIN THE SPACE OF 3YEARS OF POSITIONING HIMSELF IN THE
          TELECOM SPACE. YOU CAN BE EARNING MORE THAN #5,000 TO #50,000 DAILY
          WITH THIS OPPORTUNITY. ALL YOU NEED IS TO POSITION YOURSELF. WATCH
          THIS VIDEO TO KNOW MORE AND GET STARTED NOW.
        </span>
      </P>
    </DIV>
  </Container>
);

export default Notification;
