import { FC } from "react";
import styled from "styled-components";
import boxProperty from "../fp/boxProperty";
import remsize from "../fp/remsize";

const Container = styled.div`
  ${boxProperty(`100%`, remsize(600))};
`;

const Testimonials: FC = () => <Container>testimonials ......</Container>;

export default Testimonials;
