import { React } from "react";
import styled from "styled-components";

const Text = styled.text`
  margin: 10%;
`;

const Container = styled.div`
  width: 100%;
  background: #949494;
  padding: 10px 0;
  color: #fff;
`;
export const SobreEmpresa = () => {
  return (
    <Container>
      <Text>
        Sobre: Tentamos sempre nos entregar ao maximo e oferecer um bom serviço
        a você. Venha nos conhecer!{" "}
      </Text>
    </Container>
  );
};
