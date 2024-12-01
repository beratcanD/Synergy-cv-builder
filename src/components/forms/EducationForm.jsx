import React from 'react';

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    onChange([...data, { school: '', degree: '', period: '' }]);
  };

  const updateEducation = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const removeEducation = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Education</h3>
      {data.map((edu, index) => (
        <div key={index} className="space-y-2 p-4 border rounded">
          <input
            type="text"
            value={edu.school}
            onChange={(e) => updateEducation(index, 'school', e.target.value)}
            placeholder="School Name"
            className="form-input rounded w-full"
          />
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
            placeholder="Degree"
            className="form-input rounded w-full"
          />
          <input
            type="text"
            value={edu.period}
            onChange={(e) => updateEducation(index, 'period', e.target.value)}
            placeholder="Period (e.g., 2016 - 2020)"
            className="form-input rounded w-full"
          />
          <button
            onClick={() => removeEducation(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;