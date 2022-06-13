import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("the button was clicked ");
        let newText  = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("the state was changed ")
        setText(event.target.value); 
    }
    // const [text, setText] = useState('Enter text here');
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="16"
          value={text}
          onChange = {handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
