import { FC } from "react";
import styled from "styled-components";
import Main from "../components/main";
import Footer from "../components/footer";
import displayFlex from "../fp/displayFlex";

const DIV = styled.div`
  ${displayFlex(`flex-start`, "center", `column nowrap`)};
`;

const Home: FC = () => (
  <DIV>
    <Main />
    <Footer />
  </DIV>
);

export default Home;
