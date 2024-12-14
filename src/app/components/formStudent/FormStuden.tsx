"use client";
import React, { useCallback, useState } from "react";
import FormField from "./FormField";
import StackField from "./StackField";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stack: [] as string[],
    linkedin: "",
    cv: null as File | null,
    provincia: "",
    comunidad: "",
    codigoPostal: "",
  });

  const stacks = ["JavaScript", "Python", "Java", "C#", "Ruby"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (stackName: string) => {
    setFormData((prev) => {
      const isSelected = prev.stack.includes(stackName);
      return {
        ...prev,
        stack: isSelected ? prev.stack.filter((s) => s !== stackName) : [...prev.stack, stackName],
      };
    });
  };

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevFormData) => ({ ...prevFormData, cv: file }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Student Information Form</h2>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <FormField
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <StackField
        stacks={stacks}
        selectedStacks={formData.stack}
        onChange={handleCheckboxChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <FormField
        label="LinkedIn"
        type="url"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <FormField
        label="CV (PDF)"
        type="file"
        name="cv"
        onChange={handleChange}
        required
        accept=".pdf"
        className="form-input"
      />
      <FormField
        label="Provincia"
        type="text"
        name="provincia"
        value={formData.provincia}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <FormField
        label="Comunidad Autónoma"
        type="text"
        name="comunidad"
        value={formData.comunidad}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <FormField
        label="Código Postal"
        type="text"
        name="codigoPostal"
        value={formData.codigoPostal}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentForm;