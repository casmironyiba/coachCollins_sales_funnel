import { FC, useEffect, useState } from "react";
import Home from "../pages/home";
import styled from "styled-components";
import { mediaQueries } from "../fp/mediaQueries";
import boxProperty from "../fp/boxProperty";
import { BrowserRouter, Route } from "react-router-dom";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
  ${boxProperty(`97vw`, "", 0, 0, `lightblue`)};
  max-width:1400px;

                          `)};
`;

const App: FC = () => {
  const [userNumber] = useState(prompt("please Enter Your Number"));
  useEffect(() => {
    console.log(userNumber);
  });

  return (
    <Container>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </Container>
  );
};

export default App;
