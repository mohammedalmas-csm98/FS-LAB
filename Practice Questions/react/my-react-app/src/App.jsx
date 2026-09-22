function Welcome() {
    return <h1>Welcome to React!</h1>;
}

function Greeting() {
    const name = "Almas";
    return <h1 style={{color:"#C8A2C8"}}>Hello, {name}!</h1>;
}

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Welcome />
      <Greeting />

      <img
        src="anits.jpg"
        alt="Anits Logo"
        style={{ width: "150px" }}
      />
    </div>
  );
}

export default App;

/* 

function App() {

    function greet() {
        return "Hello";
    }

    function welcome() {
        return "Welcome to React";
    }

    return (
        <>
            <h1>{greet()}</h1>
            <h2>{welcome()}</h2>
        </>
    );
}

export default App; 

*/