import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: ${remsize(70)};
  background: white;
`;

const H3 = styled.h3`
  color: red;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 0.9rem;
  text-align: center;
`;

const DIV = styled.div`
  ${boxProperty(`200px`, "30px", "auto", 0, `purple`)};
  color: white;
  position: relative;
  bottom: 23px;
  border-radius: 20px;

  p {
    position: relative;
    bottom: 21px;
    text-align: center;
    font-size: 8px;
  }
`;

const SignupLink: FC = () => (
  <NavLink to="/signup">
    <Container>
      <H3>Take Action!</H3>
      <DIV>
        <H4>GET STARTED NOW!</H4>
        <p>CKICK HERE!</p>
      </DIV>
    </Container>
  </NavLink>
);

export default SignupLink;
