import React from 'react';

const PersonalInfoForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Personal Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="form-input rounded"
        />
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="form-input rounded"
        />
      </div>
      <input
        type="text"
        name="jobTitle"
        value={data.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        className="form-input rounded w-full"
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="form-input rounded w-full"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-input rounded w-full"
      />
      <input
        type="text"
        name="address"
        value={data.address}
        onChange={handleChange}
        placeholder="Address"
        className="form-input rounded w-full"
      />
    </div>
  );
};

export default PersonalInfoForm;