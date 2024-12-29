import React from 'react';

interface FormInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function FormInput({
  type,
  label,
  value,
  onChange,
  required,
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}