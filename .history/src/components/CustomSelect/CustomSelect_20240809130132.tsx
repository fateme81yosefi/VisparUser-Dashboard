import React, { useEffect, useState } from 'react';
import dropdownIcon from "../../components/Icon/dropdown.svg";

interface CustomSelectProps {
    label: string;
    options: { value: number; label: string }[];
    value: number | string;
    onChange: (value: number) => void;
    isOptionSelected?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options,
    value,
    onChange,
    isOptionSelected = false,
}) => {
    const [selectedValue, setSelectedValue] = useState<number | string>(value);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    return (
        <div>
            <label className="mb-0.5 block text-black dark:text-white">
                {selectedValue === undefined || selectedValue === '' ? label : label}
            </label>

            <div className="relative z-10 bg-white dark:bg-form-input">
                <select
                    value={selectedValue}
                    onChange={(e) => {
                        const newValue = Number(e.target.value);
                        setSelectedValue(newValue);
                        onChange(newValue);
                    }}
                    className={`relative z-10 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''}`}>
                    <option value="" disabled hidden>{label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-body dark:text-bodydark">
                            {option.label}
                        </option>
                    ))}
                </select>

                <span className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
                    <img src={dropdownIcon} alt="Dropdown icon" />
                </span>
            </div>
        </div>
    );
};

export default CustomSelect;
