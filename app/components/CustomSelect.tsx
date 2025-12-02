"use client";

import { useState, useRef, useEffect } from "react";
import { allIcons } from "../helpers/icons";

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  className = "",
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get the selected option label
  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder || "";

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionClick = (optionValue: string) => {
    // Create a synthetic event to match the onChange signature
    const syntheticEvent = {
      target: {
        name,
        value: optionValue,
        type: "select-one",
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(syntheticEvent);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Hidden select for form submission */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="hidden"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom dropdown trigger */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full px-3 py-1 pr-8 border border-footer-border rounded-lg text-base  text-footer-text font-normal font-poppins bg-white outline-none cursor-pointer focus:border-primary-blue disabled:opacity-50 disabled:cursor-not-allowed text-left flex items-center justify-between"
      >
        <span className={value ? "" : "text-footer-text"}>
          {displayText.includes(" *") ? (
            <>
              {displayText.replace(" *", "")}
              <span className="text-red-500"> *</span>
            </>
          ) : (
            displayText
          )}
        </span>
        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-footer-border transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {allIcons.chevronDown(20, 20)}
        </div>
      </button>

      {/* Custom dropdown menu */}
      {isOpen && (
        <div className="absolute  z-50 w-full bg-white mt-1  border border-footer-border rounded-lg shadow-lg overflow-hidden">
          {options.map((option, index) => {
            const isSelected = option.value === value;
            return (
              <div key={option.value} className="bg-primary-blue/10">
                <button
                  type="button"
                  onClick={() => handleOptionClick(option.value)}
                  className={`w-full px-3 py-2 text-left text-base  font-poppins transition-colors cursor-pointer ${
                    isSelected
                      ? "text-primary-blue font-semibold"
                      : "text-disable font-normal"
                  } hover:bg-gray-20`}
                >
                  {option.label}
                </button>
                {index < options.length - 1 && (
                  <div className="border-t border-border-select-item" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
