import React, {useState} from "react";
import "./EightBall.css"
import answers from "./answers";

const EightBall = (props)=>{
    const genRandom = ()=> Math.floor(Math.random() * answers.length); // Gets a random answer from file
    const restart = () => {
        setAnswer({msg:"Think of a Question", color:"black"});
    
    }
    const getMessage = ()=>{
        setAnswer(answers[genRandom()]);

    }

    const [answer,setAnswer] = useState({msg:"Think of a Question", color:"black"}) //Initial State
    // console.log(answer.msg)

    return(
        <div className="EightBall">
            <div style={{backgroundColor: answer.color}} onClick={getMessage}>
                {answer.msg}
            
            </div> 
            <div>
            <button onClick={restart}>Restart</button>
            </div>
            
        </div>
        

    )
}

export default EightBall;