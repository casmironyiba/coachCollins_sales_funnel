import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import displayFlex from "../fp/displayFlex";

const Logic = styled.div`
  ${boxProperty(`100%`, remsize(70), `auto`, remsize(35))};
  ${displayFlex(`flex-start`, `center`, `row nowrap`)};

  & > div {
    ${boxProperty(remsize(40), remsize(35), 0, 0, `black`)};
    border: 2px solid lightgreen;
    margin: auto;
    border-radius: 10px 0px 10px 0px;
    font-size: 11px;
    position: relative;
    bottom: 30px;
    text-align: center;
    color: white;
  }
`;
const Day = styled.div``;
const Hour = styled.div``;
const Minute = styled.div``;
const Second = styled.div``;

const TimingLogic: FC = () => (
  <Logic>
    <Day>
      <h6>Days</h6>
    </Day>
    <Hour>
      <h6>Hours</h6>
    </Hour>
    <Minute>
      <h6>Minutes</h6>
    </Minute>
    <Second>
      <h6>Seconds</h6>
    </Second>
  </Logic>
);

export default TimingLogic;
