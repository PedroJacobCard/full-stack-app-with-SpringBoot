import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

//import types
import { TarefaType } from "../types";

//criar tarefas props type
type CriarTarefaPropsType = {
  handleClose: () => void;
  tarefas: TarefaType[];
  setTarefas: Dispatch<SetStateAction<TarefaType[]>>;
};

//Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handClose, tarefas e setTarefas
const CriarTarefa = ({ handleClose, tarefas, setTarefas }: CriarTarefaPropsType) => {
  const [idTarefa, setIdTarefa] = useState<number>(0);
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [inicioTarefa, setInicioTarefa] = useState("");
  const [fimTarefa, setFimTarefa] = useState("");
  const [recursoTarefa, setRecursoTarefa] = useState("");
  const [statusTarefa, setStatusTarefa] = useState("");

  useEffect(() => {
    //Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
    const proximoId = Math.max(...tarefas.map((tarefa) => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event: ChangeEvent<HTMLSelectElement>) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(
      `id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`
    );

    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    //console.log(`Tarefas: ` + JSON.stringify(tarefas));
    handleClose();
  };

  return (
    <Container fluid>
      <Card className="absolute top-[20%] left-[20%] translate-[(-50%, -50%)] w-[60%] bg-backgroundPaper p-4">
        <Card.Body>
          <Card.Title>Cadastro de Tarefas</Card.Title>
          <Card.Text>
            <Form>
              <Row md={12}>
                <Form.Group className="mb-3" controlId="tituloTarefa">
                  <Form.Control
                    type="text"
                    value={tituloTarefa}
                    onChange={(e) => {
                      setTituloTarefa(e.target.value);
                    }}
                  />
                  <Form.Text className="text-muted">
                    Título da Tarefa.
                  </Form.Text>
                </Form.Group>
              </Row>
              <Row md={12}>
                <Form.Group className="mb-3" controlId="descricaoTarefa">
                  <Form.Control
                    type="text"
                    value={descricaoTarefa}
                    onChange={(e) => {
                      setDescricaoTarefa(e.target.value);
                    }}
                  />
                  <Form.Text className="text-muted">
                    Descrição da Tarefa.
                  </Form.Text>
                </Form.Group>
              </Row>
              <Row mt={1}>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="inicioTarefa">
                    <Form.Control
                      type="date"
                      value={inicioTarefa}
                      onChange={(e) => {
                        setInicioTarefa(e.target.value);
                      }}
                      className="bg-blackGlass font-medium pl-[13px]"
                    />
                    <Form.Text className="text-muted">
                      Início da Tarefa.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="fimTarefa">
                    <Form.Control
                      type="date"
                      value={fimTarefa}
                      onChange={(e) => {
                        setFimTarefa(e.target.value);
                      }}
                      className="bg-blackGlass font-medium pl-[13px]"
                    />
                    <Form.Text className="text-muted">Fim da Tarefa.</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="recursoTarefa">
                    <Form.Select
                      aria-label="Recurso"
                      className="bg-blackGlass font-medium pl-[13px]"
                      onChange={handleRecurso}
                      size="sm"
                    >
                      <option>Selecione</option>
                      <option value={"Recurso 1"}>Recurso 1</option>
                      <option value={"Recurso 2"}>Recurso 2</option>
                      <option value={"Recurso 3"}>Recurso 3</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="statusTarefa">
                    <Form.Select
                      aria-label="Status"
                      className="bg-blackGlass font-medium"
                      onChange={handleStatus}
                      size="sm"
                    >
                      <option>Selecione</option>
                      <option value={"Aguardando"}>Aguardando</option>
                      <option value={"Em Andamento"}>Em Andamento</option>
                      <option value={"Concluída"}>Concluída</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Text>
          <Row>
            <Col md="auto">
              <Button variant="success" onClick={handleSalvar}>
                Salvar
              </Button>
            </Col>
            <Col md={1}>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CriarTarefa;
