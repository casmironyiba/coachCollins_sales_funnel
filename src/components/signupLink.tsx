import { FC } from "react";
import styled from "styled-components";
import remsize from "../fp/remsize";
import { ArrowForward } from "@material-ui/icons";
import displayFlex from "../fp/displayFlex";
import boxProperty from "../fp/boxProperty";

const Container = styled.div`
  ${boxProperty(remsize(250), remsize(40), 0, 0, "skyblue")};
  border-radius: 10px;
  color: white;
  ${displayFlex(`center`, "center", "row wrap ")};
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 2px;
`;

const SignupLink: FC = () => (
  <a href="https://rechargeandgetpaid.com/register.php?username=onyibacollins1">
    <Container>
      Register Now
      <ArrowForward />
    </Container>
  </a>
);

export default SignupLink;
