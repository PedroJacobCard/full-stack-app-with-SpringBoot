import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="flex items-center justify-center p-5 bg-slate-700">
        <Navbar.Brand>Gerenciamento de Projetos</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
