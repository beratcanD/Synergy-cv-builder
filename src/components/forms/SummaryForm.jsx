import React from 'react';

const SummaryForm = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Professional Summary</h3>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a professional summary..."
        className="form-textarea rounded w-full h-32"
      />
    </div>
  );
};

export default SummaryForm;