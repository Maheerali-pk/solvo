"use client";

import { allIcons } from "../helpers/icons";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    lookingFor: "",
    fullName: "",
    services: "",
    email: "",
    software: "",
    budget: "",
    message: "",
    requiresNDA: false,
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[1.375rem] p-8 border border-primary-blue rounded-[1.25rem] w-[47rem]"
    >
      {/* Title */}
      <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins">
        How Can We Help You?
      </h2>

      {/* Form Fields */}
      <div className="flex flex-col gap-6">
        {/* 6 Fields Grid - 3 cols, 2 rows */}
        <div
          className="grid grid-cols-[repeat(3,12.5rem)] gap-6"
          style={{ justifyContent: "space-between" }}
        >
          {/* I am looking to * */}
          <CustomSelect
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            placeholder="I am looking to *"
            required
            className="w-[12.5rem]"
            options={[
              { value: "consultation", label: "Consultation" },
              { value: "service", label: "Service" },
              { value: "quote", label: "Quote" },
            ]}
          />

          {/* Full Name * */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="px-3 py-1 border border-footer-border rounded-lg w-[12.5rem] text-base leading-[2em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
          />

          {/* Services I need * */}
          <CustomSelect
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="Services I need *"
            required
            className="w-[12.5rem]"
            options={[
              { value: "fea", label: "FEA" },
              { value: "cfd", label: "CFD" },
              { value: "cad", label: "CAD" },
            ]}
          />

          {/* Email * */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="px-3 py-1 border border-footer-border rounded-lg w-[12.5rem] text-base leading-[2em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
          />

          {/* Preferable Software * */}
          <CustomSelect
            name="software"
            value={formData.software}
            onChange={handleChange}
            placeholder="Preferable Software *"
            required
            className="w-[12.5rem]"
            options={[
              { value: "ansys", label: "ANSYS" },
              { value: "solidworks", label: "SolidWorks" },
              { value: "autocad", label: "AutoCAD" },
            ]}
          />

          {/* Estimated Budget * */}
          <CustomSelect
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Estimated Budget *"
            required
            className="w-[12.5rem]"
            options={[
              { value: "under-5k", label: "Under $5,000" },
              { value: "5k-10k", label: "$5,000 - $10,000" },
              { value: "10k-25k", label: "$10,000 - $25,000" },
              { value: "25k-plus", label: "$25,000+" },
            ]}
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="message"
            className="text-lg leading-[1.333em] text-text-gray font-medium font-poppins"
          >
            Your Massage *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here...."
            required
            rows={8}
            className="px-3 py-3 border border-footer-border rounded-lg w-full min-h-[12.5rem] text-base leading-[1.714em] text-footer-text font-normal font-poppins outline-none resize-none focus:border-primary-blue"
          />
        </div>

        {/* Checkbox and File Upload */}
        <div className="flex flex-col gap-6">
          <label className="flex flex-row items-center gap-5 cursor-pointer">
            <input
              type="checkbox"
              name="requiresNDA"
              checked={formData.requiresNDA}
              onChange={handleChange}
              className="w-4 h-4 border border-primary-blue rounded cursor-pointer"
            />
            <span className="text-base leading-6 text-primary-blue font-normal font-poppins">
              This project required an NDA
            </span>
          </label>

          <div className="flex flex-col gap-6">
            <label
              htmlFor="file"
              className="text-xs leading-[2em] text-text-gray font-normal font-poppins"
            >
              Upload Document (Optional)
            </label>
            <div className="flex flex-row items-center gap-5 px-3 py-1 border border-footer-border rounded-lg">
              <span className="text-sm leading-[1.714em] text-footer-text font-normal font-poppins flex-1">
                {formData.file ? formData.file.name : "Choose file to upload"}
              </span>
              <label className="px-3 py-1 border border-orange rounded-lg bg-orange cursor-pointer">
                <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
                  Browse File
                </span>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary-blue rounded-xl flex items-center justify-center gap-2 py-4 hover:opacity-90 transition-opacity"
        >
          <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
            Send as a message!
          </span>
          <div className="w-6 h-6 text-white">
            {allIcons.chevronRight(24, 24)}
          </div>
        </button>
      </div>
    </form>
  );
}
