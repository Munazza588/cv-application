import "./GeneralInfo.css";
function GeneralInfo({inputType,placeHolder,title,value,onChange,required}) {
    return (
        <div className="input-div">
            <p className="title">{title}:</p>
            <input className="input-box" placeholder={placeHolder} type={inputType} value={value} onChange={onChange} required={required} />
        </div>
    )

}

export default GeneralInfo;