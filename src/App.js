import './App.css';

function App() {
  const isGreen = true;
  const showInfo = true;

  return (
    <div className="App">
      <h1 style={{color: isGreen ? "green": "red"}}>My Professional Info</h1>
      {showInfo && <User name="Krishna Madhavan" designation="Senior Full Stack Developer" experience={3} />}
    </div>
  );
}


const User = (props) => {
  return (
    <div>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Designation:</b> {props.designation}</p>
      <p><b>Years of Experience:</b> {props.experience}</p>
    </div>
  )
}

export default App;
