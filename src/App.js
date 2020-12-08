import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  // Button
  const buttonClick = () => {
    console.log("got here");
  };
  return (
    <div className="App" style={{ margin: "0 2rem" }}>
      <h1>components</h1>
      <Button color="primary" click={buttonClick}>
        Click here
      </Button>
      <div style={{ margin: "1rem 0" }}>
        <Input placeholder="Global-CSS-Input" />
      </div>
    </div>
  );
}

export default App;
