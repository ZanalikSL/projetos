import React from "react";
import styled from "styled-components";

import { Card, Form, Col} from "react-bootstrap";

const Products = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
  padding: 3% 5% 10% 5%;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8f8f8;
  padding-top: 5%;
`;

export class Produtos extends React.Component {
  state = {
    valorFiltro: "",
    listaProdutos: [
      {
        imagem: "https://picsum.photos/id/146/480/600",
        nome: "Bicicleta",
      },
      {
        imagem: "https://picsum.photos/id/157/480/600",
        nome: "Skate",
      },
      {
        imagem: "https://picsum.photos/id/2/480/600",
        nome: "Notebook",
      },
      {
        imagem: "https://picsum.photos/id/486/480/600",
        nome: "Maquina de escrever",
      },
      {
        imagem: "https://picsum.photos/id/250/480/600",
        nome: "Camera Vintage",
      },
      {
        imagem: "https://picsum.photos/id/96/480/600",
        nome: "Controle PS4",
      },
    ],
  };

  mudarValorFiltro = (e) => {
    this.setState({ valorFiltro: e.target.value });
  };

  render() {
    const listaFiltrada = this.state.listaProdutos.filter((novaLista) =>
      novaLista.nome.toLowerCase().includes(this.state.valorFiltro)
    );

    const listagemProdutos = listaFiltrada.map((product) => {
      return (
        <Card border="light" style={{ margin: "1%"}} >
         <Card.Body> 
         <Card.Title >
            {product.nome}
          </Card.Title>
            <Card.Img
              variant="top"
              src={product.imagem}
              alt="Imagem aleatoria que representa um produto"
            />
          </Card.Body>
        </Card>
      );
    });

    return (
      <Body>
        <Form>
          <Form.Row >
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Label for="input" htmlFor="inputText">Filtro de produtos</Form.Label>
            </Col>
            <Col md={{ span: 6, offset: 3 }}>
            <Form.Control
              id="inputText"
              type="text"
              value={this.state.valorFiltro}
              onChange={this.mudarValorFiltro}
            />
            </Col>
            <Col md={{ span: 6, offset: 3 }}>
            <Form.Text id="textHelpInline" muted>
              Escreva o nome do produto.
            </Form.Text>
            </Col>
          </Form.Row>
        </Form>
        
        <Products>{listagemProdutos}</Products>
      </Body>
    );
  }
}
