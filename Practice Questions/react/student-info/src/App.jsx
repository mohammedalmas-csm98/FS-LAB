function App() {


    const name = "Ravi";
    const age = 20;
    const department = "CSE";

    function showMessage() {
        alert("Welcome " + name);
    }

    return (
        <div>
            <h1>Student Information</h1>


            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Department: {department}</p>

{/* 
            <button onClick={() => alert("Welcome " + name)}>
                Welcome
            </button> */}

            <button onClick={showMessage}>
            Click Me
        </button>

        </div>
    );
}


export default App;
