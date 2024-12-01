import React from 'react';

const SkillsForm = ({ data, onChange }) => {
  const addSkill = () => {
    onChange([...data, '']);
  };

  const updateSkill = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    onChange(newData);
  };

  const removeSkill = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Skills</h3>
      {data.map((skill, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
            placeholder="Enter a skill"
            className="form-input rounded flex-1"
          />
          <button
            onClick={() => removeSkill(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addSkill}
        className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsForm;