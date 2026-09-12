import { useState } from "react";
import './PracticalEx.css';

function PracticalEx({typeInput, placeHolder,title}) {
    const [value, setValue] = useState("");
    return (
        <div className="input-div">
            <p className="title">{title}:</p>
            <input className="input-box" placeholder={placeHolder} type={typeInput} value={value} onChange={(event) => {setValue(event.target.value)}} />
        </div>
    )
}

export default PracticalEx;