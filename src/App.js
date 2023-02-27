import './App.css';
import { User } from './User';
import { useState } from 'react';


function App() {
  const isGreen = true;
  const showInfo = true;
  const users = [
    {
      "name": "Krishna Madhavan",
      "designation": "Senior Full Stack Developer",
      "experience": 6.5,
      "enabled": true
    },
    {
      "name": "Shylaja Haridasan",
      "designation": "Senior Frontend Developer",
      "experience": 6,
      "enabled": true
    },
  ];
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <h1 style={{color: isGreen ? "green": "red"}}>My Professional Info</h1>
      {
        showInfo &&
        users.map( (user, key) => {
          return user.enabled && 
            <User key={key} name={user.name} designation={user.designation} experience={user.experience} />
        })
      }

      <h1>Show me what I type!</h1>
      <p>{inputValue}</p>
      <input type="text" onChange={handleInputChange}></input>
    </div>
  );
}


export default App;
