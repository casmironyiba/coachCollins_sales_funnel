import { FC } from "react";
import Home from "../pages/home";
import styled from "styled-components";
import { mediaQueries } from "../fp/mediaQueries";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";
import { Route } from "react-router";

const DIV = styled.div`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`97vw`, remsize(800), 0, 0, `lightblue`)};

                          `)};
`;

const App: FC = () => (
  <DIV>
    <Route path="/" component={Home} />
  </DIV>
);

export default App;
