import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Headers";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <Card />
    </Container>
  );
}

export default App;
