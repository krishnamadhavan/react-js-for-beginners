import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Krishna Madhavan" designation="Senior Full Stack Developer" experience={3} />
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
