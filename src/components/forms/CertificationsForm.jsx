import React from 'react';

const CertificationsForm = ({ data, onChange }) => {
  const addCertification = () => {
    onChange([...data, '']);
  };

  const updateCertification = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    onChange(newData);
  };

  const removeCertification = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Certifications</h3>
      {data.map((cert, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={cert}
            onChange={(e) => updateCertification(index, e.target.value)}
            placeholder="Enter a certification"
            className="form-input rounded flex-1"
          />
          <button
            onClick={() => removeCertification(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addCertification}
        className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
      >
        Add Certification
      </button>
    </div>
  );
};

export default CertificationsForm;