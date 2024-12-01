import React, { useState } from 'react';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SummaryForm from './forms/SummaryForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import CertificationsForm from './forms/CertificationsForm';
import ExperienceForm from './forms/ExperienceForm';
import ResumePreview from './ResumePreview';
import html2pdf from 'html2pdf.js';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      phone: '',
      email: '',
      address: ''
    },
    summary: '',
    education: [],
    skills: [],
    certifications: [],
    experience: []
  });

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const generatePDF = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait'
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
          
          <PersonalInfoForm 
            data={formData.personalInfo} 
            onChange={(data) => updateFormData('personalInfo', data)} 
          />
          
          <SummaryForm 
            data={formData.summary}
            onChange={(data) => updateFormData('summary', data)}
          />
          
          <EducationForm 
            data={formData.education}
            onChange={(data) => updateFormData('education', data)}
          />
          
          <SkillsForm 
            data={formData.skills}
            onChange={(data) => updateFormData('skills', data)}
          />
          
          <CertificationsForm 
            data={formData.certifications}
            onChange={(data) => updateFormData('certifications', data)}
          />
          
          <ExperienceForm 
            data={formData.experience}
            onChange={(data) => updateFormData('experience', data)}
          />
          
          <button
            onClick={generatePDF}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Generate PDF
          </button>
        </div>
        
        <div className="preview-container" style={{ width: '8.5in', margin: '0 auto' }}>
          <div id="resume-preview">
            <ResumePreview data={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;