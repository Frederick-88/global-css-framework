import Button from "./components/Button/Button";

function App() {
  // Button
  const buttonClick = () => {
    console.log("got here");
  };
  return (
    <div className="App">
      <h1>components</h1>
      <Button color="danger" click={buttonClick}>
        Click here
      </Button>
    </div>
  );
}

export default App;
