import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import "./App.css";
import EduExperience from "./components/Education/EduExperience";
import PracticalEx from "./components/Experience/PracticalEx";

function App() {
  return (
    <div className="general-info-section">
      <div className="personal-info-div">
          <p className="title-tag">Personal Information</p>
          <div className="personal-info">
          <GeneralInfo inputType="text" placeHolder="Enter name..." title="Name" />
          <GeneralInfo inputType="email" placeHolder="Enter email.." title="Email" />
          <GeneralInfo inputType="tel"  placeHolder="Enter Phone Number..." title="Phone" />
          </div>
      </div>
      <div className="education-info-section">
        <p className="title-tag">Education</p>
        <div className="education">
        <EduExperience inputType="text" placeHolder="School name.." title="School Name" />
        <EduExperience inputType="text" placeHolder="Title Of Study.." title="Title Of Study" />
        <EduExperience inputType="date"  placeHolder="Start Date" title="Start Date" />
        <EduExperience inputType="date"  placeHolder="End Date" title="End Date" />
        </div>
      </div>
      <div className="experience-info-section">
        <p className="title-tag">Experience</p>
        <div className="experience">
        <div className="experience-outer-div">
          <div className="top-section">
            <PracticalEx inputType="text" placeHolder="Company Name.." title="Company Name" />
            <PracticalEx inputType="text" placeHolder="Position Title.." title="Position Title" />
            <PracticalEx inputType="text" placeHolder="Responsibilities" title="Responsibilities" />
          </div>
          <div className="bottom-section">
              <PracticalEx inputType="date"  placeHolder="Start Date" title="Start Date" />
              <PracticalEx inputType="date"  placeHolder="End Date" title="End Date" />
          </div>
        </div>
        </div>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default App;