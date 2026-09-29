import Student from './Student';


function App() {


    const studentName = "Almas";
    const studentAge = 20;
    const studentBranch ="CSM"

    return (
        <Student
            name={studentName}
            age={studentAge}
            branch={studentBranch}
        />
    );
}


export default App;