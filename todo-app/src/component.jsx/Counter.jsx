import { useState } from "react";

const Counter = () => {
    const [num,setNum] = useState(1);
    const[result,setResult] = useState(0);
    function handleIncrement (){
        
        setResult(result + Number(num))
    }
    function handleDecrement() {
        setResult(result - Number(num))
    }
    return (
        <div className="container">
            <div >{result}</div>
            <div className="btns">
                <button onClick={() => {
                    handleDecrement()
                }}>-</button>
                <button onClick={()=> {
                    handleIncrement();
                }}>+</button>
            </div>
            <div className="increseBy">
                <span >Increment/Decrement by</span>
                <input type="number"  className="increment" value={num} onChange={(e) => {
                    setNum(e.target.value)
                    // console.log(num)
                }}/>
                
            </div>
            <button className="resetBtn" onClick={() => {
                setResult(0)
            }}>Reset</button>
            
        </div>
    )
}

export default Counter;