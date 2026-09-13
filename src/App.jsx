import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import "./App.css";
import EduExperience from "./components/Education/EduExperience";
import PracticalEx from "./components/Experience/PracticalEx";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [startStudy, setStartStudy] = useState("");
  const [endStudy, setEndStudy] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle,setPositionTitle] = useState("");
  const [responsibilities,setResponsibiities] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [startExperience, setStartExperience] = useState("");
  const [endExperience, setEndExperience] = useState("");


  function handleSubmit() {
      setSubmitted(true);
  }

  function handleEdit() {
    setSubmitted(false);
  }

  function DisplayResult() {
    return (
      <div>
        <div className="per-div">
          <p className="title-tag">Personal Information</p>
          <ul className="personal-info-display">
            <li>{name}</li>
            <li>{email}</li>
            <li>{phone}</li>
          </ul>
        </div>
        <div>
          <p className="title-tag">Education</p>
          <div className="edu-div">
            <div className="edu-div-top">
                <p>School Name: {schoolName}</p>
                <p>Study Title: {studyTitle}</p>
            </div>
            <div className="edu-div-bottom">
                <p>Start Study: {startStudy}</p>
                <p>End Study: {endStudy}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="title-tag">Experience</p>
          <div className="edu-div">
            <div className="edu-div-top">
                <p>Company Name: {companyName}</p>
                <p>Position Title: {positionTitle}</p>
            </div>
            <div className="edu-div-bottom">
                <p>Start Date: {startExperience}</p>
                <p>End Date: {endExperience}</p>
            </div>
          </div>
          <p className="res-para">Responsibilites: {responsibilities}</p>
        </div>
        <button className="Edit-button" onClick={handleEdit}>Edit</button>
      </div>

    );
  }

  function CVform() {
    return (
    <div className="general-info-section">
      <div className="personal-info-div">
          <p className="title-tag">Personal Information</p>
          <div className="personal-info">
          <GeneralInfo inputType="text" placeHolder="Enter name..." title="Name" value={name}  onChange={(e) => setName(e.target.value)} required/>
          <GeneralInfo inputType="email" placeHolder="Enter email.." title="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <GeneralInfo inputType="tel"  placeHolder="Enter Phone Number..." title="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}  required/>
          </div>
      </div>
      <div className="education-info-section">
        <p className="title-tag">Education</p>
        <div className="education">
        <EduExperience typeInput="text" placeHolder="School name.." title="School Name" value={schoolName}  onChange={(e) => setSchoolName(e.target.value)} required/>
        <EduExperience typeInput="text" placeHolder="Title Of Study.." title="Title Of Study" value={studyTitle}  onChange={(e) => setStudyTitle(e.target.value)} required/>
        <EduExperience typeInput="date"  placeHolder="Start Date" title="Start Date" value={startStudy}  onChange={(e) => setStartStudy(e.target.value)} required/>
        <EduExperience typeInput="date"  placeHolder="End Date" title="End Date" value={endStudy}  onChange={(e) => setEndStudy(e.target.value)} required/>
        </div>
      </div>
      <div className="experience-info-section">
        <p className="title-tag">Experience</p>
        <div className="experience">
        <div className="experience-outer-div">
          <div className="top-section">
            <PracticalEx typeInput="text" placeHolder="Company Name.." title="Company Name" value={companyName}  onChange={(e) => setCompanyName(e.target.value)} />
            <PracticalEx typeInput="text" placeHolder="Position Title.." title="Position Title" value={positionTitle}  onChange={(e) => setPositionTitle(e.target.value)}  />
            <PracticalEx typeInput="text" placeHolder="Responsibilities" title="Responsibilities" value={responsibilities}  onChange={(e) => setResponsibiities(e.target.value)} />
          </div>
          <div className="bottom-section">
              <PracticalEx typeInput="date"  placeHolder="Start Date" title="Start Date" value={startExperience}  onChange={(e) => setStartExperience(e.target.value)} />
              <PracticalEx typeInput="date"  placeHolder="End Date" title="End Date" value={endExperience}  onChange={(e) => setEndExperience(e.target.value)} />
          </div>
        </div>
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>)
  }





  return (
    submitted ? DisplayResult():CVform()
    
  );
}

export default App;