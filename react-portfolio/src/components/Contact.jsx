import React, { useState } from "react";

// *Define the Contact functional component.
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: "This field is required" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-background text-text p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-secondary p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e);
              if (e.target.value && !validateEmail(e.target.value)) {
                setErrors({ ...errors, email: "Invalid email address" });
              }
            }}
            required
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent h-32"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-accent text-secondary py-2 px-4 rounded hover:bg-primary transition duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
