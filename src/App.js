import "./App.css";
import {SketchPicker} from 'react-color'
import React,{useState} from "react";

function App() {
  const [color,setColor] = useState('blue')
  const [hidden,setHidden] = useState(false)



  return (
    <div style={{backgroundColor:color}} className="App">
      <div className="container">
      {
        hidden ?
        <SketchPicker className="color-picker" transp color={color} onChange={(updateColor) =>setColor(updateColor.hex)} /> : null
      }
        
        <button style={{color:color}} onClick ={() => setHidden(!hidden)}>
          {
            hidden ? 'Close Color Picker' : 'Open Color Picker'
          }
        </button>
      </div>
    </div>
  );
}

export default App;
