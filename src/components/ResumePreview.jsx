import React from 'react';
import '../styles/global.css';

const ResumePreview = ({ data }) => {
  const { personalInfo, summary, education, skills, certifications, experience } = data;

  return (
    <div className="resume">
      <header className="header">
        <div className="header-content">
          <div className="name-section">
            <div className="name-container">
              <span className="first-name">{personalInfo.firstName || 'ISABEL'}</span>
              <span className="last-name">{personalInfo.lastName || 'MERCADO'}</span>
            </div>
            <p className="job-title">{personalInfo.jobTitle || 'Executive Secretary'}</p>
          </div>
          <div className="contact-info">
            <p><span>{personalInfo.phone || '+123-456-7890'}</span> <span className="icon"></span></p>
            <p><span>{personalInfo.email || 'hello@reallygreatsite.com'}</span> <span className="icon"></span></p>
            <p><span>{personalInfo.address || '123 Anywhere St., Any City'}</span> <span className="icon"></span></p>
          </div>
        </div>
      </header>

      <section className="section summary">
        <h2 className="section-title">SUMMARY</h2>
        <p>{summary || 'Highly motivated and professional Executive Secretary with over 7 years of experience providing high-level support to senior executives...'}</p>
      </section>

      <div className="two-column">
        <div className="left-column">
          <section className="section">
            <h2 className="section-title">EDUCATION</h2>
            {(education.length > 0 ? education : [{
              school: 'Ginyard International Co. University',
              degree: 'Bachelor\'s Degree in Business Administration',
              period: '2016 - 2020'
            }]).map((edu, index) => (
              <div key={index} className="education-item">
                <p className="school-name">{edu.school}</p>
                <p className="degree">{edu.degree}</p>
                <p className="degree">{edu.period}</p>
              </div>
            ))}
          </section>

          <section className="section">
            <h2 className="section-title">SKILLS</h2>
            <ul className="skills-list">
              {(skills.length > 0 ? skills : [
                'Strong organizational and time-management skills',
                'Exceptional communication and interpersonal skills'
              ]).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">CERTIFICATIONS</h2>
            <ul className="certifications-list">
              {(certifications.length > 0 ? certifications : [
                'Executive Secretary and Business Administration Certification',
                'Advanced Executive Assistant and Office Manager Diploma'
              ]).map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="right-column">
          <section className="section">
            <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
            {(experience.length > 0 ? experience : [{
              title: 'Executive Secretary',
              company: 'Ingoude Company',
              period: '2018 - Present',
              duties: [
                'Manage the schedules and calendars of the CEO and other senior executives',
                'Coordinate and schedule meetings and conferences with internal and external stakeholders'
              ]
            }]).map((exp, index) => (
              <div key={index} className="job">
                <div className="job-header">
                  <p className="job-title-company">{exp.title}</p>
                  <p className="job-period">{exp.company} | {exp.period}</p>
                </div>
                <ul className="job-duties">
                  {exp.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;