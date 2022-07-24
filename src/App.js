import React, { Component } from "react";
import "./styles/App.css";
import uniqid from "uniqid";
import FullName from "./components/cvform/fullname";
import Occupation from "./components/cvform/profession";
import Contact from "./components/cvform/contact";
import Experience from "./components/cvform/experience";
import Education from "./components/cvform/education";
import Languages from "./components/cvform/languages";
import Skills from "./components/cvform/skills";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Tatiana Giselle Ahumada Lobo",
      occupation: "Ingeniera Ambiental y de Saneamiento",
      phone: "555-555-555",
      email: "unemail@example.com",
      linkedin: "www.linkedin.com",
      jobExperience: {
        year: "",
        position: "",
        id: uniqid(),
      },
      language: {
        text: "",
        id: uniqid(),
      },
      education: {
        text: "",
        id: uniqid(),
      },
      skill: {
        text: "",
        id: uniqid(),
      },
      positions: [],
      languages: [],
      educations: [],
      skills: [],
    };
    this.handleFullName = this.handleFullName.bind(this);
    this.handleOccupation = this.handleOccupation.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleJobExperience = this.handleJobExperience.bind(this);
    this.handleSubmitExperience = this.handleSubmitExperience.bind(this);
  }

  handleFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  handleOccupation(event) {
    this.setState({
      occupation: event.target.value,
    });
  }

  handleContact(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleJobExperience(event) {
    const { jobExperience } = this.state;
    this.setState({
      jobExperience: {
        ...jobExperience,
        [event.target.id]: event.target.value,
        id: this.state.jobExperience.id,
      },
    });
  }

  handleSubmitExperience(event) {
    event.preventDefault();
    this.setState({
      positions: this.state.positions.concat(this.state.jobExperience),
      jobExperience: {
        year: "",
        position: "",
        id: uniqid(),
      },
    });
  }

  handleEducation = (event) => {
    this.setState({
      education: {
        text: event.target.value,
        id: this.state.education.id,
      },
    });
  };

  handleSubmitEducation = (event) => {
    event.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        text: "",
        id: uniqid(),
      },
    });
  };

  handleLanguages = (event) => {
    this.setState({
      language: {
        text: event.target.value,
        id: this.state.language.id,
      },
    });
  };

  handleSubmitLanguages = (event) => {
    event.preventDefault();
    this.setState({
      languages: this.state.languages.concat(this.state.language),
      language: {
        text: "",
        id: uniqid(),
      },
    });
  };

  handleSkills = (event) => {
    this.setState({
      skill: {
        text: event.target.value,
        id: this.state.skill.id,
      },
    });
  };

  handleSubmitSkills = (event) => {
    event.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        text: "",
        id: uniqid(),
      },
    });
  };
  render() {
    const {
      fullName,
      occupation,
      phone,
      email,
      linkedin,
      jobExperience,
      positions,
      education,
      educations,
      language,
      languages,
      skill,
      skills,
    } = this.state;
    return (
      <div className="App">
        <h1 className="main-title">Write your CV!</h1>
        <div className="cv-form">
          <span>Complete your CV</span>
          <form>
            <label htmlFor="fullname">
              <input
                value={fullName}
                onChange={this.handleFullName}
                type="text"
                id="fullname"
                placeholder="Full name"
              />
            </label>
            <label htmlFor="occupation">
              <input
                value={occupation}
                onChange={this.handleOccupation}
                type="text"
                id="occupation"
                placeholder="Occupation"
              />
            </label>
            <div className="contact-form">
              <span>Contact</span>
              <label htmlFor="phone">
                <input
                  value={phone}
                  onChange={this.handleContact}
                  type="tel"
                  id="phone"
                  placeholder="Telephone"
                />
              </label>
              <label htmlFor="email">
                <input
                  value={email}
                  onChange={this.handleContact}
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </label>
              <label htmlFor="Linkedin">
                <input
                  value={linkedin}
                  onChange={this.handleContact}
                  type="url"
                  id="linkedin"
                  placeholder="Linkedin"
                />
              </label>
            </div>
            <div className="jobs-form">
              <span>Job experience</span>
              <label htmlFor="year">Year: </label>
              <input
                value={jobExperience.year}
                onChange={this.handleJobExperience}
                type="text"
                id="year"
              />
              <label htmlFor="position">Position: </label>
              <input
                value={jobExperience.position}
                onChange={this.handleJobExperience}
                type="text"
                id="position"
              />
              <button onClick={this.handleSubmitExperience}>Submit</button>
            </div>
            <div className="about-form">
              <label htmlFor="education">
                <input
                  onChange={this.handleEducation}
                  value={education.text}
                  type="text"
                  id="education"
                  placeholder="Education"
                />
                <button onClick={this.handleSubmitEducation}>Submit</button>
              </label>
              <label htmlFor="languages">
                <input
                  onChange={this.handleLanguages}
                  value={language.text}
                  type="text"
                  id="languages"
                  placeholder="Languages"
                />
                <button onClick={this.handleSubmitLanguages}>Submit</button>
              </label>
              <label htmlFor="skills">
                <input
                  onChange={this.handleSkills}
                  value={skill.text}
                  type="text"
                  id="skills"
                  placeholder="Add your skills"
                />
                <button onClick={this.handleSubmitSkills}>Submit</button>
              </label>
            </div>
          </form>
        </div>
        <div className="cv-preview">
          <div className="personal-details">
            <FullName fullName={fullName} />
            <Occupation occupation={occupation} />
            <Contact phone={phone} email={email} linkedin={linkedin} />
          </div>
          <div className="resume">
            <Experience positions={positions} />
            <Education educations={educations} />
          </div>
          <div className="soft-skills">
            <Languages languages={languages} />
            <Skills skills={skills} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
