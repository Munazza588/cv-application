import { useState } from "react";
import "./GeneralInfo.css";
function GeneralInfo({inputType,placeHolder,title}) {
    const [value, setValue] = useState("");
    return (
        <div className="input-div">
            <p className="title">{title}:</p>
            <input className="input-box" placeholder={placeHolder} type={inputType} value={value} onChange={(event) => {setValue(event.target.value)}} />
        </div>
    )

}

export default GeneralInfo;