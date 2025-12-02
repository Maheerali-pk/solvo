"use client";

import { allIcons } from "../helpers/icons";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

// Select options from Figma
const lookingForOptions = [
  { value: "start-new-project", label: "Start a new project" },
  { value: "consultations", label: "Consultations" },
  { value: "dedicated-team", label: "Dedicated team" },
  { value: "revamp-existing-job", label: "Revamp an existing job" },
];

const preferableSoftwareOptions = [
  { value: "ansys", label: "Ansys" },
  { value: "solidworks", label: "Solidworks" },
  { value: "ls-dyna", label: "LS-DYNA" },
  { value: "abaqus", label: "Abaqus" },
  { value: "autocad", label: "AutoCAD" },
  { value: "openfoam", label: "OpenFOAM" },
  { value: "comsol", label: "Comsol" },
  { value: "others", label: "Others" },
];

const estimatedBudgetOptions = [
  { value: "5000-usd", label: "5000 USD" },
  { value: "5000-10000-usd", label: "5000 - 10000 USD" },
  { value: "10000-30000-usd", label: "10000 - 30000 USD" },
  { value: "50000-usd", label: "50000 USD" },
];

const servicesOptions = [
  { value: "fea-analysis", label: "FEA analysis" },
  { value: "cfd-analysis", label: "CFD analysis" },
  { value: "cad-design", label: "CAD design" },
  { value: "crashworthiness", label: "Crashworthiness" },
  { value: "seismic-analysis", label: "Seismic analysis" },
  { value: "hvac", label: "HVAC" },
  { value: "thermal-management", label: "Thermal management" },
  { value: "product-design", label: "Product design" },
  { value: "design-optimization", label: "Design optimization" },
  { value: "fsi", label: "FSI" },
  { value: "airflow-simulations", label: "Airflow simulations" },
];

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
      className="flex flex-col gap-[1.375rem] p-8 border border-primary-blue rounded-[1.25rem] sm:w-full w-[47rem] sm:p-5"
    >
      {/* Title */}
      <div className="relative z-10  sm:block hidden">
        <h3 className="text-2xl  text-text-gray font-semibold font-poppins">
          <span className="text-primary-blue">Get in touch</span> with us
        </h3>

        {/* Checkmark Items */}
        <div className="flex flex-col gap-[0.625rem]  mt-6">
          {/* First Item */}
          <div className="flex flex-row text-primary-blue items-center gap-2.5 w-full">
            <div className="text-primary-blue flex-shrink-0">
              {allIcons.checkCircle(12, 12)}
            </div>
            <span className="text-sm  text-footer-text font-medium font-poppins">
              We will respond to you within 24 hours
            </span>
          </div>

          {/* Second Item */}
          <div className="flex flex-row text-primary-blue items-center gap-2.5 w-full">
            <div className="text-primary-blue flex-shrink-0">
              {allIcons.checkCircle(12, 12)}
            </div>
            <span className="text-sm  text-footer-text font-medium font-poppins">
              You'll be talking to CAE Engineers account mangers
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-3">
        <h2 className="font-semibold font-obviously text-footer-text">
          <span className="text-primary-blue">Get in touch</span> with us
        </h2>
      </div> */}
      <h2 className="text-text-gray font-semibold font-poppins sm:hidden block">
        How Can We Help You?
      </h2>

      {/* Form Fields */}
      <div className="flex flex-col gap-6">
        {/* 6 Fields Grid - 3 cols, 2 rows */}
        <div
          className="grid sm:grid-cols-2 grid-cols-[repeat(3,12.5rem)] gap-6"
          style={{ justifyContent: "space-between" }}
        >
          {/* I am looking to * */}
          <CustomSelect
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            placeholder="I am looking to *"
            required
            className="w-[12.5rem] sm:w-full"
            options={lookingForOptions}
          />

          {/* Full Name * */}
          <div className="relative w-[12.5rem] sm:w-full">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-3 py-1 border border-footer-border rounded-lg text-base  text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
              *
            </span>
          </div>

          {/* Services I need * */}
          <CustomSelect
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="Services I need *"
            required
            className="w-[12.5rem] sm:w-full"
            options={servicesOptions}
          />

          {/* Email * */}
          <div className="relative w-[12.5rem] sm:w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-3 py-1 border border-footer-border rounded-lg text-base  text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
              *
            </span>
          </div>

          {/* Preferable Software * */}
          <CustomSelect
            name="software"
            value={formData.software}
            onChange={handleChange}
            placeholder="Preferable Software *"
            required
            className="w-[12.5rem] sm:w-full"
            options={preferableSoftwareOptions}
          />

          {/* Estimated Budget * */}
          <CustomSelect
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Estimated Budget *"
            required
            className="w-[12.5rem] sm:w-full"
            options={estimatedBudgetOptions}
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="message"
            className="text-lg  text-text-gray font-medium font-poppins"
          >
            Your Massage <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here...."
            required
            rows={8}
            className="px-3 py-3 border border-footer-border rounded-lg w-full min-h-[12.5rem] text-base  text-footer-text font-normal font-poppins outline-none resize-none focus:border-primary-blue"
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
            <span className="text-base text-primary-blue font-normal font-poppins">
              This project required an NDA
            </span>
          </label>

          <div className="flex flex-col gap-6">
            <label
              htmlFor="file"
              className="text-xs  text-text-gray font-normal font-poppins"
            >
              Upload Document (Optional)
            </label>
            <div className="flex flex-row items-center gap-5 px-3 py-1 border border-footer-border rounded-lg">
              <span className="text-sm  text-footer-text font-normal font-poppins flex-1">
                {formData.file ? formData.file.name : "Choose file to upload"}
              </span>
              <label className="px-3 py-1 border border-orange rounded-lg bg-orange cursor-pointer">
                <span className="text-sm  text-white font-normal font-poppins">
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
        <button type="submit" className="btn btn-primary w-fit">
          <span className="text-base text-white font-normal font-poppins">
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
