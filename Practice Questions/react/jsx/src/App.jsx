function App() {


    const name = "Almas";
    const age = 20;
    const department = "CSM";

    function showMessage() {
        alert("Welcome " + name);
    }

    return (
        <div>
            <h1 className="heading">Student Information</h1><br/>


            <p>Name: {name}</p><br/>
            <p>Age: {age}</p><br/>
            <p>Department: {department}</p><br/>

{/* 
            <button onClick={() => alert("Welcome " + name)}>
                Welcome
            </button> */}

            <button onClick={showMessage} className="button">
            Click Me
        </button>

        </div>
    );
}


export default App;