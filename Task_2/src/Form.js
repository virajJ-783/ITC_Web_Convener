
import React, { useState } from 'react';
import './Form.css';

function Form({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!form.name) {
      errors.name = 'Name is required';
    }

    if (!validateEmail(form.email)) {
      errors.email = 'Email is not valid';
    }

    if (!form.age || isNaN(form.age) || form.age <= 0) {
      errors.age = 'Please enter a valid age';
    }

    if (!form.gender) {
      errors.gender = 'Gender is required';
    }

    if (!form.mobile || form.mobile.length !== 10) {
      errors.mobile = 'Please enter a valid mobile number';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
      {errors.name && <p className="error">{errors.name}</p>}
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
      {errors.email && <p className="error">{errors.email}</p>}
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" className="input" />
      {errors.age && <p className="error">{errors.age}</p>}
      <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" className="input" />
      {errors.gender && <p className="error">{errors.gender}</p>}
      <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile number" className="input" />
      {errors.mobile && <p className="error">{errors.mobile}</p>}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Form;
