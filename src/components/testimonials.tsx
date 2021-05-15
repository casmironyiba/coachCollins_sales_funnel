import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";

const Container = styled.div`
  ${boxProperty(`100%`, remsize(500))};
`;

const Testimonys: FC = () => <Container>testimonials ......</Container>;

export default Testimonys;
