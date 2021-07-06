import React, { useState } from "react";

import MensagemFoiEnviada from "../mensagemFoiEnviada/index";
import styled from "styled-components";

import { Form, Button, Row, Col } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70vh;

  background: #f8f8f8;
`;

const ButtonGroup =  styled.div`
  margin: 10px;
  display: flex;
`

const Contato = () => {
  const [mensagemEnviada, setMensagemEnviada] = useState("false");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formValid =
      nome.length > 0 &&
      /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
      mensagem.length > 0;
    if (!formValid) {
      return;
    }
    if (!localStorage.getItem("mensagens")) {
      localStorage.setItem("mensagens", JSON.stringify([]));
    }
    const mensagens = JSON.parse(localStorage.getItem("mensagens"));
    mensagens.push({
      nome,
      email,
      mensagem,
    });
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
  };

  const onReset = () => {
    setNome("");
    setEmail("");
    setMensagem("");
  };

  const enviarMensagem = () => {
    const mensagemAtual = mensagemEnviada;
    if (mensagemAtual) {
      setMensagemEnviada(!mensagemAtual);
    }
  };

  const resetarMensagem = () => {
    setMensagemEnviada("false");
  };

  const renderizarContato = () => {
    if (mensagemEnviada) {
      return (
        <Form onSubmit={submit} onReset={onReset}>
          <Form.Label column="lg" size="lg">
            Entre em contato conosco
          </Form.Label>
          <Form.Group as={Row} controlId="formGroupName">
            <Form.Label column sm={3}>
              Nome
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupText">
            <Form.Label column sm={3}>
              Mensagem
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows={3}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </Col>
          </Form.Group>
          <ButtonGroup>
          <Form.Group inline>
            <Button variant="primary" type="submit" onClick={enviarMensagem}>
              Enviar
            </Button>{' '}
            <Button variant="secondary" type="reset" onClick={resetarMensagem}>
              Resetar
            </Button>
          </Form.Group>
          </ButtonGroup>
        </Form>
      );
    }

    return (
      <div>
        <MensagemFoiEnviada />
        <Button onClick={resetarMensagem}>Resetar</Button>
      </div>
    );
  };

  return <Container>{renderizarContato()}</Container>;
};

export default Contato;
