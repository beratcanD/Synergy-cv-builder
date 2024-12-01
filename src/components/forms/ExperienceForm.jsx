import React from 'react';

const ExperienceForm = ({ data, onChange }) => {
  const addExperience = () => {
    onChange([...data, {
      title: '',
      company: '',
      period: '',
      duties: ['']
    }]);
  };

  const updateExperience = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addDuty = (expIndex) => {
    const newData = [...data];
    newData[expIndex].duties.push('');
    onChange(newData);
  };

  const updateDuty = (expIndex, dutyIndex, value) => {
    const newData = [...data];
    newData[expIndex].duties[dutyIndex] = value;
    onChange(newData);
  };

  const removeDuty = (expIndex, dutyIndex) => {
    const newData = [...data];
    newData[expIndex].duties = newData[expIndex].duties.filter((_, i) => i !== dutyIndex);
    onChange(newData);
  };

  const removeExperience = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Professional Experience</h3>
      {data.map((exp, expIndex) => (
        <div key={expIndex} className="space-y-2 p-4 border rounded">
          <input
            type="text"
            value={exp.title}
            onChange={(e) => updateExperience(expIndex, 'title', e.target.value)}
            placeholder="Job Title"
            className="form-input rounded w-full"
          />
          <input
            type="text"
            value={exp.company}
            onChange={(e) => updateExperience(expIndex, 'company', e.target.value)}
            placeholder="Company"
            className="form-input rounded w-full"
          />
          <input
            type="text"
            value={exp.period}
            onChange={(e) => updateExperience(expIndex, 'period', e.target.value)}
            placeholder="Period (e.g., 2018 - Present)"
            className="form-input rounded w-full"
          />
          
          <div className="space-y-2">
            <h4 className="font-medium">Duties</h4>
            {exp.duties.map((duty, dutyIndex) => (
              <div key={dutyIndex} className="flex gap-2">
                <input
                  type="text"
                  value={duty}
                  onChange={(e) => updateDuty(expIndex, dutyIndex, e.target.value)}
                  placeholder="Enter a duty"
                  className="form-input rounded flex-1"
                />
                <button
                  onClick={() => removeDuty(expIndex, dutyIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addDuty(expIndex)}
              className="w-full bg-gray-200 py-1 rounded hover:bg-gray-300"
            >
              Add Duty
            </button>
          </div>
          
          <button
            onClick={() => removeExperience(expIndex)}
            className="text-red-600 hover:text-red-800"
          >
            Remove Experience
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;