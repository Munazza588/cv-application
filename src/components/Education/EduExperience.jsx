import './EduExperience.css';

function EduExperience({typeInput, placeHolder,title,value,onChange,required}) {
    return (
        <div className="input-div">
            <p className="title">{title}:</p>
            <input className="input-box" placeholder={placeHolder} type={typeInput} value={value} onChange={onChange} required={required} />
        </div>
    )
}

export default EduExperience;