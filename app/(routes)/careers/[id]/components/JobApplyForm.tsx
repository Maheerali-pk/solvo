"use client";

import { useState } from "react";
import { allIcons } from "@/app/helpers/icons";

export default function JobApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    education: "",
    currentSalary: "",
    experience: "",
    linkedin: "",
    email: "",
    cv: null as File | null,
    cityCountry: "",
    software: "",
    companyName: "",
    switchReason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-white sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto sm:px-0">
        <div className="flex flex-col gap-[1.375rem]">
          {/* Form Title */}
          <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
            Apply for this job
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[1.875rem]"
          >
            {/* Two Equal Columns */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
              {/* Name */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-[#8A8A8A] font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XXXX"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Education */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Education <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="BSCS, MS in aerospace engineering ... etc"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Current Salary */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  What's your current salary?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="currentSalary"
                  value={formData.currentSalary}
                  onChange={handleChange}
                  placeholder="e.g. 50,000 PKR"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Experience */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  How many years of your experience?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 5 - 6 years"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Please share your LinkedIn Profile's Link:{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="www.linkedin.com/profile"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="John@gmail.com"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* CV/Resume */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  CV / Resume <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-row items-center gap-5 px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg">
                  <span className="text-base leading-[1.5em] text-footer-text font-normal font-poppins flex-1">
                    {formData.cv ? formData.cv.name : "Upload"}
                  </span>
                  <label className="px-3 py-0 bg-[#F98502] rounded-2xl cursor-pointer">
                    <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
                      Browse File
                    </span>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* City & Country */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  City & Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cityCountry"
                  value={formData.cityCountry}
                  onChange={handleChange}
                  placeholder="e.g. Lahore, Pakistan"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Software */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Grip on softwares <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="software"
                  value={formData.software}
                  onChange={handleChange}
                  placeholder="e.g. Ansys, Solidworks ... etc"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Current Company */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Current company name? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. ibex"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>

              {/* Switch Reason */}
              <div className="flex flex-col gap-[0.125rem]">
                <label className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
                  Why do you want to switch from your current company?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="switchReason"
                  value={formData.switchReason}
                  onChange={handleChange}
                  placeholder="Reason"
                  required
                  className="w-full px-3 py-[0.625rem] border border-[#8A8A8A] rounded-lg text-base leading-[1.5em] text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-3 pt-[0.75rem]">
              <button type="submit" className="btn btn-primary">
                <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
                  Submit your application
                </span>
                <div className="w-5 h-5 text-white">
                  {allIcons.chevronRight(20, 20)}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
