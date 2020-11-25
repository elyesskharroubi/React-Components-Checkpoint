import "./App.css";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import FullName from "./Components/Profile/FullName";
import Adress from "./Components/Profile/Adress";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <ProfilePhoto />
          <FullName />
          <Adress />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
